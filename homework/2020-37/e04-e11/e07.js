function Person (fname, lname) {
  if (this instanceof Person) {
    this.fname = fname
    this.lname = lname
  } else {
    throw new TypeError('use new keyword')
  }
}
