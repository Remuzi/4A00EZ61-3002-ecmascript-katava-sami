function Clock () {
  this.time = new Date().toString()
  this.startInterval = function () {
    let somevariable = this
    setInterval(function () {
      somevariable.tick()
    }, 1000)

    // setInterval(() => this.tick(), 1000)

    // let kopio = this.tick.bind(this)
    // setInterval(kopio, 1000)
  }
  this.tick = function () {
    this.time = new Date().toString()
    console.log(this.render())
  }
  this.render = function () {
    return this.time
  }
}

let clock = new Clock()
console.log(clock.render())
clock.startInterval()
