const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());

let refreshTokens = [];
//////////////////////////
const XLSX = require('xlsx');
const fs = require('fs');
const workbook = XLSX.readFile('./assets/test.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const users = XLSX.utils.sheet_to_json(worksheet);

/////////////////////////

/*const users = [
  {
    id: "1",
    username: "nacer",
    email: "user1@example.com",
    password: "password1",
    isAdmin: true,
  },
  {
    id: '2',
    username: 'imane',
    email: 'user2@example.com',
    password: 'password2',
    isAdmin: false,
  },
];*/




app.get('/api/users', (req, res) => {
  try {
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs." });

  }
});

// login API
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  //res.json("hey it works");
  const user = users.find(u => {
    return u.email === email && u.password === password;
  });
  if (user) {
    //Generate an access token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);
    res.json({
      username: user.username,
      isAdmin: user.isAdmin,
      accessToken,
      refreshToken,
    });
  } else {
    res.status(400).json('username or password incorrect! ')
  }
});

// Signup API
app.post('/api/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const existingUser = users.find(u => {
    return u.email === email;
  });
  if (existingUser) {
    res.status(400).json('User already exists!');
  } else {
    const newUser = {
      id: users.length + 1,
      username: `${firstName} ${lastName}`,
      email,
      password,
      isAdmin: 0
    };
    users.push(newUser);
    const newWorksheet = XLSX.utils.json_to_sheet(users);
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, sheetName);
    fs.writeFile('./assets/test.xlsx', XLSX.write(newWorkbook, { bookType: 'xlsx', type: 'buffer' }), (err) => {
      if (err) throw err;
      res.json(newUser);
    });

  }
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


const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "mySecretKey", (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid!");
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated!");
  }
};

app.delete("/api/users/:userId", verify, (req, res) => {
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    res.status(200).json("User has been deleted.");
  } else {
    res.status(403).json("You are not allowed to delete this user!");
  }
});

app.post("/api/refresh", (req, res) => {
  //take the refresh token from the user
  const refreshToken = req.body.token;

  //send error if there is no token or it's invalid
  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid!");
  }
  jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });

  //if everything is ok, create new access token, refresh token and send to user
});


app.listen(5000, () => {
  console.log('Server started on port 5000');
});