// This is in routes/index.js
let express = require('express');

// Here we build the router
let router = express.Router();
const {God, gods} = require('../models/gods')

// We're calling get() on the router to register the root (/) and associates;
// these will be triggered for any incoming request matching this url
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { gods: gods });
});

// Finally, we return our router so we can use it in our app.js
module.exports = router;
