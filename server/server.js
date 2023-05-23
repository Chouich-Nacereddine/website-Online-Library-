const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const xlsx = require("xlsx");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let refreshTokens = [];
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://Nacer:gesE74py7IvXxCs6@cluster0.fnv49eh.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connecté à MongoDB");
  })
  .catch((erreur) => {
    console.error("Erreur de connexion à MongoDB:", erreur);
  });

// data general forme
const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});
const users = mongoose.model("user", userSchema);

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

app.post("/uploadUsers", (req, res) => {
  const file = req.files.file;

  // Lire le fichier Excel
  const workbook = xlsx.readFile(file.tempFilePath);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = xlsx.utils.sheet_to_json(worksheet);

  // Parcourir les données et ajouter les utilisateurs à la base de données
  jsonData.forEach((user) => {
    const newUser = new users({
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      isAdmin: false,
    });

    newUser
      .save()
      .then(() => {
        console.log(`Utilisateur ${user.id} ajouté à la base de données`);
      })
      .catch((erreur) => {
        console.error(
          `Erreur lors de l'ajout de l'utilisateur ${user.id}:`,
          erreur
        );
      });
  });

  res
    .status(200)
    .json({ message: "Les utilisateurs ont été ajoutés avec succès" });
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

app.delete("/api/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
    const updatedWorkbook = XLSX.utils.book_new();
    const updatedSheet = XLSX.utils.json_to_sheet(users);
    XLSX.utils.book_append_sheet(
      updatedWorkbook,
      updatedSheet,
      sheet_name_list[0]
    );
    XLSX.writeFile(updatedWorkbook, "users.xlsx");
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
