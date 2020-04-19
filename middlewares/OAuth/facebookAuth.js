const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

require('dotenv').config();

// passport authentication
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_OAUTH_ID,
    clientSecret: process.env.FACEBOOK_OAUTH_SECRET,
    callbackURL: process.env.FACEBOOK_OAUTH_CALLBACK_URL,
    profileFields: ['displayName', 'email', 'photos']
  },
  function(accessToken, refreshToken, profile, done) {

	    done(null, profile);
  }
));

// serialize user
passport.serializeUser(function (user, fn) {
  fn(null, user);
});

// deserialize user
passport.deserializeUser(function (user, fn) {
    fn(null, user);

})

module.exports = passport