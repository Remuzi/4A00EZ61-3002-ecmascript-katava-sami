let user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  }
}

let myfunc = user.sayHello
myfunc() //tulostaa Hello, undefined!
// koska nyt myfunck on funktio kutsu eikä object.function
