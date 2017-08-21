#### 7Shifts Javascript

Require it in your project.

const svnShifts = require('7shifts');

then you can do things like

``` javascript
svnShifts.Locations.list(YOUR_API_KEY)
  .then(function (resp) {
    console.log(resp)
  })
  .catch(function (err) {
    console.log(err)
  })
```