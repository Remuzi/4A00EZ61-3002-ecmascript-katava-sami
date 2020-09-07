const repeat = (str, repeat = 1) => (repeat > 0) ? str.repeat(repeat) : ''

console.log(repeat('moi')) // outputs "moi"
console.log(repeat('moi', 4)) // outputs "moimoimoimoi"
