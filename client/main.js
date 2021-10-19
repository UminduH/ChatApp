const messagesElement = document.querySelector('#messages');
const messageFormElement = document.querySelector('#messageForm');
const messageInputElement = document.querySelector('#messageInput');
const usernameFormElement = document.querySelector('#usernameForm');
const usernameInputElement = document.querySelector('#usernameInput');

const SERVER_URL = 'http://localhost:3000';
const socket = io(SERVER_URL);

let username = 'You';

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

function addMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.innerText = `${sender}: ${message}`;
    messagesElement.appendChild(messageElement);
}

function sendMessage(message) {
    socket.emit('message', { sender: username, message });
}