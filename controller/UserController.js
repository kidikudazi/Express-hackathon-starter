/**
|----------------------------------------------
| User Controller
|----------------------------------------------
| Holds all User operations
|----------------------------------------------
*/
const callbacks = require('../function/index.js');
const passport = require('passport');

const User = require('../database/models').User;

class UserController{
	/**
	* Index page
	*/
	static index(req, res){
		try{
			res.render('index', {
				title:"Home"
			});
		}catch(error){

			res.status(200).json(error.message);
		}
	}


	/**
	* register page
	*/
	static registerPage(req, res){
		try{
			res.render('register', {
				title:'Sign-Up'
			});
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
			const name = req.body.fullname;
			const email = req.body.email;
			const password = req.body.password;
			const confirm_password = req.body.confirm_password;

			req.checkBody('fullname', 'The Name Field is required').notEmpty();
			req.checkBody('email', 'The Email Field is required').notEmpty();
			req.checkBody('email', 'The Email is not valid').isEmail();
			req.checkBody('password', 'The Password Field is required').notEmpty();
			req.checkBody('confirm_password', 'Passwords do not match').equals(req.body.password);

			let errors = req.validationErrors();
			if(errors){
				res.render('register', {
					title:'Sign-Up',
					errors:errors
				});
			}else{

				// validate email
				var validateEmail = await callbacks.validateEmail(User, email);

				if(validateEmail.length > 0){
					return res.render('register', {
						title: 'Sign-Up',
						flashErrors: 'Email already exist'
					});
				}
				let newUser = {
					fullname:name,
					email:email,
					password:bcrypt.hashSync(password, 10)
				};

				User.create(newUser)
				.then(result=>{
					if(result){
						req.flash('success', 'You are now registered and can login');
						res.locals.success = req.flash('success');
				 		res.redirect('/login');
					}
				})
				.catch(err=>{
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
			res.render('login', {
				title:'Sign-In'
			});
		}catch(error){

			res.status(200).json(error.message);
		}
	}

	/**
	* login user
	*/
	static loginUser(req, res, next){
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
			req.flash('success', 'You have logged out successfully');
			res.redirect('/');
		}catch(error){

			res.status(200).json(error.message);
		}
	}
}

module.exports = UserController;