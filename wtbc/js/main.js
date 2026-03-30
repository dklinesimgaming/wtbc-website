// ─── Mobile nav toggle ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
  }

  // ─── Active nav link ─────────────────────────────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});

// ─── Simple members area password ─────────────────────────
function checkPassword() {
  const pw = document.getElementById('pw-input');
  const err = document.getElementById('pw-error');
  const gate = document.getElementById('pw-gate');
  const content = document.getElementById('members-content');

  // Change this password to whatever you like
  if (pw && pw.value === 'trinity2024') {
    if (gate) gate.style.display = 'none';
    if (content) content.style.display = 'block';
    sessionStorage.setItem('wtbc_member', '1');
  } else {
    if (err) err.style.display = 'block';
  }
}

// Auto-unlock if already authenticated this session
document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('wtbc_member') === '1') {
    const gate = document.getElementById('pw-gate');
    const content = document.getElementById('members-content');
    if (gate) gate.style.display = 'none';
    if (content) content.style.display = 'block';
  }
});

// Allow Enter key on password field
document.addEventListener('DOMContentLoaded', () => {
  const pw = document.getElementById('pw-input');
  if (pw) {
    pw.addEventListener('keydown', e => {
      if (e.key === 'Enter') checkPassword();
    });
  }
});
