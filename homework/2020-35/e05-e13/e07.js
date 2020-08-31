let x = "hello" // tässä tapauksessa "hello" sisälle ei voida laittaa "-merkkiä, mutta '-merkki voidaan
let y = 'hello' // sama kuin aikaisemmassa, mutta toisinpäin. tämä on myös ilmeisesti standardin mukainen merkintätapa
let str = 'voidaan myös syöttää muuttujia'
let z = `hello
${str}
hello` // käyttäessä `` voidaan rivittää ilman \n
console.log(z)
