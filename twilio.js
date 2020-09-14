
// require('dotenv').config();

const accountSid = ;
const authToken = '';
const client = require('twilio')(accountSid, authToken);

const sendSms = (phone, message) => {
  client.messages
    .create({
       body: message,
       from: '+',
       to: '+1'+phone
     })
    .then(message => console.log(message.sid));
}

module.exports = sendSms;