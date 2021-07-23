const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Herbert',
    email: 'herbert@mail.com',
    phone: 74398748927,
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Herbert',
    email: 'herbert@mail.com',
    phone: 74398748927,
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update({
    id, name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(contacts);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => (
        contact.id !== id
      ));

      resolve();
    });
  }
}

module.exports = new ContactRepository();
