const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const { getUser, addImage, addUser, deleteImage } = require('./controllers/index.js');

app.get('/:user', (req, res) => {
  getUser(req.params.user)
    .then(results => res.send(results))
    .catch(err => res.sendStatus(404));
});

app.post('/image', (req, res) => {
  addImage(req.body.user, req.body.url)
    .then(results => res.sendStatus(201))
    .catch(err => res.sendStatus(404));
});

app.post('/logIn', (req, res) => {
  addUser(req.body.user, req.body.password)
    .then(results => res.sendStatus(201))
    .catch(err => res.sendStatus(404));
});

app.post('/delete', (req, res) => {
  deleteImage(req.body.user, req.body.url)
    .then(results => res.sendStatus(201))
    .catch(err => res.sendStatus(404));
});

app.listen(5000);

console.log('Server listening at port 5000');