const express = require('express')
const server = express()

server.get('/api/main', (req,res) =>{
    res.write('<h1>NodeJS Handson2</h1>')
    res.write(JSON.stringify(["Assessment", "2"]))
    res.end()
})

server.listen(9000,()=>{
    console.log("Server is running")
})