"use strict";

var express = require('express');

var router = express.Router();
router.get('/posts', function (req, res) {
  res.send("We are on posts");
});
module.exports = router;