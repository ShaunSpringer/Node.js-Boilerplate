module.exports = function(app, express, stylus, nib, dirname){	
	
	/**
	 * Configuration
	 */
	app.configure(function(){
	  app.set('views', dirname + '/app/views');
	  app.set('view engine', 'jade');
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(stylus.middleware({
	    src: dirname + '/public',
	  	compile: compile
		}));
	  app.use(app.router);
	  app.use(express.static(dirname + '/public'));
	});
	
	app.configure('development', function(){
	  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	});
	
	app.configure('production', function(){
	  app.use(express.errorHandler()); 
	});
	
		
	/**
	 * Handle our compilation of nib as middleware
	 */
	function compile(str, path) {
	  return stylus(str)
	    .set('filename', path)
	    .set('compress', true)
	    .use(nib());
	}
	
}