const express = require("express");

const app = express();

const passport = require("./middlewares/google.oauth");

require("dotenv").config();

const PORT = process.env.PORT || 8060;

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to Home Page." });
});

app.get("/signup", (req, res) => {
  res.send({ msg: "Sign Up Page." });
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile',"email"] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' ,session:false}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.post("/login", (req, res) => {
  res.send("Login page.");
});

app.listen(PORT, () => {
  console.log(`Server is running on the localhost port : ${PORT}`);
});
