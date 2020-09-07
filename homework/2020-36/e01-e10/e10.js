function doIt () {
  let str = ''
  for (let i = 0; i < arguments.length; i++) {
    str = str + arguments[i]
  }
  return console.log(str)
}

doIt("a");  // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc
