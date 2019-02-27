// require models.
let db = require("../models");
// let express = require("express");
// let app = express.Router();

console.log(`in api-routes`);
// Create routes and set up logic within those routes where required.

// "/"  set up home page with header and all burgers that are devoured and not devoured
module.exports = function (app) {

  app.get("/", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function (dbBurger) {
      console.log(`findall ${dbBurger}`);

      let hbsObject = {
        burgers: req.body.dbBurger
      };
      console.log(`findall ${hbsObject.burgers}`);
      res.render("index", hbsObject);
    });
  });

  //if submit button is clicked then want to add a new burger to the database
  //new burgers have not been devoured, so set devoured to false
  //display new burgers  // POST route for saving a new todo
  app.post("/api/burgers", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    console.log(`in app post before creating burger ${req.body.burger_name}`);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function (result) {
      // We have access to the new burger as an argument inside of the callback function
      console.log(`posted burger ${result.id}, ${result.burger_name}`);
      res.json(result);
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });



  //if devoured button is clicked, the burger is being devoured
  //get id of devoured burger and set devoured to true and update burger in database

  app.put("/api/burgers/:id", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbBurger) {
        res.json(dbBurger);
      })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

};

