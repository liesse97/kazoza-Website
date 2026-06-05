/* ============================================================
   Kazozabyrå AB – Interaktivitet
   ============================================================ */

/* ── Navbar – skugga vid scroll ─────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Mobilmeny ────────────────────────────────────────────────── */
const mobileMenu = document.getElementById('mobileMenu');
const hamburger  = document.querySelector('.hamburger');

function toggleMenu() {
  const isOpen = mobileMenu.style.display === 'flex';
  mobileMenu.style.display = isOpen ? 'none' : 'flex';
  hamburger.setAttribute('aria-expanded', String(!isOpen));
  hamburger.textContent = isOpen ? '☰' : '✕';
}

function closeMenu() {
  mobileMenu.style.display = 'none';
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.textContent = '☰';
}

hamburger.addEventListener('click', toggleMenu);
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

/* ── Smooth scroll för ankarlänkar ───────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      closeMenu();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

/* ── Scroll-reveal ────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.10 }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Kontaktformulär ──────────────────────────────────────────── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    const btn = contactForm.querySelector('.form-submit');

    if (!contactForm.checkValidity()) {
      msg.style.display = 'block';
      msg.style.color   = '#DC2626';
      msg.textContent   = 'Vänligen fyll i de obligatoriska fälten (namn, e-post och GDPR).';
      return;
    }

    btn.textContent = 'Skickar...';
    btn.disabled    = true;

    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(contactForm)
      });
      const data = await res.json();
      msg.style.display = 'block';
      if (data.success) {
        msg.style.color = '#16A34A';
        msg.textContent = 'Tack! Vi återkommer inom kort.';
        contactForm.reset();
        btn.textContent = 'Skickat ✓';
      } else {
        msg.style.color = '#DC2626';
        msg.textContent = 'Något gick fel. Försök igen eller ring oss direkt.';
        btn.textContent = 'Skicka meddelande';
        btn.disabled    = false;
      }
    } catch {
      msg.style.display = 'block';
      msg.style.color   = '#DC2626';
      msg.textContent   = 'Nätverksfel – kontrollera din uppkoppling och försök igen.';
      btn.textContent   = 'Skicka meddelande';
      btn.disabled      = false;
    }
  });
}

/* ── Nyhetsbrev ───────────────────────────────────────────────── */
const nlForm = document.getElementById('nlForm');
if (nlForm) {
  nlForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = nlForm.querySelector('input[type="email"]').value.trim();
    const msg   = document.getElementById('nl-msg');

    window.location.href =
      `mailto:info@kazoza.se?subject=Nyhetsbrevsprenumeration&body=${encodeURIComponent(`Ny prenumerant: ${email}`)}`;

    if (msg) {
      msg.style.display = 'block';
      msg.textContent   = 'Tack! Din e-postklient öppnades.';
    }
  });
}

