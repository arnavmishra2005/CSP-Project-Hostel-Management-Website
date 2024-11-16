document.getElementById('complaintForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const room = document.getElementById('room').value;
    const complaint = document.getElementById('complaint').value;

    // Retrieve existing complaints from local storage
    let complaints = JSON.parse(localStorage.getItem('complaints')) || [];

    // Add new complaint to the list
    complaints.push({ name, room, complaint });

    // Store updated complaints list back to local storage
    localStorage.setItem('complaints', JSON.stringify(complaints));

    // Reset the form
    document.getElementById('complaintForm').reset();

    // Display stored complaints
    displayComplaints();
});

function displayComplaints() {
    const complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    const complaintsList = document.getElementById('complaints');
    complaintsList.innerHTML = '';

    complaints.forEach((complaint, index) => {
        const li = document.createElement('li');
        li.textContent = `${complaint.name} (Room ${complaint.room}): ${complaint.complaint}`;
        complaintsList.appendChild(li);
    });
}

// Display complaints on page load
document.addEventListener('DOMContentLoaded', displayComplaints);
