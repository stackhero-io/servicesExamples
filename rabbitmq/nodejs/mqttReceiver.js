const mqtt = require('mqtt');
const { password, server, rejectUnauthorized } = require('./configuration');

(async () => {
  const client = mqtt.connect(`mqtts://admin:${password}@${server}:1884`, { rejectUnauthorized });
  const topic = 'test-mqtt';

  // On connect
  client.on(
    'connect',
    () => {
      process.once('SIGTERM', () => client.end());
      console.log(`Connected to ${server}`);
      client.subscribe(topic);
      console.log('Waiting for messages... You can send one by running `node mqttSender.js in an other terminal.`');
    }
  );

  // On message received
  client.on(
    'message',
    (topic, message) => console.log(`Received on topic ${topic}: ${message.toString()}`)
  );

})();
