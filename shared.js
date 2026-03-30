/* shared.js — injects nav and footer into every page */
document.addEventListener('DOMContentLoaded', function () {
  const NAV = `
  <nav>
    <a class="nav-brand" href="index.html">
      <div class="badge">W</div>
      <span>Willenhall Trinity<small>Bowls Club</small></span>
    </a>
    <button class="nav-toggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="fixtures.html">Fixtures</a></li>
      <li><a href="#" onclick="comingSoon(event)">News</a></li>
      <li><a href="#" onclick="comingSoon(event)">Gallery</a></li>
      <li><a href="#" onclick="comingSoon(event)">Contact</a></li>
      <li><a href="history.html">History</a></li>
    </ul>
  </nav>`;

  const FOOTER = `
  <footer>
    <div style="max-width:1100px;margin:0 auto;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem">
      <div>
        <div class="footer-brand">Willenhall Trinity Bowls Club</div>
        <p style="font-size:0.85rem;color:#888;margin-top:0.3rem">Proudly serving the local community since 1921.</p>
      </div>
      <div style="font-size:0.85rem;color:#888;text-align:right">
        <div>&#128205; Charles Street, Willenhall, WV13 1HG</div>
        <div style="margin-top:0.25rem">&#9993; <a href="mailto:nkempson14@gmail.com" style="color:#888">nkempson14@gmail.com</a></div>
      </div>
    </div>
    <div class="footer-copy">© ${new Date().getFullYear()} Willenhall Trinity Bowls Club. All rights reserved.</div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', NAV);
  document.body.insertAdjacentHTML('beforeend', FOOTER);

  // Active link highlight
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle) toggle.addEventListener('click', () => links.classList.toggle('open'));
});

function comingSoon(e) {
  e.preventDefault();
  alert('This page is coming soon!');
}
