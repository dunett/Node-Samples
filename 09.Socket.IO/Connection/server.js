var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

var server = http.createServer(app);
// app.listen() 으로 하지 않도록 주의!
server.listen(3000);

app.get('/favicon.ico', (req, res) => {res.send('')});

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

// HTTP 모듈
// var server = http.createServer(function (req, res) {
//    fs.createReadStream('./index.html').pipe(res);
// });

// server.listen(3000);

// Socket.IO Server
// var Server = require('socket.io');
// var io = new Server();

// short form
var io = require('socket.io')(server);
io.on('connection', function (socket) {
   console.log('클라이언트 접속');

   // 원격 호스트 접속 종료 이벤트
   socket.on('disconnect', function () {
      console.log('Disconnected');
   });
});