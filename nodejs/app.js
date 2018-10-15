const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send(JSON.stringify(process.env, null, 2)));

app.listen(port);
