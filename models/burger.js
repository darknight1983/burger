

const burgerORM = require('../config/orm');

const burger = {
  allBurgers: function(cb) {
    burgerORM.selectAll((response) => {
      cb(response);
    });
  },
  addBurger: function(burger, cb) {
    burgerORM.insertOne(burger, (response) => {
      cb(response);
    })
  },
  updateBurger: function(burger_id, cb) {
    burgerORM.updateOne(burger_id, (response) => {
      cb(response)
    })
  }
}


module.exports = burger;
