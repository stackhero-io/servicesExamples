const stompit = require('stompit');
const { password, server, rejectUnauthorized } = require('./configuration');

(async () => {

  const queue = 'test-stomp';
  stompit.connect(
    {
      host: server,
      port: 61614,
      ssl: true,
      rejectUnauthorized,
      connectHeaders: {
        host: '/',
        login: 'admin',
        passcode: password,
        'heart-beat': '5000,5000'
      }
    },
    (error, client) => {
      if (error) {
        throw error;
      }
      console.log(`Connected to ${server}`);
      console.log('Waiting for messages... You can send one by running `node stompSender.js in an other terminal.`');

      process.once('SIGTERM', () => client.close());

      client.subscribe(
        {
          destination: `/queue/${queue}`,
          ack: 'client-individual'
        },
        (error, message) => {
          if (error) {
            throw error;
          }

          message.readString(
            'utf-8',
            (error, body) => {
              if (error) {
                throw error;
              }

              console.log('Received message: ' + body);
              client.ack(message);
            }
          );
        }
      );
    }
  );

})();
