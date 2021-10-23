const socketio = require('socket.io');

const PORT = process.env.PORT || 3000;

const io = socketio(PORT, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    socket.on('message', data => {
        socket.broadcast.to(data.room).emit('message', { sender: data.sender, message: data.message });
    });

    socket.on('join-room', data => {
        socket.join(data.room);
    });
});