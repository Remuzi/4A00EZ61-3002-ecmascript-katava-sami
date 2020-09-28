const fetch = require('node-fetch')

// 1. Starts to fetch the given url, once ready call ready function
fetch('https://swapi.dev/api/people/1').then(ready)

// 2. receives httpresponse, holds metadata and content
function ready (httpresponse) {
  // Just for debugging purposes, print all header information
  console.log('-'.repeat(20) + ' HEADERS ' + '-'.repeat(20))
  httpresponse.headers.forEach((value, name) => console.log(`${name} = ${value}`))

  // if response was 2xx then take the text from the
  // httpresponse and once that is parsed send it to function
  // textParsed
  if (httpresponse.ok) {
    httpresponse.json().then(jsonParsed)
  } else {
    throw new Error('could not connect')
  }
}

// 3. output the text

function jsonParsed (jsonObject) {
  console.log(jsonObject)
  console.log(typeof jsonObject)
}

fetch('https://swapi.dev/api/people/' + process.argv[2])
    .then(httpresponse => httpresponse.json())
    .then(character => console.log(character))
