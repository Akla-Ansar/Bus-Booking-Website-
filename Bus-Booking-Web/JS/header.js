document.addEventListener("DOMContentLoaded", () => {
    // Toggle search bar visibility
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
  
    searchBtn.addEventListener("click", () => {
      searchInput.classList.toggle("hidden");
      if (!searchInput.classList.contains("hidden")) {
        searchInput.focus();
      }
    });
  
    // Toggle navigation menu for smaller screens
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");
  
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  