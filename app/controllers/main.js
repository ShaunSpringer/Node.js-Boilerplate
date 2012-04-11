module.exports = function(app, dirname){	
	//route our home page
	app.get('/', function(req, res){
		res.render('index', {
	    title: 'Node.js Boiler Plate'
		});		
	});
};