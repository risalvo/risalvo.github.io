function openImageModal(imgElement) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    var captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

function closeImageModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Close the modal when clicking anywhere outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Asegúrate de que el menú se cierra si se hace clic fuera del mismo
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});
