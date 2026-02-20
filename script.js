I'm/* ============================================
   DESIGNER'S SAFE SPACE — INTERACTIONS
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── MOBILE MENU (Landing Page) ──
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
      });
    });
  }
// 🚫 Disable any code hiding landing sections
window.addEventListener("DOMContentLoaded", () => {
  ["features", "testimonials", "team"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = "block";
      el.style.opacity = "1";
      el.style.visibility = "visible";
      el.style.transform = "none";
    }
  });
});
  // ── DASHBOARD SIDEBAR (Mobile) ──
  const dashMobileBtn = document.getElementById('dash-mobile-btn');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  if (dashMobileBtn && mobileSidebar && sidebarOverlay) {
    dashMobileBtn.addEventListener('click', function () {
      mobileSidebar.classList.toggle('hidden');
      mobileSidebar.classList.toggle('active');
      sidebarOverlay.classList.toggle('hidden');
      sidebarOverlay.classList.toggle('active');
    });

    sidebarOverlay.addEventListener('click', function () {
      mobileSidebar.classList.add('hidden');
      mobileSidebar.classList.remove('active');
      sidebarOverlay.classList.add('hidden');
      sidebarOverlay.classList.remove('active');
    });
  }

  // ── AVATAR FALLBACK SYSTEM ──
  // Handles image loading failures by showing initials
  document.querySelectorAll('.avatar img').forEach(function (img) {
    img.addEventListener('error', function () {
      var parent = this.parentElement;
      var initials = parent.getAttribute('data-initials') || '?';
      this.remove();
      parent.textContent = initials;
    });
  });

  // ── AVATAR UPLOAD PREVIEWS ──

  // Designer registration avatar upload
  setupAvatarUpload('avatar-upload', 'avatar-preview');

  // Client registration logo upload
  setupAvatarUpload('company-logo-upload', 'company-logo-preview');

  // Mentor application avatar upload
  setupAvatarUpload('mentor-avatar-upload', 'mentor-avatar-preview');

  // Settings avatar upload
  setupAvatarUpload('settings-avatar-upload', 'settings-avatar');

  function setupAvatarUpload(inputId, previewId) {
    var input = document.getElementById(inputId);
    var preview = document.getElementById(previewId);

    if (!input || !preview) return;

    // Click on avatar to trigger file input
    preview.addEventListener('click', function () {
      input.click();
    });

    input.addEventListener('change', function (e) {
      var file = e.target.files[0];
      if (!file) return;

      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPG, PNG, or GIF).');
        return;
      }

      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB.');
        return;
      }

      var reader = new FileReader();
      reader.onload = function (ev) {
        // Clear existing content and add image
        preview.innerHTML = '';
        preview.style.backgroundColor = 'transparent';

        var img = document.createElement('img');
        img.src = ev.target.result;
        img.alt = 'Profile avatar';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '9999px';

        // Handle image load failure
        img.addEventListener('error', function () {
          preview.innerHTML = preview.getAttribute('data-initials') || '?';
          preview.style.backgroundColor = '#16a34a';
        });

        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  }

  // ── PASSWORD TOGGLE ──
  // (Defined globally for inline onclick handlers)
  window.togglePassword = function (inputId, btn) {
    var input = document.getElementById(inputId);
    if (!input) return;

    if (input.type === 'password') {
      input.type = 'text';
      btn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>';
    } else {
      input.type = 'password';
      btn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>';
    }
  };

  // ── FORM SUBMISSIONS ──
  // Handle form submissions with visual feedback

  var forms = [
    { id: 'login-form', redirect: 'dashboard.html', message: 'Signing in...' },
    { id: 'register-designer-form', redirect: 'dashboard.html', message: 'Creating your account...' },
    { id: 'register-client-form', redirect: 'client-dashboard.html', message: 'Creating your account...' },
    { id: 'mentor-application-form', redirect: 'index.html', message: 'Submitting application...' }
  ];

  forms.forEach(function (formConfig) {
    var form = document.getElementById(formConfig.id);
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = form.querySelector('button[type="submit"]');
      if (!submitBtn) return;

      var originalText = submitBtn.textContent;
      submitBtn.textContent = formConfig.message;
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      // Simulate submission delay
      setTimeout(function () {
        window.location.href = formConfig.redirect;
      }, 1200);
    });
  });

  // ── SMOOTH SCROLL FOR ANCHOR LINKS ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ── NOTIFICATION TOGGLE SWITCHES ──
  document.querySelectorAll('.peer').forEach(function (toggle) {
    toggle.addEventListener('change', function () {
      var indicator = this.parentElement.querySelector('div:last-child');
      if (this.checked) {
        indicator.style.transform = 'translateX(20px)';
      } else {
        indicator.style.transform = 'translateX(0)';
      }
    });
  });

  // ── NAVBAR SCROLL EFFECT ──
  var navbar = document.querySelector('nav');
  if (navbar) {
    var lastScrollY = 0;

    window.addEventListener('scroll', function () {
      var currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
      } else {
        navbar.style.boxShadow = 'none';
      }

      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  // ── INTERSECTION OBSERVER FOR ANIMATIONS ──
  if ('IntersectionObserver' in window) {
    var animateElements = document.querySelectorAll('#features .bg-white, #testimonials .bg-white, #team .bg-white');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(function (el) {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

});