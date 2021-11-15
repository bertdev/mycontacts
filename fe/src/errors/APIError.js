export default class APIError extends Error {
  constructor(response, body) {
    super();

    this.name = 'APIError';
    this.body = body;
    this.response = response;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
