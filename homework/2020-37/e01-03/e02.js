function doIt (x) {
  if (x) {
    return () => console.log('world')
  } else {
    return () => console.log('hello')
  }
}

doIt(false)() // outputs hello
doIt(true)() // outputs world
