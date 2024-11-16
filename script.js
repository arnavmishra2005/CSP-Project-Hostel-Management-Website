// Fetch user data and validate login
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    try {
        // Fetch user data from JSON file
        const response = await fetch('users.json');
        const users = await response.json();

        // Check credentials
        const user = users.find(user => user.username === username && user.password === password);

        if (!user) {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            alert(`Login successful! Welcome, ${user.role}.`);

            // Redirect based on role
            if (user.role === 'administrator') {
                window.location.href = 'admin_home.html'; // Redirect to admin home page
            } else if (user.role === 'student') {
                window.location.href = 'student_home.html'; // Redirect to student home page
            }
            
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        errorMessage.textContent = 'An error occurred while logging in.';
        errorMessage.style.display = 'block';
    }
});
