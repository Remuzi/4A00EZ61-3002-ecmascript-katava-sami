function doIt (a, b) {
  console.log(this)
}

let object = { 'key': 'value' }
doIt.call(object, 5, 5)
// 1st argument is object
