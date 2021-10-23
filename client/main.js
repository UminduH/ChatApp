const messagesElement = document.querySelector('#messages');
const messageFormElement = document.querySelector('#messageForm');
const messageInputElement = document.querySelector('#messageInput');
const usernameFormElement = document.querySelector('#usernameForm');
const usernameInputElement = document.querySelector('#usernameInput');
const roomFormElement = document.querySelector('#roomForm');
const roomInputElement = document.querySelector('#roomInput');

const SERVER_URL = 'http://localhost:3000';
const socket = io(SERVER_URL);

let username = 'You';
let room = null;

socket.on('message', data => {
    addMessage(data.sender, data.message);
});

messageFormElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = messageInputElement.value;
    addMessage(`You (${username})`, message);
    sendMessage(message);

    messageInputElement.value = '';
});

usernameFormElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = usernameInputElement.value;
    username = name;
});

roomFormElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const roomName = roomInputElement.value;
    room = roomName;

    joinRoom(room);
});

function addMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.innerText = `${sender}: ${message}`;
    messagesElement.appendChild(messageElement);
}

function sendMessage(message) {
    socket.emit('message', { sender: username, room, message });
}

function joinRoom(room) {
    socket.emit('join-room', { room });
}