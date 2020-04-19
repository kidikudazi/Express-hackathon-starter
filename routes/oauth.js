/**
|----------------------------------
| OAuth Api Route
|----------------------------------
*/

const express = require("express");
const router = express.Router();
const OAuthController = require('../controller/OAuthController');
const passportFacebook = require('../middlewares/OAuth/facebookAuth.js');
const passportGoogle = require('../middlewares/OAuth/googleAuth.js');

// initilalize facebook sign in
router.get('/auth/facebook',
  passportFacebook.authenticate('facebook', {authType: 'reauthenticate', scope:['email']}));

// facebook sign in callback
router.get('/auth/facebook/callback',
  passportFacebook.authenticate('facebook', { failureRedirect: '/auth/failed' }),
  OAuthController.facebookSignIn
);

// error page
router.get('/auth/failed',
  function(req, res) {
    // Successful authentication, redirect home.
    return res.status(400).json({message:'Sign In failed.'});
 });

// initilalize google sign in
router.get('/auth/google',
  passportGoogle.authenticate('google', { scope: ['profile', 'email'] }));

// google sign in callback
router.get('/auth/google/callback',
  passportGoogle.authenticate('google', { failureRedirect: '/auth/failed' }),
  OAuthController.googleSignIn
  )

router.get('/logout', (req, res)=>{
	req.logout();
	return res.send('odabo');
});



module.exports = router;