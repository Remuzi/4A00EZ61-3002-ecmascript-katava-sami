var readlineSync = require('readline-sync')

var user = readlineSync.question('Anna nimesi: ')
console.log(user)

var number = readlineSync.question('Anna numero: ')
console.log(user.repeat(number))
