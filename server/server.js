// require('dotenv').config();
const bodyParser = require('body-parser');
const metadata = require('../package.json');
const compression = require('compression');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 7000;
// const secret = process.env.SESSION_SECRET;


// const redisClient = redis.createClient();
const app = express();

app.use(bodyParser.json({limit: '40mb'}));
app.use(compression()); // gzip compress all responses

const routes = ['/', '/aboutus', '/ourteam', '/blog', '/podcast', '/donate', '/contactus'];

for (const route of routes) {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/index.html'));
  });
}

app.use(express.static(path.join(__dirname, '../client')));

app.get('/aboutus', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/ourteam', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/blog', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/podcast', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/donate', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.get('/contactus', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});




// wildcard route
app.get('*', function(req, res) {
  res.status(404).send('Error! Please return to happi.com');
});

app.listen(port, () => {
  console.log(`🌎  Listening on port ${port} for app ${metadata.name} 🌏`);
});