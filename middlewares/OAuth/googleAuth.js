const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_OAUTH_ID,
    clientSecret: process.env.GOOGLE_OAUTH_SECRET,
    callbackURL: process.env.GOOGLE_OAUTH_CALLBACK_URL,
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile._json);
  }
));


passport.serializeUser(function (user, fn) {
  fn(null, user);
});


passport.deserializeUser(function (user, fn) {
    fn(null, user);

});


module.exports = passport;