#### 7Shifts Javascript

it reads your api key from an enviroment variable named `SVN_SHIFTS_API_KEY`

Require it in your project.

const svnShifts = require('7shifts');

then you can do things like

``` javascript
svnShifts.Locations.list()
  .then(function (resp) {
    console.log(resp)
  })
  .catch(function (err) {
    console.log(err)
  })
```