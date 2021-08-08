const express = require('express');
const ContactsController = require('./app/controllers/ContactsController');
const CategoriesController = require('./app/controllers/CategoriesController');

const router = express();

router.get('/contacts', ContactsController.index);
router.get('/contacts/:id', ContactsController.show);
router.post('/contacts', ContactsController.store);
router.put('/contacts/:id', ContactsController.update);
router.delete('/contacts/:id', ContactsController.delete);

router.get('/categories', CategoriesController.index);
router.get('/categories/:id', CategoriesController.show);
router.post('/categories', CategoriesController.store);
router.put('/categories/:id', CategoriesController.update);
router.delete('/categories/:id', CategoriesController.delete);

module.exports = router;
