const mqtt = require('mqtt');
const { password, server, rejectUnauthorized } = require('./configuration');

const client = mqtt.connect(`mqtts://admin:${password}@${server}:1884`, { rejectUnauthorized });
const topic = 'test-mqtt';

// Publish a message when the client connects
client.on(
  'connect',
  () => {
    process.once('SIGTERM', () => client.end());
    const message = 'It\'s ' + Date();
    client.publish(topic, message);
    console.log(`Sent message "${message}" to topic ${topic}`);
    client.end();
  }
);
