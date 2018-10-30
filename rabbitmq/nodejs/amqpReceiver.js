const amqplib = require('amqplib');
const { password, server, rejectUnauthorized } = require('./configuration');

(async () => {
  const amqpUrl = `amqps://admin:${password}@${server}:5671`;
  const queue = 'test-amqp';

  const connection = await amqplib.connect(amqpUrl, { rejectUnauthorized });
  console.log(`Connected to ${server}`);
  process.once('SIGTERM', () => connection.close());

  const channel = await connection.createChannel();

  console.log('Waiting for messages... You can send one by running `node amqpSender.js in an other terminal.`');
  await channel.assertQueue(queue, { durable: false });
  channel.consume(
    queue,
    message => console.log(`Received on queue ${queue}: ${message.content.toString()}`),
    { noAck: true },
    (err, res) => console.log({ err, res })
  );

})();