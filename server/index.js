var app = require('express')();
var http = require('http').Server(app);
var socketIO = require('socket.io')(http);

socketIO.on('connection', function(socket){

  socket.on('newChatMessage', function(msg){
    socketIO.emit('chatMessage', msg);
  });
});

http.listen(8888, function() {
    console.log('listening on localhost:8888');
});