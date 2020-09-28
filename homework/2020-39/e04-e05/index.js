const fetch = require('node-fetch')
const url = 'http://localhost:8080/locations/'

if (process.argv[2] === 'get') {
  fetch(url)
      .then(httpresponse => httpresponse.json())
      .then(lokaatiot => console.log(lokaatiot[process.argv[3]]))
}

if (process.argv[2] === 'del') {
  let conf = { method: 'DELETE'}
  fetch(url + process.argv[3], conf)
      .then(httpresponse => console.log(httpresponse.status))
}

if (process.argv[2] === 'post') {
  let config = { method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({lat:  process.argv[3], lon:  + process.argv[4]})
  }
  fetch(url, config).then(httpresponse => httpresponse.json())
      .then(result => console.log(result))
}