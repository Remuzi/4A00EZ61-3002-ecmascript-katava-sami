let HttpConnection = require('./httpconnection.js')
let url = 'http://localhost:8080/locations/'

// outputs the json
HttpConnection.get(url, body => console.log(body))

// adds
let object = { lat: 60, lon: 60 }
HttpConnection.post(url, object, body => console.log(body))

// deletes
HttpConnection.delete(url + "1", body => console.log(body))