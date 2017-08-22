let ApiUtils = {
  options: function() {
    return {
      hostname: 'api.7shifts.com',
      path: null,
      body: null,
      method: null,
      headers: {
         authorization: function(apiKey) { return basic_auth(apiKey)}
      }
    }
  },
  
  checkParams: function() {
    switch (arguments.callee.caller.name) {
      case "create":
        if (arguments[0] instanceof Array || typeof arguments[0] === 'string' || arguments[0] === null) {
          return { errors: "create argument must be an object" }
        }
        return false
      
      case "read":
        if (arguments.length < 1) {
          return { errors: "read requires an id" }
        }
        if (typeof arguments[0] !== 'number' || typeof arguments[0] !== 'string' ) {
          return { errors: "id must be an integer or string" }
        }
        return false

      case "update":
        if (arguments.length < 2) {
          return { errors: "update require an id and body arguments" }
        }
        if (typeof arguments[0] !== 'number' || typeof arguments[0] !== 'string' ) {
          return { errors: "id must be an integer or string" }
        }
        if (arguments[1] instanceof Array || typeof arguments[1] === 'string' || arguments[1] === null) {
          return { errors: "body must be an object" }
        }
        return false
      
      case "delete":
        if (arguments.length < 1) {
          return { errors: "delete requires an id" }
        }
        if (typeof arguments[0] !== 'number' || typeof arguments[0] !== 'string' ) {
          return { errors: "id must be an integer or string" }
        }
        return false
    } 
  }
}

function basic_auth(apiKey) {
  let buffer = new Buffer(apiKey + ":");
  let bufferString = buffer.toString('base64');
  let basic = 'Basic ' + bufferString
  return basic
}

module.exports = ApiUtils