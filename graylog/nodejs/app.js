const graylog2 = require('graylog2');
const crypto = require('crypto');

const logger = new graylog2.graylog({
  servers: [{ 'host': '<yourEndpoint>.stackhero-network.com', port: 12201 }]
});


// Send a simple message to Graylog
logger.log('Simple message example');


// Attach datas to a message
logger.log(
  'Password recovery email', // Message
  // A json with what you want in it
  {
    subject: 'Password recovery',
    language: 'en_US',
    domain: 'gmail.com'
  }
);



// Advanced example
const ip = '1.2.3.4';
const ipHash = crypto.createHash('md5').update(ip).digest('hex');

const userId = '1234';
const userIdHash = crypto.createHash('md5').update(userId).digest('hex');

logger.log(
  'API request', // Message
  // A json with what you want in it
  {
    route: '/v1/messages/1234/',
    method: 'POST',

    reponseTime: 12, // ms
    reponseCode: 200,

    ipHash,
    userIdHash
  }
);



// Log your NodeJS uncaught errors
process.on('uncaughtException', function(err) {
  logger.log(err, {
    type: 'uncaughtException'
  });
});