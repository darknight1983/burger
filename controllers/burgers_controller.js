const express = require('express');
const burger = require('../models/burger');


// Create an instance of a express router.
const Router = express.Router();


Router.get('/', (req, res) => {
  res.render('index');
});

module.exports = Router;
