const http = require('http');
const express = require('express');

const app = express();

app.use(function(req, res, next) {
    console.log('In the middleware');
    next();
});
app.use(function(req, res, next) {
    console.log('In the middleware 2');
    res.send('<h1>Hello</h1>');
});

const server = http.createServer(app);

server.listen(3000, function() {
    console.log('Server is running on port 3000 sucessfully');
});