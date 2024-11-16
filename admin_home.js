function redirectToHome() {
    window.location.href = 'index.html';
}


const announcements = [
    "Welcome back to IIT-Bhilai's Kanhar Hostel!",
    "Hostel WiFi will undergo maintenance on Sunday, 19th November.",
    "Submit your hostel complaints through the online portal!",
];
const announcementContainer = document.getElementById('announcementContainer');
let index = 0;

function showAnnouncement() {
    announcementContainer.textContent = announcements[index];
    announcementContainer.style.opacity = '1';

    setTimeout(() => {
        announcementContainer.style.opacity = '0';
        index = (index + 1) % announcements.length;
    }, 3000);
}

setInterval(showAnnouncement, 4000);
showAnnouncement();
