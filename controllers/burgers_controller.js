const express = require('express');
const burger = require('../models/burger');


// Create an instance of a express router.
const Router = express.Router();


Router.get('/', (req, res) => {
  burger.allBurgers((allburgers) => {
    res.json(allburgers);
  });
});

Router.post('/api/addBurger', (req, res) => {
  console.log(req.body.burger)
  burger.addBurger(req.body.burger, (results) => {
    res.json({ id: results.insertId });
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
