const express = require('express')
const paht = require('path')

const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000
http.listen(PORT, () =>{
    console.log('Server běží na portu', PORT)
})