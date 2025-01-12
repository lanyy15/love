// Poesías románticas
const poems = {
    poem1: `Si te quiero es porque sos parte de mí.
    No soy yo sin ti, no soy yo sin ti.
    Eres mi amor, mi vida, mi razón de ser.
    - Mario Benedetti`,

    poem2: `Te quiero, no solo por como eres,
    sino por como soy yo cuando estoy contigo.
    - Gabriel García Márquez`,

    poem3: `En un beso, sabrás todo lo que he callado.
    - Pablo Neruda`,

    poem4: `Amor eterno, amor profundo,
    eres la luz que ilumina mi mundo.
    - Alfonsina Storni`,

    poem5: `No hay nada más hermoso que el amor,
    que se siente en el aire y se ve en los ojos.
    - Mario Benedetti`,

    poem6: `Te amo no solo por lo que eres,
    sino por lo que soy cuando estoy contigo.
    - Elizabeth Barrett Browning`,

    poem7: `Eres el sueño que nunca quiero despertar.
    - Mario Benedetti`,

    poem8: `Amor, eres la poesía que da vida a mis días.
    - Pablo Neruda`,

    poem9: `Cada día a tu lado es un regalo que atesoro.
    - Mario Benedetti`,

    poem10: `Eres la razón por la que creo en la magia.
    - Gabriela Mistral`
};

// Función para mostrar la poesía al hacer clic en un botón
document.querySelectorAll('.poetry-button').forEach(button => {
    button.addEventListener('click', function() {
        const poemKey = this.getAttribute('data-poem');
        const poemDisplay = document.getElementById('poemDisplay');
        poemDisplay.textContent = poems[poemKey];
        poemDisplay.classList.remove('hidden');
    });
});

// Redirigir al hacer clic en el botón de volver
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Aseg úrate de que el nombre del archivo sea correcto
}); 