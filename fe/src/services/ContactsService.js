import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.HttpClient = new HttpClient('http://localhost:3001/contacts');
  }

  async listContacts(orderBy = 'asc') {
    return this.HttpClient.get(`?orderBy=${orderBy}`);
  }
}

export default new ContactsService();
