document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.querySelector(".start-btn");
    const welcomeScreen = document.getElementById("welcome");
    const homeScreen = document.getElementById("home");
    const items = document.querySelectorAll('.menu-card, .topping-card');
    const paymentBtn = document.getElementById("paymentBtn");
    const paymentBox = document.getElementById("paymentBox");

    // Ir al menú
    function goToHome() {
        welcomeScreen.classList.remove("active");
        homeScreen.classList.add("active");
        items.forEach(item => item.classList.add('visible'));
    }

    // Mostrar / ocultar métodos de pago
    function togglePayment() {
        paymentBox.classList.toggle("show");
    }

    // Eventos
    if (startBtn) startBtn.addEventListener("click", goToHome);
    if (paymentBtn) paymentBtn.addEventListener("click", togglePayment);

});
