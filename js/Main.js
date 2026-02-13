function hideAllScreens() {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
}

function goToHome() {
    hideAllScreens();
    document.getElementById("home").classList.add("active");
}

function goToInfo() {
    hideAllScreens();
    document.getElementById("info").classList.add("active");
}

function goToGallery() {
    hideAllScreens();
    document.getElementById("gallery").classList.add("active");
}

function showMenu() {
    // Se mantiene en Home (Menú es parte del home)
}
function openGallery() {
    document.getElementById('gallery-modal').style.display = 'flex';
}

function closeGallery() {
    document.getElementById('gallery-modal').style.display = 'none';
}


// =============================
// GOOGLE MAPS
// =============================
function initMap() {
    const location = { lat: 31.64294, lng: -106.37681 }; // Coordenadas decimales

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Las Donas de Zulema",
    });

    // Abrir Google Maps al hacer clic en el marcador
    marker.addListener("click", () => {
        window.open("https://www.google.com/maps?q=31.64294,-106.37681", "_blank");
    });
}

