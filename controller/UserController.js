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
// const upload = require('../middlewares/image_upload.js');

class UserController{
	/**
	* Index page
	*/
	static index(req, res){
		try{

			res.send('Hello world!');
			// res.render('index');
		}catch(error){

			res.status(200).json(error.message);
		}
	}
	/**
	* register new user
	*/
	static async registerNewUser(req, res){
		try{
			// collect and validate data

		}catch(error){

			res.status(200).json(error.message);
		}
	}

}

module.exports = UserController;