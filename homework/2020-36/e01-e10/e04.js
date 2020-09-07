function success () {
  return 'is positive'
}

function error () {
  return 'is negative'
}

function isPositive (value, onSuccess, onError) {
  if (value > 0) {
    return onSuccess
  } else {
    return onError
  }
}
console.log(isPositive(2, success(), error()))
