
// require('dotenv').config();

const accountSid = 'AC2bcc4f0559b9a94e2bcb18fe4b9de526';
const authToken = '93c4087f8b514649229160596303e1bf';
const client = require('twilio')(accountSid, authToken);

const sendSms = (phone, message) => {
  client.messages
    .create({
       body: message,
       from: '+12059463196',
       to: '+1'+phone
     })
    .then(message => console.log(message.sid));
}

module.exports = sendSms;