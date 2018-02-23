const express = require('express');
const burger = require('../models/burger');


// Create an instance of a express router.
const Router = express.Router();


Router.get('/', (req, res) => {
  burger.allBurgers((burgers) => {
    let yummyThings = {
      allBurgers: burgers
    }
    res.render('index', yummyThings);
  });
});

Router.post('/api/addBurger', (req, res) => {
  burger.addBurger(req.body.burger, (results) => {
    res.json(results);
  });
});

Router.put('/api/updateBurger/:burger_id', (req, res) => {
  let id = req.params.burger_id;
  burger.updateBurger(id, (results) => {
    if (results.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = Router;
