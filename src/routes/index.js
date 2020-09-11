const express = require('express');
const router = express.Router();

router.post('/question', function (req, res) {
  console.log(req.body);
  res.status(200).json({
    text: 'olá',
    user: 'assistente',
  });
});

module.exports = router;
