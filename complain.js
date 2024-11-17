document.getElementById('complaintForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const room = document.getElementById('room').value;
    const complaint = document.getElementById('complaint').value;
    let complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    complaints.push({ name, room, complaint });
    localStorage.setItem('complaints', JSON.stringify(complaints));
    document.getElementById('complaintForm').reset();
    displayComplaints();
});

function displayComplaints() {
    const complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    const complaintsList = document.getElementById('complaints');
    complaintsList.innerHTML = '';
    complaints.forEach((complaint, index) => {
        const li = document.createElement('li');
        li.textContent = `${complaint.name} (Room ${complaint.room}): ${complaint.complaint}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
            removeComplaint(index);
        });
        li.appendChild(removeButton);
        complaintsList.appendChild(li);
    });
}

function removeComplaint(index) {
    let complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    complaints.splice(index, 1);
    localStorage.setItem('complaints', JSON.stringify(complaints));
    displayComplaints();
}

document.addEventListener('DOMContentLoaded', displayComplaints);
