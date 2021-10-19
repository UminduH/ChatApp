const messagesElement = document.querySelector('#messages');
const messageFormElement = document.querySelector('#messageForm');
const messageInputElement = document.querySelector('#messageInput');

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