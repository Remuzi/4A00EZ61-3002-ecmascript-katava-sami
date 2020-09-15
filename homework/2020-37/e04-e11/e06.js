function Person (fname, lname) {
  this.fname = fname
  this.lname = lname
  console.log(this instanceof Person)
}

//let tiina = new Person('Tiina', 'Mikkonen')
// constructor call without new
// this refers to global not to Person object
var obj = Person('jack', 'smith')

//console.log(tiina.fname, tiina.lname)
