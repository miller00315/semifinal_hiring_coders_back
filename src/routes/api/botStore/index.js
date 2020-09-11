const express = require('express');
const router = express.Router();

const botStoreController = require('../../../controllers/botStore');

router.post('/userQuestion', botStoreController.userQuestion);
