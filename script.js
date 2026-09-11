 // ==========================================
// CHANU STUDY - MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ---------- MOBILE MENU ----------
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }


    // ---------- SEARCH ----------
    const searchInput = document.querySelector("#searchInput");
    const searchBtn = document.querySelector("#searchBtn");

    function performSearch() {
        if (!searchInput) return;

        const searchText = searchInput.value.trim();

        if (searchText === "") {
            alert("Please enter something to search.");
            return;
        }

        alert("Searching for: " + searchText);
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                performSearch();
            }
        });
    }


    // ---------- BUTTON CLICK ----------
    const buttons = document.querySelectorAll(".action-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const action = button.dataset.action;

            if (action) {
                console.log("Selected:", action);
            }
        });
    });


    // ---------- CLOSE MOBILE MENU ----------
    document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
            if (navMenu) {
                navMenu.classList.remove("active");
            }
        });
    });


    // ---------- SCROLL TO TOP ----------
    const topBtn = document.querySelector("#topBtn");

    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // ---------- CURRENT YEAR ----------
    const yearElement = document.querySelector("#currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    console.log("Chanu Study website loaded successfully 🚀");

});