// JavaScript functionality can be added here
console.log("JavaScript loaded successfully.");

document.addEventListener("DOMContentLoaded", () => {
    const signOutButton = document.getElementById("signOutButton");

    // Sign Out Functionality
    signOutButton.addEventListener("click", () => {
        // Clear user session (localStorage or sessionStorage)
        localStorage.removeItem("currentUser"); // Adjust key based on your login system
        sessionStorage.removeItem("currentUser");

        // Redirect to the login page
        window.location.href = "index.html"; // Replace with the actual path to your login page
    });

    console.log("Sign Out button initialized.");
});
document.addEventListener("DOMContentLoaded", () => {
    const signOutButton = document.getElementById("signOutButton");

    signOutButton.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        sessionStorage.removeItem("currentUser");
        window.location.href = "index.html"; // Redirect to login page
    });
});
