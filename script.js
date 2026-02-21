/**
 * script.js - Designer's Safe Space
 * Handles login redirection, mobile navigation, and interactive UI elements.
 */

// 1. LOGIN REDIRECTION
function handleLogin(event) {
    // Prevent the default form submission behavior (page refresh)
    event.preventDefault();
    
    // In a real application, you would perform validation here.
    // For now, we force a redirect to the dashboard as requested.
    window.location.href = "dashboard.html"; 
}

// 2. MOBILE NAVIGATION LOGIC
document.addEventListener('DOMContentLoaded', () => {
    // Select dashboard mobile menu buttons and sidebar
    const dashMobileBtn = document.getElementById('dash-mobile-btn');
    const sidebar = document.getElementById('sidebar');

    if (dashMobileBtn && sidebar) {
        dashMobileBtn.addEventListener('click', () => {
            // Toggle sidebar visibility on mobile
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('fixed');
            sidebar.classList.toggle('inset-0');
            sidebar.classList.toggle('z-40');
            sidebar.classList.toggle('bg-white');
        });
    }

    // 3. MENTOR AVATAR UPLOAD PREVIEW
    const avatarUpload = document.getElementById('mentor-avatar-upload');
    const avatarPreview = document.getElementById('mentor-avatar-preview');

    if (avatarUpload && avatarPreview) {
        avatarPreview.addEventListener('click', () => avatarUpload.click());

        avatarUpload.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Update the preview area with the selected image
                    avatarPreview.innerHTML = `<img src="${e.target.result}" class="w-full h-full rounded-full object-cover">`;
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    // 4. FORM SUBMISSION (Mentor Application)
    const mentorForm = document.getElementById('mentor-application-form');
    if (mentorForm) {
        mentorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Application submitted successfully!');
            window.location.href = "dashboard.html";
        });
    }
});
