// "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
// //   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     // port: 587,
//     // secure: false, // true for 465, false for other ports
//     auth: {
//       user: "nodemailerproj1@gmail.com", // generated ethereal user
//       pass: "#Node_Mailer" // generated ethereal password
//     }
//   });

//   // send mail with defined transport object
//   transporter.sendMail({
//     from: "nodemailerproj1@gmail.com", // sender address
//     to: "nodemailerproj1@gmail.com", // list of receivers
//     subject: "Heiya", // Subject line
//     text: "idk", // plain text body
//   }, function (err) {
      
//       if (err) {
//           console.log(err)
//       } else {
//         console.log("--------------");
//         console.log("--------------");
//         console.log("--------------");
//         console.log("--------------");
//       }
//   });

// //   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
// //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }
