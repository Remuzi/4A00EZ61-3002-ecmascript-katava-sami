const isPositive = (value, onSuccess, onError) => (value > 0) ? onSuccess : onError

function success () {
  return 'is positive'
}

function error () {
  return 'is negative'
}

console.log(isPositive(2, success(), error()))
