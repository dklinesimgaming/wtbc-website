/* shared.js — injects nav and footer into every page */
(function () {
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
      <li><a href="news.html">News</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="members.html">Members</a></li>
    </ul>
  </nav>`;

  const FOOTER = `
  <footer>
    <div class="footer-inner">
      <div>
        <div class="footer-brand">Willenhall Trinity Bowls Club</div>
        <p style="font-size:0.9rem;margin-top:0.5rem">Proudly serving the local community.<br>All are welcome — come and bowl with us!</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="fixtures.html">Fixtures &amp; Results</a></li>
          <li><a href="news.html">News</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="members.html">Members</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li style="font-size:0.9rem">📍 Charles Street,<br>Willenhall,<br>WV13 1HG</li>
          <li style="margin-top:0.5rem;font-size:0.9rem">✉️ nkempson14@gmail.com</li>
        </ul>
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
})();
