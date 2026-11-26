(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var navList = document.getElementById('primary-nav');

  if (toggle && navList) {
    var isOpen = function () {
      return toggle.getAttribute('aria-expanded') === 'true';
    };

    var setOpen = function (open, moveFocus) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navList.classList.toggle('is-open', open);
      if (!open && moveFocus) {
        toggle.focus();
      }
    };

    toggle.addEventListener('click', function () {
      setOpen(!isOpen(), false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        setOpen(false, true);
      }
    });

    navList.addEventListener('click', function (event) {
      var link = event.target.closest ? event.target.closest('a') : null;
      if (link) {
        setOpen(false, false);
      }
    });

    var desktop = window.matchMedia('(min-width: 641px)');
    var onBreakpointChange = function (event) {
      if (event.matches) {
        setOpen(false, false);
      }
    };

    if (typeof desktop.addEventListener === 'function') {
      desktop.addEventListener('change', onBreakpointChange);
    } else if (typeof desktop.addListener === 'function') {
      desktop.addListener(onBreakpointChange);
    }
  }

  var year = document.getElementById('footer-year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var copyButton = document.querySelector('.copy-button');
  var copyStatus = document.querySelector('.copy-status');

  if (copyButton && copyStatus) {
    var email = copyButton.getAttribute('data-copy-email');
    var statusTimer = 0;

    var announce = function (message) {
      window.clearTimeout(statusTimer);
      copyStatus.textContent = message;
      statusTimer = window.setTimeout(function () {
        copyStatus.textContent = '';
      }, 4000);
    };

    var legacyCopy = function (text) {
      var field = document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.top = '-1000px';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();

      var copied = false;
      try {
        copied = document.execCommand('copy');
      } catch (error) {
        copied = false;
      }

      document.body.removeChild(field);
      return copied;
    };

    var copy = function () {
      if (!email) {
        return;
      }

      var fallback = function () {
        announce(legacyCopy(email) ? 'Email address copied.' : 'Copy failed — the email link still works.');
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(function () {
          announce('Email address copied.');
        }).catch(fallback);
      } else {
        fallback();
      }
    };

    copyButton.addEventListener('click', copy);
  }

  // Dark mode toggle
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    var storedTheme = null;
    try { storedTheme = window.localStorage.getItem('theme'); } catch (error) {}
    var isDarkEffective = function () {
      if (storedTheme === 'dark') return true;
      if (storedTheme === 'light') return false;
      return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    };
    var syncThemeToggle = function () {
      themeToggle.setAttribute('aria-pressed', isDarkEffective() ? 'true' : 'false');
    };
    syncThemeToggle();
    themeToggle.addEventListener('click', function () {
      var next = isDarkEffective() ? 'light' : 'dark';
      try { window.localStorage.setItem('theme', next); } catch (error) {}
      storedTheme = next;
      document.documentElement.setAttribute('data-theme', next);
      syncThemeToggle();
    });
  }

  // Project filter
  (function () {
    var cards = Array.prototype.slice.call(document.querySelectorAll('.card, .mini-card'));
    if (!cards.length) return;

    var statusOf = function (card) {
      var statusEl = card.querySelector('.status');
      var text = statusEl ? statusEl.textContent.trim() : '';
      if (/^Deployed MVP/i.test(text)) return 'deployed';
      if (/^Functional prototype/i.test(text)) return 'prototype';
      if (/^Research/i.test(text)) return 'research';
      return 'other';
    };
    cards.forEach(function (card) { card.dataset.statusCategory = statusOf(card); });

    var state = { status: 'all', q: '' };

    var parseHash = function () {
      var hash = (location.hash || '').replace(/^#/, '');
      var query = hash;
      var idx = query.indexOf('?');
      if (idx >= 0) query = query.slice(idx + 1);
      return new URLSearchParams(query);
    };

    var readState = function () {
      var params = parseHash();
      state.status = params.get('status') || 'all';
      state.q = params.get('q') || '';
      var chips = document.querySelectorAll('.filter-chip');
      chips.forEach(function (chip) {
        chip.setAttribute('aria-pressed', chip.getAttribute('data-filter') === state.status ? 'true' : 'false');
      });
      var search = document.getElementById('project-search');
      if (search) search.value = state.q;
    };

    var updateHash = function () {
      var params = new URLSearchParams();
      if (state.status !== 'all') params.set('status', state.status);
      if (state.q) params.set('q', state.q);
      var newHash = '#work' + (params.toString() ? '?' + params.toString() : '');
      if (location.hash !== newHash) {
        try { history.replaceState(null, '', newHash); } catch (error) { location.hash = newHash; }
      }
    };

    var applyFilters = function () {
      var q = state.q.trim().toLowerCase();
      var count = 0;
      cards.forEach(function (card) {
        var matchStatus = state.status === 'all' || card.dataset.statusCategory === state.status;
        var matchQuery = !q || card.textContent.toLowerCase().indexOf(q) !== -1;
        var show = matchStatus && matchQuery;
        card.hidden = !show;
        if (show) count++;
      });
      var countEl = document.getElementById('project-count');
      if (countEl) countEl.textContent = count + ' project' + (count === 1 ? '' : 's') + ' shown';
      var empty = document.getElementById('project-empty');
      if (empty) empty.classList.toggle('is-visible', count === 0);
    };

    var chips = document.querySelectorAll('.filter-chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        state.status = chip.getAttribute('data-filter');
        chips.forEach(function (c) {
          c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
        });
        applyFilters();
        updateHash();
      });
    });

    var search = document.getElementById('project-search');
    if (search) {
      search.addEventListener('input', function () {
        state.q = search.value;
        applyFilters();
        updateHash();
      });
    }

    window.addEventListener('hashchange', function () {
      readState();
      applyFilters();
    });

    readState();
    applyFilters();
  })();

  // Live GitHub meta
  (function () {
    var cards = document.querySelectorAll('[data-repo]');
    cards.forEach(function (card) {
      var repo = card.getAttribute('data-repo');
      if (!repo) return;
      var cacheKey = 'ghrepo:' + repo;
      var cached = null;
      try {
        var raw = window.localStorage.getItem(cacheKey);
        if (raw) {
          var parsed = JSON.parse(raw);
          if (parsed && parsed.ts && (Date.now() - parsed.ts) < 6 * 60 * 60 * 1000) {
            cached = parsed.data;
          }
        }
      } catch (error) {}

      var render = function (data) {
        if (!data || typeof data.stars !== 'number' || typeof data.language !== 'string' || typeof data.pushed_at !== 'string') return;
        var date = data.pushed_at.slice(0, 10);
        var line = document.createElement('p');
        line.className = 'live-meta';
        line.textContent = 'live from GitHub: \u2605 ' + data.stars + ' \u00b7 ' + data.language + ' \u00b7 last commit ' + date;
        card.appendChild(line);
      };

      if (cached) {
        render(cached);
        return;
      }

      fetch('https://api.github.com/repos/' + repo, { headers: { 'Accept': 'application/vnd.github+json' } })
        .then(function (res) {
          if (!res.ok) throw new Error('bad response');
          return res.json();
        })
        .then(function (data) {
          var info = {
            stars: data.stargazers_count,
            language: data.language,
            pushed_at: data.pushed_at
          };
          try {
            window.localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), data: info }));
          } catch (error) {}
          render(info);
        })
        .catch(function () {
          // show nothing extra on any failure
        });
    });
  })();
})();
