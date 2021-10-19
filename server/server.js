const socketio = require('socket.io');

const PORT = process.env.PORT || 3000;

const io = socketio(PORT, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('New connection');
});