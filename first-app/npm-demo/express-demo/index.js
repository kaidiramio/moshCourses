const express = require('express')

const app = express()

app.get('/', (req, res) =>{

})

// app.get(), app.post(), app.put(), app.delete() => all these methods correspond with http methods. If you want to handle an http post request and endpoint you'd use app.post()