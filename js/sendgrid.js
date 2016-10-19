
function helloEmail(){
	var helper = require('sendgrid').mail;
	
	var from_email = new helper.Email('joelpinho@gmail.com');
	var to_email = new helper.Email('joelpinho@gmail.com');
	var subject = 'Hello World from the SendGrid Node.js Library!';
	var content = new helper.Content('text/plain', 'Hello, Email!');
	var mail = new helper.Mail(from_email, subject, to_email, content);	

	return mail.toJSON();
}

function send(toSend){
 	console.log(JSON.stringify(toSend, null, 2));

	//var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	var sg = require('sendgrid')('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');

	/*
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON(),
	});
	 
	sg.API(request, function(error, response) {
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	});
	*/

	var requestBody = toSend
	var emptyRequest = require('sendgrid-rest').request
	var requestPost = JSON.parse(JSON.stringify(emptyRequest))
	requestPost.method = 'POST'
	requestPost.path = '/v3/mail/send'
	requestPost.body = requestBody
	sg.API(requestPost, function (error, response) {
	console.log(response.statusCode)
	console.log(response.body)
	console.log(response.headers)
  	});
 }

 module.exports = {
 	send: send,
 	helloEmail: helloEmail
 } 
