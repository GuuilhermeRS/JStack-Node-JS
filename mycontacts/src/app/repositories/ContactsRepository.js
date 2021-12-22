const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Guilherme',
    email: 'guilherme@mail.com',
    phone: '99999999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
