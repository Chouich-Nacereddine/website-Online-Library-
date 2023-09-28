const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const fs = require('fs');
const mongoose = require("mongoose");
let refreshTokens = [];
app.use(express.json());


// Connection to BooksDB
const booksConnection = mongoose.createConnection(
  "mongodb+srv://nacreddine:3ZuAjbGOJSQY3ELv@cluster0.awlyvkd.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.on('connected',() => {
  console.log("Connecté à MongoDB : Books");
})
.on('error',(erreur) => {
  console.error("Erreur de connexion à MongoDB : Books", erreur);
});

// BookSB general forme
const BooksSchema = new mongoose.Schema({
  N_item : String,
  Matiere : String,
  Titre : String,
  Auteur : String,
  Editeur : String,
  Qte : Number,
  N_INV : String, 
  Img : String
}, { collection: 'Books' });

const Books = booksConnection.model("Books", BooksSchema);


// Connection to UsersDB
const usersConnection = mongoose.createConnection(
  "mongodb+srv://Nacer:gesE74py7IvXxCs6@cluster0.fnv49eh.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.on('connected',() => {
  console.log("Connecté à MongoDB : Users");
})
.on('error',(erreur) => {
  console.error("Erreur de connexion à MongoDB : Users", erreur);
});

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  email: String,
  password: String,
  isAdmin: Boolean,
}, { collection: 'users' });

const users = usersConnection.model("user", userSchema);


//SIGNUP API
app.post("/signup", (req, res) => {
  const { id, firstName, lastName, email, password, isAdmin } = req.body;

  // Création d'une instance du modèle utilisateur avec les données reçues
  const newUser = new users({
    id: "",
    username: `${firstName} ${lastName}`,
    email,
    password,
    isAdmin: false,
  });

  // Sauvegarde de l'utilisateur dans la base de données
  newUser
    .save()
    .then(() => {
      res.status(201).json({ message: "Utilisateur créé avec succès" });
    })
    .catch((erreur) => {
      res
        .status(500)
        .json({ error: "Erreur lors de la création de l'utilisateur" });
    });
});

// LOGIN API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Recherche de l'utilisateur dans la base de données par son e-mail
  users
    .findOne({ email, password })
    .then((user) => {
      // Vérification si l'utilisateur existe
      if (!user) {
        return res.status(404).json({
          error: "Utilisateur non trouvé => Email or password incorrect!",
        });
      }

      // Vérification du mot de passe
      if (user.password !== password) {
        return res.status(401).json({ error: "Mot de passe incorrect" });
      }

      // L'utilisateur est authentifié avec succès

      // Génération des jetons d'accès et de rafraîchissement
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      // Ajout du jeton de rafraîchissement à la liste `refreshTokens`
      refreshTokens.push(refreshToken);

      // Renvoi de la réponse avec les informations de l'utilisateur et les jetons
      res.json({
        username: user.username,
        isAdmin: user.isAdmin,
        accessToken,
        refreshToken,
      });
    })
    .catch((erreur) => {
      res.status(500).json({ error: "Erreur lors de l'authentification" });
    });
});

// geting usersDB
app.get("/usersData", async (req, res) => {
  try {
    const user = await users.find({});
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des utilisateurs" });
  }
});

// geting BooksDB
app.get("/BooksData", async (req, res) => {
  try {
    const Book = await Books.find({});
    res.status(200).json(Book);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des Books" });
  }
});

// Upload Users to UserDB
app.post("/users-upload", (req, res) => {
  const usersData = require('./Users.json'); // Charger les données à partir du fichier JSON

  // Convertir les valeurs de la variable isAdmin en booléens
  const convertedData = usersData.map(user => {
    if (user.isAdmin === "True") {
      user.isAdmin = true;
    } else if (user.isAdmin === "False") {
      user.isAdmin = false;
    }
    return user;
  });
  
  users.insertMany(usersData)
    .then(() => {
      res.status(201).json({ message: "Utilisateurs ajoutés avec succès" });
    })
    .catch((erreur) => {
      res.status(500).json({ error: "Erreur lors de l'ajout des utilisateurs" });
    });
});

// Upload Books to BooksDB
app.post("/Books-upload", (req, res) => {
  const BooksData = require('./Books.json'); // Charger les données à partir du fichier JSON

  
  Books.insertMany(BooksData)
    .then(() => {
      res.status(201).json({ message: "Books ajoutés avec succès" });
    })
    .catch((erreur) => {
      res.status(500).json({ error: "Erreur lors de l'ajout des Books" });
    });
});

// Edit Users info
app.put("/api/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const user = await users.findOneAndUpdate({ _id: userId }, updatedUser, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    return res.json(user);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
    return res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
  }
});

// Delete User from DB
app.delete("/api/users/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedUser = await users.findByIdAndDelete(userId);

    if (deletedUser) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    res.sendStatus(500);
  }
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// fonctions
const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretKey", {
    expiresIn: "60s",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
};


app.listen(5000, () => {
  console.log("Server started on port 5000");
});