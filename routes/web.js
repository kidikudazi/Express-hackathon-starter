/**
|----------------------------------
| Web Api Route for Views
|----------------------------------
*/
const express = require("express");
const router = express.Router();
const UserController = require('../controller/UserController');
const isAuth = require('../middlewares/passportAuth');

// return index page
router.get('/', UserController.index);

// return register page
router.get('/register', UserController.registerNewUser);

// return login page
router.get('/login', UserController.loginPage);

// login user
router.post('/login', UserController.loginUser);

// logout admin
router.get('/user/logout', isAuth, UserController.logout);

module.exports = router;