// Select elements
const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

// Show sidebar & overlay
openSidebar.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

// Hide sidebar & overlay
closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// Close sidebar when clicking outside
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});
