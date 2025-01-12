// Mensajes románticos
const romanticMessages = [
    "Eres la razón por la que sonrío cada día. 😊",
    "Tu risa es mi melodía favorita. 🎶",
    "Cada momento contigo es un tesoro. 💎",
    "Eres mi sol en los días nublados. ☀️",
    "Te amo más de lo que las palabras pueden expresar. ❤️",
    "Contigo, cada día es un nuevo comienzo. 🌅",
    "Eres el sueño que nunca quiero despertar. 🌙",
    "Tu amor es la luz que ilumina mi vida. 💡",
    "Eres la poesía que da vida a mis días. 📜",
    "Amar es encontrar en la felicidad de otro tu propia felicidad. 💞"
];

// Mostrar un mensaje romántico al hacer clic en el botón
document.querySelector('.message-button').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * romanticMessages.length);
    const messageDisplay = document.getElementById('messageDisplay');
    messageDisplay.textContent = romanticMessages[randomIndex];
    messageDisplay.classList.remove('hidden');
});

// Cargar la lista de mensajes en la sección de exploración
const messageList = document.getElementById('messageList');
romanticMessages.forEach((message, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Mensaje ${index + 1}: ${message}`;
    messageList.appendChild(listItem);
});

// Redirigir al hacer clic en el botón de volver
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Asegúrate de que el nombre del archivo sea correcto
});