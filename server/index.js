var express = require('express');
var app = express();
var http = require('http').Server(app);
var socketIO = require('socket.io')(http);

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.use(express.static('../client'));

 app.get('/', function(req,res) {
    res.sendFile(__dirname + '/index.html');
 });

socketIO.on('connection', function(socket){
  console.log('a user connected');

  socket.on('newChatMessage', function(msg){
    console.log(msg);
    socketIO.emit('chatMessage', msg);
  });
});

http.listen(8888, function() {
    console.log('listening on localhost:8888');
});