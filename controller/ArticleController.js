/**
|----------------------------------------------
| Article Controller
|----------------------------------------------
| Holds all Article operations
|----------------------------------------------
*/
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const slug = require('slug');
const callbacks = require('../function/index.js');

class ArticleController{
	
	/**
	* create article page
	*/
	static createArticlePage(req, res){
		try{

			
			// res.render('page');
		}catch(error){

			res.status(200).json(error.message);
		}
	}

	/**
	* create new article
	*/
	static async createNewArticle(req, res){
		try{
			// collect and validate data

		}catch(error){

			res.status(200).json(error.message);
		}
	}

}

module.exports = ArticleController;