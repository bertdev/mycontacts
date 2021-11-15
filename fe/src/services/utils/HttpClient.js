import delay from '../../utils/delay';
import APIError from '../../errors/APIError';

export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay();
    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType = response.headers.get('content-type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }
}
