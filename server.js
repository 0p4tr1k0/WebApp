const express = require('express')
const paht = require('path')
const { report } = require('process')

const app = express()
const http = require('http').createServer(app)

app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 3000
http.listen(PORT, () =>{
    console.log('Server běží na portu', PORT)
})