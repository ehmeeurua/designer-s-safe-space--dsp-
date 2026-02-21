// --- 1. LOGIN & SIGNUP REDIRECT ---
function handleLogin(event) {
    event.preventDefault();
    
    // Looks for the name input field in your login/signup form
    const nameInput = document.querySelector('input[type="text"]') || document.getElementById('login-name');
    const userName = nameInput ? nameInput.value : "Designer";
    
    // Save name to browser memory
    localStorage.setItem('dsp_user_name', userName);
    
    // Redirect to dashboard
    window.location.href = "dashboard.html"; 
}

// --- 2. DASHBOARD INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = document.getElementById('user-welcome-name');
    const avatarInitials = document.getElementById('user-avatar-initials');
    const storedName = localStorage.getItem('dsp_user_name');

    // Update Dashboard with User's Name
    if (welcomeText && storedName) {
        welcomeText.innerText = `Hi, ${storedName}`;
        if (avatarInitials) {
            avatarInitials.innerText = storedName.charAt(0).toUpperCase();
        }
    }

    // Mobile Hamburger Menu Logic
    const dashBtn = document.getElementById('dash-mobile-btn');
    const sidebar = document.getElementById('sidebar');
    if (dashBtn && sidebar) {
        dashBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('active');
        });
    }
});
