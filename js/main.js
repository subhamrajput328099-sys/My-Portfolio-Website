/* ==========================================================
   Portfolio script
   ----------------------------------------------------------
   1. Mobile menu (open, close, Escape key)
   2. Highlight the menu link of the section on screen
   3. Header shadow after scrolling
   4. Project previews (your screenshot, or a live one)
   5. Current year in the footer
   ========================================================== */

(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var nav = document.getElementById('site-nav');
  var toggle = document.querySelector('.menu-toggle');


  /* ---------- 1. Mobile menu ---------- */
  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close the menu after a link is tapped
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false);
      });
    });

    // Close with the Escape key
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });

    // Reset the menu when the screen becomes wide again
    var desktop = window.matchMedia('(min-width: 1025px)');
    desktop.addEventListener('change', function (event) {
      if (event.matches) setMenu(false);
    });
  }


  /* ---------- 2. Active menu link ---------- */
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')) : [];
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var isCurrent = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('is-active', isCurrent);
          if (isCurrent) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }


  /* ---------- 3. Header shadow ---------- */
  function updateHeader() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();


  /* ---------- 4. Project previews ----------
     Each project image first tries your own screenshot, for example
     assets/images/projects/dealsbucket.jpg.
     If that file does not exist yet, it loads a live screenshot of the
     website in data-live-url (made by the free WordPress.com mShots service).
     If that also fails, the image hides and the store name shows instead. */
  var LIVE_SHOT = 'https://s.wordpress.com/mshots/v1/';

  function useLiveScreenshot(img) {
    var liveUrl = img.getAttribute('data-live-url');
    if (!liveUrl || img.dataset.triedLive) {
      img.hidden = true; // show the store name behind it
      return;
    }
    img.dataset.triedLive = 'true';
    img.src = LIVE_SHOT + encodeURIComponent(liveUrl) + '?w=1280&h=800';
  }

  document.querySelectorAll('img[data-live-url]').forEach(function (img) {
    img.addEventListener('error', function () {
      useLiveScreenshot(img);
    });
    // The image may have failed before this script ran
    if (img.complete && img.naturalWidth === 0) {
      useLiveScreenshot(img);
    }
  });


  /* ---------- 5. Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
