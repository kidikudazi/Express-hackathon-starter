const setup = require('../setup');

// start view engine process
let viewEngine = setup.view_engine;

switch(viewEngine){
	case 'ejs':
	// process
	break;

	case 'hbs':
	// process
	break;
	
	case null:
	// process
	break;

	default:
	console.log('::::::::::::::::Express Hackathon Starter::::::::::::::::::::');
	console.log('===== The selected views templating engine is not available at the moment =====')
}


// start app module strip down 
