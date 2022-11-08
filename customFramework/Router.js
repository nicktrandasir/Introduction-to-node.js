module.exports = class Router {
  constructor() {
    this.endpoints = {}
  }

  request(method = "GET", path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {}
    }

    const endpoint = this.endpoints[path];

    if (endpoint[method]) {
      throw new Error(`[${method}] по адресу ${path} уже существует`)
    }

    console.log('endpoint[method] =>', endpoint[method]);
    endpoint[method] = handler;
  }

  get(path, handler) {
    this.request("GET", path, handler)
  }

  post(path, handler) {
    console.log('POPAL!', path);
    this.request("POST", path, handler)
  }

  put(path, handler) {
    this.request("PUT", path, handler)
  }

  delete(path, handler) {
    this.request("DELETE", path, handler)
  }
}