const path = require('path');
const got = require('got');
const ApiUtils = require('./utils/ApiUtils');
const fileName = path.basename(__filename, '.js').toLowerCase();
const options = ApiUtils.options();
options.path = "/v1/" + fileName + "/"


module.exports = {
  create: function(apiKey, body) {
    let err = ApiUtils.checkParams(body)
    if (err) {return Promise.reject(err.errors)}
    options.method = "POST";
    options.body = body;
    options.headers.authorization = options.headers.authorization(apiKey);
    return got(options)
  },

  read: function(apiKey, id) {
    let err = ApiUtils.checkParams(body)
    if (err) {return Promise.reject(err.errors)}
    options.path = options.path + id;
    options.method = "GET";
    options.headers.authorization = options.headers.authorization(apiKey);
    return got(options)
  },

  update: function(apiKey, id, body) {
    let err = ApiUtils.checkParams(id, body)
    if (err) {return Promise.reject(err.errors)}
    options.path = options.path + id;
    options.method = "PUT";
    options.body = body;
    options.headers.authorization = options.headers.authorization(apiKey);
    return got(options)
  },

  delete: function(apiKey, id) {
    let err = ApiUtils.checkParams(id)
    if (err) {return Promise.reject(err.errors)}
    options.path = options.path + id;
    options.method = "DELETE";
    options.headers.authorization = options.headers.authorization(apiKey);
    return got(options)
  },

  list: function(apiKey) {
    options.method = "GET";
    options.headers.authorization = options.headers.authorization(apiKey);
    console.log(options)
    return got(options);
  }
}