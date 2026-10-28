(function () {
  'use strict';

  var root = document.documentElement;
  var languageButtons = document.querySelectorAll('.lang-btn');
  var nav = document.querySelector('.site-nav');
  var menuButton = document.querySelector('.nav-toggle');
  var navLinks = document.querySelectorAll('.nav-links a');

  function setLanguage(language, remember) {
    if (language !== 'zh' && language !== 'en') return;
    root.dataset.language = language;
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    languageButtons.forEach(function (button) {
      var active = button.dataset.language === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (remember) {
      try { localStorage.setItem('homepage-language', language); } catch (error) {}
    }
  }

  setLanguage(root.dataset.language || 'zh', false);
  languageButtons.forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(button.dataset.language, true); });
  });

  function closeMenu() {
    if (!nav || !menuButton) return;
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  if (nav && menuButton) {
    menuButton.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  function markSection(id) {
    navLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      markSection(link.hash.slice(1));
      closeMenu();
    });
  });
  markSection(window.location.hash.slice(1) || 'about-me');

  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) markSection(entry.target.id);
      });
    }, { rootMargin: '-90px 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('.academic-content section[id]').forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  var portrait = document.getElementById('author-avatar-img');
  var photoButtons = document.querySelectorAll('.avatar-dot');
  if (portrait) {
    photoButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        portrait.src = button.dataset.img;
        photoButtons.forEach(function (item) {
          var active = item === button;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
      });
    });
  }

  document.querySelectorAll('.academic-content a[href^="https://"]').forEach(function (link) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });

  var counter = document.querySelector('.busuanzi-counter');
  if (counter) {
    var showCounter = function () {
      var views = document.getElementById('busuanzi_value_site_pv');
      var visitors = document.getElementById('busuanzi_value_site_uv');
      if ((views && views.textContent.trim()) || (visitors && visitors.textContent.trim())) {
        counter.hidden = false;
        return true;
      }
      return false;
    };
    if (!showCounter() && 'MutationObserver' in window) {
      var counterObserver = new MutationObserver(function () {
        if (showCounter()) counterObserver.disconnect();
      });
      counterObserver.observe(counter, { childList: true, subtree: true, characterData: true });
    }
  }
})();
