function doIt () {
  console.log(this)
}

obj = {"key": "value"}

let x = doIt.bind(obj)
x()
