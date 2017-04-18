'use strict';

const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Node.js is interesting.');
});

app.listen(3000);
