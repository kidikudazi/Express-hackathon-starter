/**
|----------------------------------
| Api Route for Json Response
|----------------------------------
*/
const express = require("express");
const router = express.Router();
const authGuard = require('../middlewares/auth');

module.exports = router;