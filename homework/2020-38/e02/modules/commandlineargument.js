function clarguments () {
  var myArgs = process.argv.slice(2)

  for (let i = 0; i < myArgs.length; i++) {
    try {
      if (!Number.isInteger(i)) throw new Error('not a number ' + i)
    } catch (err) {
      console.log(err)
    }
  }
  return myArgs
}

export default clarguments
