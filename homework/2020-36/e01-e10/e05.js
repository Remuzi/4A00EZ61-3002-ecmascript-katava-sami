const f = function (value, onSuccess, onError) {
  if (value > 0) {
    return onSuccess
  } else {
    return onError
  }
}

function success () {
  return 'is positive'
}

function error () {
  return 'is negative'
}

console.log(f(2, success(), error()))
