const path = require('path');
const got = require('got');
const ApiUtils = require('./utils/ApiUtils');
const fileName = path.basename(__filename, '.js').toLowerCase();


module.exports = {
  create: function(apiKey, body) {
    let err = ApiUtils.checkParams(body)
    if (err) {return Promise.reject(err.errors)}
    const options = ApiUtils.options(fileName, apiKey);
    options.body = JSON.stringify(body);;
    return got(options)
  },

  read: function(apiKey, id) {
    let err = ApiUtils.checkParams(body)
    if (err) {return Promise.reject(err.errors)}
    const options = ApiUtils.options(`${fileName}/${id}`, apiKey);
    return got(options)
  },

  update: function(apiKey, id, body) {
    let err = ApiUtils.checkParams(id, body)
    if (err) {return Promise.reject(err.errors)}
    const options = ApiUtils.options(`${fileName}/${id}`, apiKey);
    options.body = JSON.stringify(body);;
    return got(options)
  },

  delete: function(apiKey, id) {
    let err = ApiUtils.checkParams(id)
    if (err) {return Promise.reject(err.errors)}
    const options = ApiUtils.options(`${fileName}/${id}`, apiKey);
    return got(options)
  },

  list: function(apiKey) {
    const options = ApiUtils.options(fileName, apiKey);
    return got(options);
  }
}