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
})();
