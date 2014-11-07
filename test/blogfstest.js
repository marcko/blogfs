var should = require('should');
var assert = require('assert');
var fs = require('fs');
var Blogfs = require('../api/lib/Fsystem');
var filecreated;

//describe('what', function () {		

	//		it('se espera a que se cree un archivo', function (done) {

function save(){
	var blog = new Blogfs();

	var input={
		title:'hola',
		body : 'hola mundo'
	}

	blog.save(input,function(err,file){
				if(err) return console.log(err);
					

				});
	};

save();
				


		//});
	//});
