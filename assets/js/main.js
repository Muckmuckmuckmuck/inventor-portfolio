/* Inventor Portfolio - shared interactions. Plain JS, no dependencies. */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* Fill in current year wherever requested */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Reveal on scroll */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Active section highlighting in the table of contents */
  var tocLinks = document.querySelectorAll(".toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) {
      var id = a.getAttribute("href");
      if (id && id.charAt(0) === "#") map[id.slice(1)] = a;
    });
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            tocLinks.forEach(function (a) { a.classList.remove("active"); });
            var active = map[entry.target.id];
            if (active) active.classList.add("active");
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    document.querySelectorAll(".doc__body section[id]").forEach(function (s) { spy.observe(s); });
  }
})();
