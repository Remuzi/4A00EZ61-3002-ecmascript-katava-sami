var x //var on joko globaali tai funktio muuttuja

function test () {
  if (1 < 2) {
    x = 404
    console.log(x)
    let y = 'olen funktio muuttuja'
    console.log(y)
    const a = 'minua ei voida muokata'
    //a = 'jotain muuta' ei voida suorittaa koska a on muuttumatonmuuttuja
  }
}
test()
console.log(x) // toimii
// console.log(y) ei voida kutsua koska muuttuja on funktiomuuttuja
