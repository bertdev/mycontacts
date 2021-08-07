const express = require('express');
const ContactsController = require('./app/controllers/ContactsController');

const router = express();

router.get('/contacts', ContactsController.index);
router.get('/contacts/:id', ContactsController.show);
router.post('/contacts', ContactsController.store);
router.put('/contacts/:id', ContactsController.update);
router.delete('/contacts/:id', ContactsController.delete);

module.exports = router;
