import delay from '../../utils/delay';

export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    await delay();

    const json = await response.json();
    return json;
  }
}
