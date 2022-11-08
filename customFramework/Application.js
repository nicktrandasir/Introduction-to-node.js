const http = require("http");
const EventEmitter = require("events");

// endpoint = {
//   "/users": {
//     "GET": handler
//   }
// }

const cors = (res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', "POST, PUT, DELETE, OPTIONS");
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

module.exports = class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
    this.middleware = [];
  }

  use(middleware) {
    this.middleware.push(middleware)
  }

  listen(port, callback) {
    this.server.listen(port, callback)
  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach(path => {
      const endpoint = router.endpoints[path];
      Object.keys(endpoint).forEach((method) => {

        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          const handler = endpoint[method];
          handler(req, res)
        })
      })
    })
  }

  _createServer() {
    return http.createServer((req, res) => {
      cors(res);
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      })
      req.on("end", () => {
        if (body) {
          req.body = JSON.parse(body);
        }
        this.middleware.forEach(middleware => middleware(req, res))
        const emitted = this.emitter.emit(this._getRouteMask(req.pathname, req.method), req, res)
        if (!emitted) {
          res.end()
        }
      })

    })
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`
  }
}