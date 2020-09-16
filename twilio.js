require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSms = (phone, message) => {
  client.messages
    .create({
       body: message,
       from:process.env.TWILIO_PHONE_NUMBER,
       to: '+1' + phone
     })
    .then(message => console.log(message.sid));
}

module.exports = sendSms;
