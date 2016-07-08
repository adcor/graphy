//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Chart = require('../models/charts');
var User = require('../models/users');

//chart
Chart.methods(['get', 'put', 'post', 'delete']);
Chart.register(router, '/charts')

//User
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users')

module.exports = router;
