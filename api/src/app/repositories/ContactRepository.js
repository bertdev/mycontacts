const { v4 } = require('uuid');

const contacts = [
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

}

module.exports = new ContactRepository();
