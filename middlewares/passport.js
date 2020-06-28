const LocalStrategy = require('passport-local').Strategy;
// const con = require('../config/database.js');
const User = require('../database/models').User;
const bcrypt = require('bcryptjs');

module.exports = function(passport){
	// Local strategy
	passport.use('local',new LocalStrategy({ 
	// or whatever you want to use
    usernameField: 'email',    // define the parameter in req.body that passport can use as username and password
    passwordField: 'password'
  },function(email, password, done){
		// Match email
		User.findAll({
			where:{
				email:email
			}
		}).then((user, err)=>{
			if(err) throw err;
			if(!user)
			{
				return done(null, false, {message: 'No user found'});
			}else{
				if(user.length == 0)
				{
					console.log(err);
					return done(null, false, {message: 'No user found'});
				}
				// match password
				bcrypt.compare(password, user[0].password, function(err, isMatch){
					if (err) throw err;
					if (isMatch){

						return done(null, user);
					}else{
						return done(null, false, {message: 'Wrong Password'});
					}
				});
			}
		}).catch(e=>{
			throw e;
		});
	}));

	passport.serializeUser(function(user, done){
		done(null, user[0].id);
	});

	passport.deserializeUser(function(id, done){
		// let validateId = "SELECT * FROM admin WHERE id = "+id;
		// con.query(validateId, function(err, user){
		// 	done(err, user[0]);
		// });
		User.findAll({
			where:{
				id:id
			}
		}).then((user, err)=>{
			done(err, user[0].dataValues);
		});
	});
}