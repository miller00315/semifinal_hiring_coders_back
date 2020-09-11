const express = require('express');
const router = express.Router();

router.use('/botStore', require('./botStore'));

module.exports = router;
