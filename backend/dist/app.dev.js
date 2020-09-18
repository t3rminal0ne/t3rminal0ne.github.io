"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var Post = require('./models/post');

require('dotenv/config');

app.use(bodyParser.json()); // ROUTES

app.get('/posts', function _callee(req, res, next) {
  var posts;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Post.find());

        case 3:
          posts = _context.sent;
          res.json(posts);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.json({
            message: _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
app.get('/posts', function (req, res) {
  res.send("We are on posts");
});
app.post('/posts', function (req, res) {
  var post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  console.log(post);
  post.save().then(function (data) {
    res.json(data);
  })["catch"](function (err) {
    res.json({
      message: err
    });
  });
}); // Connect to DB:

mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, function () {
  console.log('Connected to DB');
});
app.listen(3000);