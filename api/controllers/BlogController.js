var Fsblog = require('../lib/Fsystem');
var fsBlog = new Fsblog();


/**
 * BlogController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res){
		return res.view('homepage',{title:'welcome'});
	},
	postBlog: function(req, res){
		fsBlog.save(req.body, function(err, name){
						if(err) return res.send(err);
						console.log(name);
						return res.redirect('/');
				});		
	},
	getBlog: function(req, res){
			fsBlog.read(req.params.id,function (err, file){
				if(err) return res.send(err);
								return res.view('mostrar',{file:file});
			});
},
	getBlogs: function(req, res){
		fsBlog.dir(function (err, filearray){
			if(err) return res.send(err);
			return res.view('mostrarid',{filearray:filearray});
		});
	}
};

