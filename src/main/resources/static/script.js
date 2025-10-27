let socket;

const messageContainer = document.querySelector('.container');
const connectionInput = document.getElementById('connection');
const connectionBtn = document.getElementById('btnConnection');
const disconnectBtn = document.getElementById('disconnectBtn');
const messageInput = document.getElementById('messageInp');
const sendBtn = document.getElementById('btnSend');

// Initially hide disconnect button
disconnectBtn.style.display = 'none';

// ✅ Detect correct protocol & host dynamically
function getWebSocketUrl() {
  const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
  // Use same host and port as the page, and endpoint `/socket`
  return `${protocol}://${window.location.host}/socket`;
}

// ✅ Connect button logic
connectionBtn.addEventListener('click', () => {
  const username = connectionInput.value.trim();
  if (username === '') return alert('Please enter your name!');

    const socketUrl = getWebSocketUrl();
  socket = new WebSocket(socketUrl);

  socket.onopen = () => {
    console.log('Connected to server');
    socket.send(username);
    connectionInput.style.display = 'none';
    connectionBtn.style.display = 'none';
    disconnectBtn.style.display = 'inline-block';
  };

  socket.onmessage = (event) => {
    append(event.data, 'left');
  };

  socket.onclose = () => {
    console.log('Disconnected from server');
    resetUI();
  };
});

// ✅ Disconnect logic
disconnectBtn.addEventListener('click', () => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
  }
  resetUI();
});

// ✅ Send message logic
sendBtn.addEventListener('click', () => {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    alert('Please connect first!');
    return;
  }

  const sendMessage = messageInput.value.trim();
  if (sendMessage === '') return;

  socket.send(sendMessage);
  append(`You: ${sendMessage}`, 'right');
  messageInput.value = '';
});

// ✅ Append message to chat
const append = (message, position) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', position);

  // Detect URLs and make clickable
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const linkedText = message.replace(
    urlRegex,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  messageElement.innerHTML = linkedText;
  messageContainer.append(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll to bottom
};

// ✅ Reset UI after disconnect
const resetUI = () => {
  connectionInput.style.display = 'inline-block';
  connectionBtn.style.display = 'inline-block';
  disconnectBtn.style.display = 'none';
};
