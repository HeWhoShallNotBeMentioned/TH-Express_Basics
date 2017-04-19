'use strict';

const express = require('express');
const posts = require('./mock/posts.json');

let app = express();

app.get('/', (req, res) => {
  res.send('<h1>Node.js is interesting.</h1>');
});

app.get('/blog/:title', (req, res) => {
  let title = req.params.title;
  let post = posts[title];
  res.send(post);
});

app.listen(3000, () => {
  console.log("The frontend server is running on localhost:3000.");
});
