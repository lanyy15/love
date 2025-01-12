// Función para cargar recuerdos desde localStorage
function loadMemories() {
    const memoriesList = document.getElementById('memoriesList');
    const memories = JSON.parse(localStorage.getItem('memories')) || [];

    // Limpiar la lista actual
    memoriesList.innerHTML = '';

    if (memories.length === 0) {
        memoriesList.innerHTML = '<p>Aún no hay recuerdos guardados. ¡Agrega uno!</p>';
    } else {
        memories.forEach(memory => {
            const memoryElement = document.createElement('div');
            memoryElement.classList.add('memory-item'); // Añadir clase para estilo
            memoryElement.textContent = memory;
            memoriesList.appendChild(memoryElement);
        });
    }
}

// Función para agregar un nuevo recuerdo
document.getElementById('addMemoryButton').addEventListener('click', function() {
    const memoryInput = document.getElementById('memoryInput');
    const memories = JSON.parse(localStorage.getItem('memories')) || [];

    if (memoryInput.value.trim() !== "") {
        memories.push(memoryInput.value); // Agregar el nuevo recuerdo al array
        localStorage.setItem('memories', JSON.stringify(memories)); // Guardar en localStorage

        // Limpiar el campo de entrada
        memoryInput.value = "";

        // Cargar los recuerdos nuevamente
        loadMemories();
    }
});

// Redirigir al hacer clic en el botón de volver
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Asegúrate de que el nombre del archivo sea correcto
});

// Cargar recuerdos al iniciar la página
loadMemories();

// Redirigir al hacer clic en el botón de mensajes románticos
document.getElementById('romanticMessagesButton').addEventListener('click', function() {
    window.location.href = 'romanticMessages.html'; // Asegúrate de que no haya espacios
});