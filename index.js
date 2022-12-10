// Nodemailer is a module for Node.js applications to allow email sending easily.
const nodemailer = require("nodemailer");

// SMTP is the main transport in Nodemailer for delivering messages. SMTP is also the protocol used between different email hosts, so its truly universal.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "xyz@gmail.com",
    pass: "Your Password",
  },
});

// Alternative : Create reusable transporter object using the default SMTP transport.
// nodemailer.createTestAccount((err, account) => {
// let transporter = nodemailer.createTransport({
// host: 'smtp.ethereal.email',
// port: 587,
// secure: false, // true for 465, false for other ports
// auth: {
// user: account.user, // generated ethereal user
// pass: account.pass  // generated ethereal password
// }
// });
// });

// Necessary mail credentials predefined by nodemailer.
const details = {
  from: "xyz@gmail.com", // Sender Mail address.
  to: "abc@gmail.com", // Reciver Mail address.
  subject: "Intro to Node.js", // Subject of mail.
  text: "Hello World", // Main Text.
};

// Error handling for mail status.
transporter.sendMail(details, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email has been sent successfully!", info.response);
  }
});
