// script.js
// Handle Mentee Login
document.getElementById('menteeLoginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('menteeEmail').value;
    const password = document.getElementById('menteePassword').value;
    
    // Basic validation
    if (email && password) {
        // Here you would typically make an API call to verify credentials
        // For now, we'll just redirect
        alert('Mentee login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Please fill in all fields');
    }
});

// Handle Mentor Login
document.getElementById('mentorLoginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('mentorEmail').value;
    const password = document.getElementById('mentorPassword').value;
    
    // Basic validation
    if (email && password) {
        // Here you would typically make an API call to verify credentials
        // For now, we'll just redirect
        alert('Mentor login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Please fill in all fields');
    }
});
  