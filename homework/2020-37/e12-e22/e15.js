let user = {
  name: 'Jack',
  sayHello: function () {
    console.log(`Hello, ${this.name}!`)
  }
}

setTimeout(() => user.sayHello(), 1000)
user.sayHello = function () { console.log('does it work?') } // tulostaa does it work koska setTimeout on asynkroninen
// Jolloinka heti rivin 8 suoritettua ei jäädä odottelemaan sekunniksi vaan painellaan suoraan riville 1 jossa
// muuttuu tuloste
