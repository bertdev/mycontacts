const express = require('express');

const router = express();

router.get('/contacts', (require, response) => {
  response.send('amigo estou aqui');
});

module.exports = router;
