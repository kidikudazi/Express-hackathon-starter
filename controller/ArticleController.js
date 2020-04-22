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
const Article = require('../database/models').Article;

class ArticleController{
	
	/**
	* create article page
	*/
	static createArticlePage(req, res){
		try{
			// res.render('page');
			res.render('add_article', {
				title: 'Add Article'
			});
		}catch(error){

			res.status(200).json(error.message);
		}
	}

	/**
	* create new article
	*/
	static async createNewArticle(req, res){
		try{
			// set validation
			req.checkBody('title', 'Title is required').notEmpty();
			req.checkBody('body', 'Body is required').notEmpty();


			// get errors
			let errors = req.validationErrors();

			if (errors) {
				res.render('add_article', {
					title : 'Add Article', 
					errors : errors
				});
			}else{

				let article = {
					title:req.body.title,
					author_id:req.user.id,
					body:req.body.body
				}

				Article.create(article)
				.then(result=>{
					if(result){
						
						req.flash('success', 'Article Added');
						res.redirect('/');
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

}

module.exports = ArticleController;