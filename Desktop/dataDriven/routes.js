const express = require('express');
const db = require('./db/models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // throw new Error('This is a test error!')

  res.render('index', { title: 'Home'});
});



module.exports = router;
