/**
|----------------------------------------------
| OAuth Controller
|----------------------------------------------
| Holds all OAuth operations
|----------------------------------------------
*/
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const callbacks = require('../function/index.js');
const Mailer = require('../middlewares/mail.js');

require('dotenv').config();
const secret = process.env.SECRET;

class OAuthController{
	/**
	* facebook OAuthSignIn
	*/
	static async facebookSignIn(req, res){
		try{
			// collect profile data
			var profile = req.user;

			var email = profile._json.email;

			if(email == undefined || email == null || email == ''){
				return res.status(403).json({message:"Sign In Failed."});
			}

		}catch(e){
			return res.sendStatus(500);
		}
	}

	/**
	* facebook OAuthSignIn
	*/
	static async googleSignIn(req, res){
		try{
			// collect profile data
			var profile = req.user;

			var email = profile.email;

			if(email == undefined || email == null || email == ''){
				return res.status(403).json({message:"Sign In Failed."});
			}

		}catch(e){
			console.log(e);
			return res.sendStatus(500);
		}
	}
}

module.exports = OAuthController;