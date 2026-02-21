// --- UNIVERSAL AUTHENTICATION & REDIRECT ---
function handleAuth(event) {
    event.preventDefault(); // Stop page from refreshing
    
    // 1. Get the name from the input field
    // Note: We use a generic selector so it works on any form (Login or Signup)
    const nameInput = document.querySelector('input[type="text"]') || document.getElementById('user-name-input');
    const userName = nameInput ? nameInput.value : "Designer";
    
    // 2. Save the name to browser memory
    localStorage.setItem('dsp_user_name', userName);
    
    // 3. REDIRECT: We use a "path-safe" redirect
    // This will work on your computer AND after you deploy it
    window.location.href = "dashboard.html"; 
}

// --- DASHBOARD LOADER ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are actually on the dashboard page
    const welcomeText = document.getElementById('user-welcome-name');
    const storedName = localStorage.getItem('dsp_user_name');

    if (welcomeText && storedName) {
        welcomeText.innerText = `Hi, ${storedName}`;
        
        // Update initials in the circle
        const avatar = document.getElementById('user-avatar-initials');
        if (avatar) {
            avatar.innerText = storedName.charAt(0).toUpperCase();
        }
    }

    // DASHBOARD MOBILE MENU (Hamburger)
    const menuBtn = document.getElementById('dash-mobile-btn');
    const sidebar = document.getElementById('sidebar');
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('active'); // Needs the CSS below
        });
    }
});
