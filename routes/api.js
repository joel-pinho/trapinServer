
// Dependencies
var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: './uploads/'});

// Own Dependencies
var sendGrid = require('../js/sendgrid');


// CORS
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req, res, next) {
  // Handle the get for this route
});

router.post('/', function(req, res, next) {
 // Handle the post for this route
});

// Routes
router.get('/contacts', function(req, res) {
	res.send('api is working');
});

router.post('/contacts', upload.any(), function(req, res, next) {
	//console.log(req.headers);
	console.log(req.body);
	console.log(req.files);

/*
	if(req.body.file)
	{
		for (var item in req.body.file) {
			console.log(item);
			console.log(JSON.stringify(req.body.file[item]));
			console.log(req.body.file[item].name);
		}
	}
*/


	// MAIL
	/*
	sendGrid.send(sendGrid.helloEmail(), function(err, json){
		if(err) 
		{ 
			console.log('Mail ERROR');
			console.log(err); 
		}
		else 
		{
			console.log('Mail OK');
			console.log(json);
		}
	});
	*/

	res.send('Server Post done');
});



// Return router
module.exports = router;