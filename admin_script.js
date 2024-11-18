console.log("JavaScript loaded successfully.");

document.addEventListener("DOMContentLoaded", () => {
    const signOutButton = document.getElementById("signOutButton");

    signOutButton.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        sessionStorage.removeItem("currentUser");
        window.location.href = "index.html";
    });

    console.log("Sign Out button initialized.");
});
