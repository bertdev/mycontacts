const express = require('express');
const ContactController = require('./app/controllers/ContactController');

const router = express();

router.get('/contacts', ContactController.index);

module.exports = router;
