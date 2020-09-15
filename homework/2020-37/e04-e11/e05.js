function doIt () {
  console.log(this)
  console.log(this === global)
  global.value = 4
}

doIt()
console.log(global.value)
