document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("popup-modal");
    const closeButton = document.querySelector(".close-btn");
    const closePopupButton = document.getElementById("close-popup");

    // Check if popup has already been shown in this session
    if (!sessionStorage.getItem("popupDisplayed")) {
        modal.style.display = "flex";  // Show the popup
        sessionStorage.setItem("popupDisplayed", "true"); // Store that it was shown
    }

    // Function to close the popup
    function closeModal() {
        modal.style.display = "none";  // Hide the popup
    }

    // Close popup when clicking "X" button
    closeButton.addEventListener("click", closeModal);
    closePopupButton.addEventListener("click", closeModal);

    // Close popup if user clicks outside of it
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});
