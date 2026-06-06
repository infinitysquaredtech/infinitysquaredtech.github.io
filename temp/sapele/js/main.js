/**
 * Barsana — main.js
 * Handles: smooth scroll, sticky nav, hamburger menu,
 *          scroll animations (Intersection Observer), form validation
 */

(function () {
  "use strict";

  /* ─────────────────────────────────────────
   * 1. Smooth Scroll
   * ───────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();

      // Close mobile menu if open
      closeMobileMenu();

      const headerHeight = document.getElementById("site-header").offsetHeight;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: targetTop, behavior: "smooth" });
    });
  });

  /* ─────────────────────────────────────────
   * 2. Sticky Header Blur on Scroll
   * ───────────────────────────────────────── */
  const header = document.getElementById("site-header");

  function handleHeaderScroll() {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // run on load

  /* ─────────────────────────────────────────
   * WhatsApp Float — reveal after hero
   * ───────────────────────────────────────── */
  var whatsappFloat = document.querySelector(".whatsapp-float");

  function handleWhatsAppVisibility() {
    var hero = document.getElementById("home");
    var threshold = hero ? hero.offsetHeight * 0.5 : window.innerHeight * 0.5;
    if (window.scrollY > threshold) {
      whatsappFloat.classList.add("visible");
    } else {
      whatsappFloat.classList.remove("visible");
    }
  }

  if (whatsappFloat) {
    window.addEventListener("scroll", handleWhatsAppVisibility, {
      passive: true,
    });
    handleWhatsAppVisibility();
  }

  /* ─────────────────────────────────────────
   * 3. Active Nav Link Highlight
   * ───────────────────────────────────────── */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + header.offsetHeight + 20;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });

  /* ─────────────────────────────────────────
   * 4. Hamburger / Mobile Nav
   * ───────────────────────────────────────── */
  const hamburger = document.getElementById("hamburger");
  const navLinksEl = document.getElementById("nav-links");

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  function openMobileMenu() {
    navLinksEl.classList.add("open");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    navLinksEl.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", function () {
    const isOpen = navLinksEl.classList.contains("open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  overlay.addEventListener("click", closeMobileMenu);

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinksEl.classList.contains("open")) {
      closeMobileMenu();
    }
  });

  /* ─────────────────────────────────────────
   * 5. Intersection Observer — Fade-In
   * ───────────────────────────────────────── */
  const fadeElements = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements for browsers without IntersectionObserver
    fadeElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* ─────────────────────────────────────────
   * 6. Shared Form Helpers & Submit Service
   * ───────────────────────────────────────── */

  // Validation helpers
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function isValidPhone(value) {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }

  function setError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(errorId);
    field.classList.add("invalid");
    field.setAttribute("aria-invalid", "true");
    if (errorEl) errorEl.textContent = message;
    return false;
  }

  function clearError(fieldId, errorId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(errorId);
    field.classList.remove("invalid");
    field.removeAttribute("aria-invalid");
    if (errorEl) errorEl.textContent = "";
    return true;
  }

  /**
   * validateFields — validates name/email/phone given a field-id prefix.
   * prefix '' → contact form; prefix 'b-' → brochure modal.
   */
  function validateFields(prefix) {
    var p = prefix || "";
    var isValid = true;
    var name = document.getElementById(p + "name").value.trim();
    var email = document.getElementById(p + "email").value.trim();
    var phone = document.getElementById(p + "phone").value.trim();

    if (!name) {
      setError(p + "name", p + "name-error", "Please enter your full name.");
      isValid = false;
    } else if (name.length < 2) {
      setError(
        p + "name",
        p + "name-error",
        "Name must be at least 2 characters.",
      );
      isValid = false;
    } else {
      clearError(p + "name", p + "name-error");
    }

    if (!email) {
      setError(
        p + "email",
        p + "email-error",
        "Please enter your email address.",
      );
      isValid = false;
    } else if (!isValidEmail(email)) {
      setError(
        p + "email",
        p + "email-error",
        "Please enter a valid email address.",
      );
      isValid = false;
    } else {
      clearError(p + "email", p + "email-error");
    }

    if (!phone) {
      setError(
        p + "phone",
        p + "phone-error",
        "Please enter your phone number.",
      );
      isValid = false;
    } else if (!isValidPhone(phone)) {
      setError(
        p + "phone",
        p + "phone-error",
        "Please enter a valid phone number (10+ digits).",
      );
      isValid = false;
    } else {
      clearError(p + "phone", p + "phone-error");
    }

    return isValid;
  }

  /**
   * attachLiveValidation — attaches blur listeners given a field-id prefix.
   */
  function attachLiveValidation(prefix) {
    var p = prefix || "";
    document.getElementById(p + "name").addEventListener("blur", function () {
      if (!this.value.trim()) {
        setError(p + "name", p + "name-error", "Please enter your full name.");
      } else if (this.value.trim().length < 2) {
        setError(
          p + "name",
          p + "name-error",
          "Name must be at least 2 characters.",
        );
      } else {
        clearError(p + "name", p + "name-error");
      }
    });
    document.getElementById(p + "email").addEventListener("blur", function () {
      if (!this.value.trim()) {
        setError(
          p + "email",
          p + "email-error",
          "Please enter your email address.",
        );
      } else if (!isValidEmail(this.value)) {
        setError(
          p + "email",
          p + "email-error",
          "Please enter a valid email address.",
        );
      } else {
        clearError(p + "email", p + "email-error");
      }
    });
    document.getElementById(p + "phone").addEventListener("blur", function () {
      if (!this.value.trim()) {
        setError(
          p + "phone",
          p + "phone-error",
          "Please enter your phone number.",
        );
      } else if (!isValidPhone(this.value)) {
        setError(
          p + "phone",
          p + "phone-error",
          "Please enter a valid phone number (10+ digits).",
        );
      } else {
        clearError(p + "phone", p + "phone-error");
      }
    });
  }

  /**
   * submitEnquiry — single shared service call for both forms.
   * Replace the setTimeout body with a real fetch() to your API endpoint.
   * @param {Object} data      - collected form data
   * @param {Function} onSuccess - called after successful submission
   */
  function submitEnquiry(data, onSuccess) {
    // TODO: replace with fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(data) })
    setTimeout(function () {
      console.info("[Barsana] Enquiry submitted:", data);
      onSuccess();
    }, 1200);
  }

  function renderSuccessMarkup(options) {
    var compact = options.compact ? " form-success--compact" : "";
    return [
      '<div class="form-success' + compact + '">',
      '  <div class="form-success-icon" aria-hidden="true">',
      '    <svg viewBox="0 0 24 24" focusable="false"><use href="#icon-check-circle"></use></svg>',
      "  </div>",
      '  <h3 class="form-success-title">' + options.title + "</h3>",
      '  <p class="form-success-text">' + options.message + "</p>",
      "</div>",
    ].join("");
  }

  /* ─────────────────────────────────────────
   * 7. Contact Form — "Get In Touch"
   * ───────────────────────────────────────── */
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");

  if (contactForm) {
    attachLiveValidation("");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!validateFields("")) {
        var firstError = contactForm.querySelector(".invalid");
        if (firstError) {
          firstError.focus();
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      submitBtn.classList.add("loading");
      submitBtn.disabled = true;

      var data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
      };

      submitEnquiry(data, function () {
        contactForm.innerHTML = renderSuccessMarkup({
          title: "Enquiry Sent!",
          message:
            "Thank you for your interest in Barsana.<br />Our team will get back to you within 24 hours.",
        });
      });
    });
  }

  /* ─────────────────────────────────────────
   * 8. Brochure Download Modal
   * ───────────────────────────────────────── */
  const brochureModal = document.getElementById("brochure-modal");
  const modalCloseBtn = document.getElementById("modal-close");
  const brochureForm = document.getElementById("brochure-form");
  const brochureSubmitBtn = document.getElementById("brochure-submit-btn");
  const downloadBtn = document.getElementById("download-brochure-btn");

  function openBrochureModal() {
    brochureModal.classList.add("open");
    document.body.style.overflow = "hidden";
    var firstInput = brochureModal.querySelector("input");
    if (firstInput) {
      setTimeout(function () {
        firstInput.focus();
      }, 120);
    }
  }

  function closeBrochureModal() {
    brochureModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  function triggerBrochureDownload() {
    var link = document.createElement("a");
    link.href = "brochure/barsana-brochure.pdf";
    link.download = "Barsana-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", openBrochureModal);
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeBrochureModal);
  }

  if (brochureModal) {
    brochureModal.addEventListener("click", function (e) {
      if (e.target === brochureModal) {
        closeBrochureModal();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      brochureModal &&
      brochureModal.classList.contains("open")
    ) {
      closeBrochureModal();
    }
  });

  if (brochureForm) {
    attachLiveValidation("b-");

    brochureForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!validateFields("b-")) {
        var firstError = brochureForm.querySelector(".invalid");
        if (firstError) {
          firstError.focus();
        }
        return;
      }

      brochureSubmitBtn.classList.add("loading");
      brochureSubmitBtn.disabled = true;

      var data = {
        name: document.getElementById("b-name").value.trim(),
        email: document.getElementById("b-email").value.trim(),
        phone: document.getElementById("b-phone").value.trim(),
      };

      submitEnquiry(data, function () {
        brochureForm.innerHTML = renderSuccessMarkup({
          title: "Download Starting…",
          message: "Thank you! Your Barsana brochure is downloading.",
          compact: true,
        });

        triggerBrochureDownload();
        setTimeout(closeBrochureModal, 2000);
      });
    });
  }

  /* ─────────────────────────────────────────
   * 8. Hero — Staggered Fade-In on Load
   * ───────────────────────────────────────── */
  window.addEventListener("load", function () {
    const heroElements = document.querySelectorAll(".hero .fade-in");
    heroElements.forEach(function (el, i) {
      setTimeout(
        function () {
          el.classList.add("visible");
        },
        200 + i * 180,
      );
    });
  });
})();
