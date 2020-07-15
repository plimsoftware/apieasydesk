"use strict";Object.defineProperty(exports, "__esModule", {value: true});// using SendGrid's Node.js Library - https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

 function sendMailVerification(key, to, from, subj, body) {
  sgMail.setApiKey(process.env.KEYSENDGRID);
  const msg = {
    to,
    from,
    subject: subj,
    html: body,
  };
    // ES6
  sgMail
    .send(msg)
    .then(() => {}, (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    });
} exports.default = sendMailVerification;
