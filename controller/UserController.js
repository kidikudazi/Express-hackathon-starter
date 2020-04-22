/**
|----------------------------------------------
| User Controller
|----------------------------------------------
| Holds all User operations
|----------------------------------------------
*/
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const callbacks = require('../function/index.js');
// const aws = require('../config/aws.js');
// const upload = require('../middlewares/image_upload.js');
const User = require('../database/models').User;

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
			const name = req.body.name;
			const email = req.body.email;
			const username = req.body.username;
			const password = req.body.password;
			const confirm_password = req.body.confirm_password;

			req.checkBody('name', 'The Name Field is required').notEmpty();
			req.checkBody('email', 'The Email Field is required').notEmpty();
			req.checkBody('email', 'The Email is not valid').isEmail();
			req.checkBody('password', 'The Password Field is required').notEmpty();
			req.checkBody('confirm_password', 'Passwords do not match').equals(req.body.password);

			let errors = req.validationErrors();

			if(errors){
				res.render('register');
			}else{

				let newUser = {
					name:name,
					email:email,
					password:bcrypt.hashSync(password, 10)
				};

				User.create(newUser)
				.then(result=>{
					if(result){
						req.flash('success', 'You are now registered and can login');
				 		res.redirect('login');
					}
				})
				.catch(err=>{
					console.log(err);
					return;
				});
			}

		}catch(error){

			res.status(200).json(error.message);
		}
	}

	/**
	* login page
	*/
	static loginPage(req, res){
		try{
			// return login page
			// res.render('login');
		}catch(error){

			res.status(200).json(error.message);
		}
	}

	/**
	* login user
	*/
	static loginUser(req, res){
		try{
			// collect process data
			passport.authenticate('local', {
				successRedirect: '/',
				failureRedirect: '/login',
				failureFlash: true
			})(req, res, next);

		}catch(error){

			res.status(200).json(error.message);
		}
	}

	/**
	* logout user
	*/
	static logout(req, res){
		try{
			// logout user
			req.logout();
			req.flash('success', 'You are logged out');
			res.redirect('/');
		}catch(error){

			res.status(200).json(error.message);
		}
	}
}

module.exports = UserController;