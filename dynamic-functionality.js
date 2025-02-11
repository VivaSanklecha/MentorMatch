// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      console.log('Form submitted with values:', formValues);
      // Here you would typically send this data to a server
      alert('Thank you for your message. We will get back to you soon!');
      contactForm.reset();
    });
  }
});

// Mentee Profile Editing
document.addEventListener('DOMContentLoaded', () => {
  const editProfileBtn = document.getElementById('editProfileBtn');
  const editProfileModal = document.getElementById('editProfileModal');
  const saveProfileBtn = document.getElementById('saveProfileBtn');

  if (editProfileBtn && editProfileModal && saveProfileBtn) {
    editProfileBtn.addEventListener('click', () => {
      // Populate the form with current profile data
      document.querySelector('[name="name"]').value = document.getElementById('profileName').textContent;
      document.querySelector('[name="email"]').value = document.getElementById('profileEmail').textContent;
      // Add more fields as needed
    });

    saveProfileBtn.addEventListener('click', () => {
      // Update profile with new data
      document.getElementById('profileName').textContent = document.querySelector('[name="name"]').value;
      document.getElementById('profileEmail').textContent = document.querySelector('[name="email"]').value;
      // Update more fields as needed
      
      // Close the modal
      bootstrap.Modal.getInstance(editProfileModal).hide();
    });
  }
});

// Mentor Dashboard - Excel Upload
document.addEventListener('DOMContentLoaded', () => {
  const excelFile = document.getElementById('excelFile');
  if (excelFile) {
    excelFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        // Here you would typically process the Excel file
        console.log('Excel file selected:', file.name);
        alert('Excel file uploaded successfully!');
      }
    });
  }
});

// Find Mentors - Filtering
document.addEventListener('DOMContentLoaded', () => {
  const skillCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
  const mentorCards = document.querySelectorAll('.mentor-card');

  skillCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selectedSkills = Array.from(skillCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.nextElementSibling.textContent.trim().toLowerCase());

      mentorCards.forEach(card => {
        const mentorSkills = Array.from(card.querySelectorAll('.skill-badge'))
          .map(badge => badge.textContent.trim().toLowerCase());

        const shouldShow = selectedSkills.length === 0 || 
          selectedSkills.some(skill => mentorSkills.includes(skill));

        card.style.display = shouldShow ? '' : 'none';
      });
    });
  });
});

// Login Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      console.log('Login attempt:', { email, password });
      // Here you would typically send a request to your server to authenticate the user
      alert('Login functionality would be implemented here.');
    });
  }
});

// Signup Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const menteeSignupForm = document.getElementById('menteeSignupForm');
  const mentorSignupForm = document.getElementById('mentorSignupForm');

  if (menteeSignupForm) {
    menteeSignupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(menteeSignupForm);
      const formValues = Object.fromEntries(formData.entries());
      console.log('Mentee signup:', formValues);
  
    });
  }

  if (mentorSignupForm) {
    mentorSignupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(mentorSignupForm);
      const formValues = Object.fromEntries(formData.entries());
      console.log('Mentor signup:', formValues);
    
    });
  }
});

console.log('Dynamic functionality added to MentorMatch pages');