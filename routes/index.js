// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');
// const xoauth2 = require('xoauth2');
// const creds = require('../config/config.js');

// var transport = {
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//       xoauth2: xoauth2.createXOAuth2Generator({
//         user: creds.USER,
//         pass: creds.PASS,
//         clientId: '856575844999-475cqqboci2c9hi055tvtr510ncehokk.apps.googleusercontent.com',
//         clientSecret: 'CSj_hgdqV1T7SzBaLqm9I655',
//         refreshToken: '1//04lQHTSTmKRTYCgYIARAAGAQSNwF-L9IrP95EIH2JZRrlhD1oZ8Z8tFWkcpRWepsPSt5Q_mB0lR41AKbz1C_YOxuAJOSYndArTQQ',
//       })

//   }
// }

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

// router.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${content} `

//   var mail = {
//     from: name,
//     to: 'jordan@ricarte.net',  //Change to email address that you want to receive messages on
//     subject: 'New Contact Request from my Portfolio Website',
//     text: content
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: 'fail'
//       })
//     } else {
//       res.json({
//         msg: 'success'
//       })
//     }
//   })
// })

// =====================
// const nodemailer = require('nodemailer');
// var express = require('express');
// var router = express.Router();
// const credentials = require('../config/config.js');


// var transporter = nodemailer.createTransport({
//     service: 'gmail',
    // smtp.gmail.com
    // port: 465,
    // secure: true,
//     auth: {
//       type: 'OAuth2',
//       user: credentials.USER,
//       clientId: credentials.CLIENTID,
//       clientSecret: credentials.CLIENTSECRET,
//       refreshToken: credentials.REFRESHTOKEN,
//       accessToken: credentials.ACCESSTOKEN,
//       expires: 999999999999999999999999999
//     },

// });

// transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
//     let accessToken = userTokens[user];
//     if(!accessToken){
//         return callback(new Error('Unknown user'));
//     }else{
//         return callback(null, accessToken);
//     }
// });

// var mailOptions = {
//     from: ' Portfolio - Jordan Ricarte <jordan@ricarte.com>',
//     to: 'jordan@ricarte.net',
//     subject: 'Contact Request from Portfolio',
//     text: 'Hello World!!'
// }

// transporter.sendMail(mailOptions, function (err, res) {
//     if(err){
//         console.log(err)
//         console.log('Error on transporter');
//     } else {
//         console.log('Email Sent');
//     }
// })


// module.exports = router;


