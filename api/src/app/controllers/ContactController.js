const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  index(require, response) {
    response.send('amigo estou aqui');
  }

  show() {

  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
