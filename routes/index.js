var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('../config/config.json')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});



function sendEmail () {
    var smtpTransport = 'smtps://' + config.gmailSmtpDetails.email + '%40gmail.com:' + config.gmailSmtpDetails.password + '@smtp.gmail.com';
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(smtpTransport);
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: config.gmailSmtpDetails.from,
        to: config.gmailSmtpDetails.to, // list of receivers
        subject: 'Hello', // Subject line
        text: 'Hello world', // plaintext body
        html: '<b>Hello world </b>' // html body
    };// setup e-mail data with unicode symbols
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}
module.exports = router;
