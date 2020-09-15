// when using apply, use [] instead of {}

function doIt(a, b) {
  console.log(this)
}
let object = {"key": "value"}
doIt.call(object, 5, 5)