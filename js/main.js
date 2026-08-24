/* ==========================================================================
   Main behaviors: mobile nav, scroll-spy, reveal-on-scroll, footer year.
   ========================================================================== */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* Footer year */
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* Mobile nav burger */
    var burger = document.getElementById("burger");
    var navLinks = document.getElementById("navLinks");
    if (burger && navLinks) {
      burger.addEventListener("click", function () {
        var isOpen = navLinks.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", String(isOpen));
      });
      navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          navLinks.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        });
      });
    }

    /* Scroll-spy: highlight the nav link for the section in view */
    var sections = document.querySelectorAll("main section[id]");
    var navAnchors = document.querySelectorAll(".nav__link[href^='#']");
    if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
      var byId = {};
      navAnchors.forEach(function (a) {
        byId[a.getAttribute("href").slice(1)] = a;
      });
      var spy = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            var link = byId[entry.target.id];
            if (!link) return;
            if (entry.isIntersecting) {
              navAnchors.forEach(function (a) { a.classList.remove("is-active"); });
              link.classList.add("is-active");
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach(function (s) { spy.observe(s); });
    }

    /* Reveal-on-scroll */
    var revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length && "IntersectionObserver" in window) {
      var reveal = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach(function (el) { reveal.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }
  });
})();
