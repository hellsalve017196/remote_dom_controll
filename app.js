var express = require('express');

// express
var app = express();

app.use(express.static('public'));

app.get('/',function(request,response) {
    response.sendFile(__dirname + '/public/' + "home.html");
});


app.get('/web',function(request,response) {
    response.sendFile(__dirname + '/public/' + "web.html");
});
//express


// creating server with express and socket

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// creating server with express and socket






//  socket events

io.sockets.on('connection',function(socket) {

    socket.on('get_data',function(data,callback) {

        io.sockets.emit('send_data',data.mobile)

        console.log(data);

        callback(true);
    })

})



//   socket events



server.listen(3000,process.argv[2]);

