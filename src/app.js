'use strict';

const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('<h1>Node.js is interesting.</h1>');
});

app.listen(3000, () => {
  console.log("The frontend server is running on localhost:3000.");
});
