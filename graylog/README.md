# Graylog

First, you have to create an "Input".<br />
An Input is an entry point where you'll send logs (or Graylog will fetch datas from).<br />

For this example, we'll create a raw UDP input.<br />

On Graylog interface, go to "System" then "Inputs".<br />
Select "Raw/Plaintext UDP" and click on "Launch new input".<br />
Select the current node, add "RAW UDP" as title, set port to 5555 and valid.<br />

On your computer, open a terminal and send a UDP message to your Graylog server: `echo "Hello Graylog from UDP" | nc -u -w1 -c <yourHost>.stackhero-network.com 5555`<br />

Go back to Graylog and click on "Search": you should see a new message.

Congrats, you've sent your first message to Graylog :)<br />
Now you can create some real inputs and dashboards.
