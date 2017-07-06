const path = require('path');
const got = require('got');
const ApiUtils = require('./utils/ApiUtils');
const fileName = path.basename(__filename, '.js').toLowerCase();
ApiUtils.options.path = "/v1/" + fileName + "/"


module.exports = {
  create: function(body) {
    let err = ApiUtils.checkParams(body)
    if (err) {return Promise.reject(err.errors)}
    ApiUtils.options.method = "POST";
    ApiUtils.options.body = body
    return got(ApiUtils.options)
  },

  read: function(id) {
    let err = ApiUtils.checkParams(body)
    if (err) {return Promise.reject(err.errors)}
    ApiUtils.options.path = ApiUtils.options.path + id;
    ApiUtils.options.method = "GET";
    return got(ApiUtils.options)
  },

  update: function(id, body) {
    let err = ApiUtils.checkParams(id, body)
    if (err) {return Promise.reject(err.errors)}
    ApiUtils.options.path = ApiUtils.options.path + id;
    ApiUtils.options.method = "PUT";
    ApiUtils.options.body = body
    return got(ApiUtils.options)
  },

  delete: function(id) {
    let err = ApiUtils.checkParams(id)
    if (err) {return Promise.reject(err.errors)}
    ApiUtils.options.path = ApiUtils.options.path + id;
    ApiUtils.options.method = "DELETE";
    return got(ApiUtils.options)
  },

  list: function() {
    ApiUtils.options.method = "GET";
    return got(ApiUtils.options);
  }
}