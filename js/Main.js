document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.querySelector(".start-btn");
    const welcomeScreen = document.getElementById("welcome");
    const homeScreen = document.getElementById("home");
    const items = document.querySelectorAll('.menu-card, .topping-card');
    const paymentBtn = document.getElementById("paymentBtn");
    const paymentBox = document.getElementById("paymentBox");
    const uploadBtn = document.getElementById("uploadBtn");
    const receiptInput = document.getElementById("receiptInput");

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

    // Eventos principales
    if (startBtn) startBtn.addEventListener("click", goToHome);
    if (paymentBtn) paymentBtn.addEventListener("click", togglePayment);

    // Subir comprobante
    if (uploadBtn) {
        uploadBtn.addEventListener("click", () => {
            receiptInput.click();
        });
    }

    if (receiptInput) {
        receiptInput.addEventListener("change", () => {

            if (receiptInput.files.length > 0) {

                const phone = "526563190252";
                const message = encodeURIComponent("Hola 😊 Te envío mi comprobante de pago. Enseguida adjunto la imagen.");

                window.location.href = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
            }

        });
    }

});
