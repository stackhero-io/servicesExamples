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

      process.once('SIGTERM', () => client.close());

      const frame = client.send({
        destination: `/queue/${queue}`,
        'content-type': 'text/plain'
      });
      const message = 'It\'s ' + Date();
      frame.end(message);
      console.log(`Sent message "${message}"`);

      client.disconnect(error => { if (error) throw error });
    }
  );

})();
