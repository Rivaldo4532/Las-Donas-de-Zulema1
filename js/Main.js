document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".start-btn");
    const welcomeScreen = document.getElementById("welcome");
    const homeScreen = document.getElementById("home");

    // Función para ir al home
    function goToHome() {
        welcomeScreen.classList.remove("active");
        homeScreen.classList.add("active");
    }

    // Asignamos el click
    startBtn.addEventListener("click", goToHome);

    // Animación scroll fade-in
    const items = document.querySelectorAll('.menu-card, .topping-card');
    window.addEventListener('scroll', () => {
        const trigger = window.innerHeight / 1.1;
        items.forEach(item => {
            const top = item.getBoundingClientRect().top;
            if(top < trigger) item.classList.add('visible');
        });
    });
});
