const messagesElement = document.querySelector('#messages');
const messageFormElement = document.querySelector('#messageForm');
const messageInputElement = document.querySelector('#messageInput');

const SERVER_URL = 'http://localhost:3000';
const socket = io(SERVER_URL);

messageFormElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = messageInputElement.value;
    addMessage('You', message);

    messageInputElement.value = '';
});

function addMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.innerText = `${sender}: ${message}`;
    messagesElement.appendChild(messageElement);
}