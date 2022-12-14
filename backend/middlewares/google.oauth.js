var GoogleStrategy = require('passport-google-oauth20').Strategy;

require("dotenv").config();

const passport = require("passport");

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:7000/auth/google/callback",
    scope: ['profile',"email"] 
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    return cb(null, "user");
  }
));

module.exports=passport;