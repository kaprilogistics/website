// Kapri Logistics — shared site behaviour (no build step, no dependencies)
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form -> mailto (static hosting has no backend, so we compose
  // a pre-filled email to the branch inbox instead of posting to a server).
  var form = document.getElementById("quote-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString();
      var company = (data.get("company") || "").toString();
      var email = (data.get("email") || "").toString();
      var phone = (data.get("phone") || "").toString();
      var service = (data.get("service") || "").toString();
      var message = (data.get("message") || "").toString();

      var subject = "Quote Request — " + (company || name || "New Enquiry");
      var body =
        "Name: " + name + "\n" +
        "Company: " + company + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Service of interest: " + service + "\n\n" +
        "Message:\n" + message;

      var mailto =
        "mailto:info@kaprilogistics.in" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
})();
