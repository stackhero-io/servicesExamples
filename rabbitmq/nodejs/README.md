# RabbitMQ

This is a demonstration of NodeJS clients with a Stackhero RabbitMQ instance.

RabbitMQ supports 3 protocols: AMQP, MQTT and STOMP.

You can enable them in your Stackhero's console.


## Configuration

First, you have to edit the configuration file `configuration.js` to set your server URL and your RabbitMQ password.


## AMQP protocol

Note: you have to enable AMQP protocol in your Stackhero's console.


Run the receiver: `node amqpReceiver.js`

Run the sender: `node amqpServer.js`


## MQTT procotol

Note: you have to enable MQTT protocol in your Stackhero's console.


Run the receiver: `node mqttReceiver.js`

Run the sender: `node mqttServer.js`


## STOMP protocol

Note: you have to enable STOMP protocol in your Stackhero's console.


Run the receiver: `node stompReceiver.js`

Run the sender: `node stompServer.js`
