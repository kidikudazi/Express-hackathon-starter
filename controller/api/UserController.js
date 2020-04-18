/**
|----------------------------------------------
| User Controller
|----------------------------------------------
| Holds all User operations
|----------------------------------------------
*/
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const slug = require('slug');
const callbacks = require('../function/index.js');
const aws = require('../config/aws.js');
const upload = require('../middlewares/image_upload.js');
require('dotenv').config();
const secret = process.env.SECRET;

class UserController{
	/**
	* register new user
	*/
	static async registerNewUser(req, res){

	}

}

module.exports = UserController;