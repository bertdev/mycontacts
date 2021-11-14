/* eslint-disable class-methods-use-this */
import delay from '../utils/delay';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);

    await delay();

    const json = await response.json();
    return json;
  }
}

export default new ContactsService();
