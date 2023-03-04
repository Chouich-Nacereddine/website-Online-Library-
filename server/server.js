const express = require('express');
const app = express();
const users = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});


app.listen(5000, () => {
  console.log('Server started on port 5000');
});