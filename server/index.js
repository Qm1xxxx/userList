const http = require('http');
const fs = require('fs');
const path = require('path');
const { error } = require('console');

const PORT = 3000;

const server = http.createServer((req, res) =>{
    console.log('Request', req)
})

server.listen(PORT, 'localhost',
 (error) => {
    error 
    ? console.log('Ошибка!')
    : console.log(`Listen PORT ${PORT}`)
})