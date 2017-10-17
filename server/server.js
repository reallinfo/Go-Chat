const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'..','/public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);  

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected '+socket.id);

    socket.emit('newMessage', {
        from: "Server",
        text: "Hello client! Whats up",
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log('New message recieved: ',message);
    });

    socket.on('disconnect',() => {
        console.log(`Client ${socket.id} just disconnected!!`);
    });
});



server.listen(port,() => {
    console.log('Server is up on port',port);
}); 
