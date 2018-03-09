# Graylog

You'll find some useful informations in [Graylog's official documentation](http://docs.graylog.org/).

## Your first input

An "input" is where Graylog will get your logs.

You can send logs to Graylog via TCP or UDP or Graylog can obtain your logs from an API, a Kafka queue, a RabbitMQ and a lot of other methods.


For this example, we'll create a raw UDP input.<br />

On Graylog interface, go to "System" then "Inputs".<br />
Select "Raw/Plaintext UDP" and click on "Launch new input".<br />
Configure your input like this and valid the form:
- Title: RAW UDP
- Port: 5555


On your computer, open a terminal and send a UDP message to your Graylog server:<br />
`echo "Hello Graylog from UDP" | nc -u -w1 -c <yourHost>.stackhero-network.com 5555`<br />

Go back to Graylog and click on "Search": you should see your message 🎉

Congrats, you've sent your first message to Graylog!<br />
Now you can create some real inputs and dashboards.
