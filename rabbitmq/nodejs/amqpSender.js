const amqplib = require('amqplib');
const { password, server, rejectUnauthorized } = require('./configuration');

(async () => {

  const message = 'It\'s ' + Date();

  const amqpUrl = `amqps://admin:${password}@${server}:5671`;
  const queue = 'test-amqp';

  const connection = await amqplib.connect(amqpUrl, { rejectUnauthorized });
  process.once('SIGTERM', () => connection.close());

  const channel = await connection.createChannel();

  await channel.assertQueue(queue, { durable: false });
  await channel.sendToQueue(queue, Buffer.from(message), {});
  console.log(`Sent message "${message}" to queue ${queue}`);

  await channel.close();
  await connection.close();
})();
