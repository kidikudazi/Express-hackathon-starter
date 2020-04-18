/**
|----------------------------------
| Web Api Route for Views
|----------------------------------
*/
const express = require("express");
const router = express.Router();
const UserController = require('../controller/UserController');

// return index page
router.get('/', UserController.index);

// return register page
router.get('/register', UserController.registerNewUser);

module.exports = router;