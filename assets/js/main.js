// ---------- Navigation ----------
if (window.location.hash) {
  $(".wrapper").removeClass("active");
  $(window.location.hash).addClass("active");
  animateSection(window.location.hash.slice(1));
}

// ---------- Preloader ----------
$(window).on("load", function () {
  $(".preloader")
    .addClass("preloaded")
    .delay(1000 * 0.8)
    .fadeOut();
});

$(function () {
  ("use strict");

  // ---------- Gsap Plugins ----------
  gsap.registerPlugin(ScrollTrigger);

  // ---------- Menu Button ----------
  $(".menu-btn").click(function (e) {
    $(this).toggleClass("open");
    $("nav").toggleClass("open");
  });

  // ---------- Custom Cursor ----------
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
  if (isTouchDevice()) {
    $(".cursor").hide();
  } else {
    $(window).on("mousemove", function (e) {
      setTimeout(() => {
        $(".cursor-pointer").css("left", e.clientX + "px");
        $(".cursor-pointer").css("top", e.clientY + "px");
      }, 0);
      setTimeout(() => {
        $(".cursor").css("left", e.clientX + "px");
        $(".cursor").css("top", e.clientY + "px");
      }, 60);
    });
    const hoverElements = $(".sec-title, a, .menu-btn, .filter");
    hoverElements.mouseenter(function () {
      $(".cursor").addClass("active");
      $(".cursor-pointer").addClass("active");
    });
    hoverElements.mouseleave(function () {
      $(".cursor").removeClass("active");
      $(".cursor-pointer").removeClass("active");
    });
  }

  // ---------- Nav Link ----------
  $(".nav-link").click(function (e) {
    if ($(this.hash).hasClass("active")) {
      $(".menu-btn").click();
      return;
    }

    $("html, body").scrollTop(0);

    gsap.fromTo(".overlay-effect", 1, { x: "-150%", y: "-30%" }, { x: "0%", y: "-30%" });
    setTimeout(() => {
      $(".wrapper").removeClass("active");
      $(this.hash).addClass("active");

      gsap.fromTo(".overlay-effect", 1, { x: "0%", y: "-30%" }, { x: "150%", y: "-30%" });

      !$(this).hasClass("clicked") && animateSection(this.hash.slice(1));
      $(this).addClass("clicked");
    }, 1000);

    $(".menu-btn").click();
  });

  // ---------- Testimonial Slider ----------
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      992: { items: 2 },
    },
  });

  // ---------- Portfolio Isotope ----------

  let $container = $(".portfolio-container");
  $container.isotope({
    itemSelector: ".portfolio-item",
    transitionDuration: "0.3s",
    percentPosition: true,
    resize: false,
  });

  $(".filter-list li").on("click", function (e) {
    e.preventDefault();
    $(".filter-list li.active").removeClass("active");
    $(this).addClass("active");
    let selector = $(this).attr("data-filter");
    if (selector != "*") selector = "[data-filter='" + selector + "']";
    $container.isotope({ filter: selector });
  });
});

function animateSection(section) {
  // ---------- About Section ----------
  switch (section) {
    case "about":
      gsap.from($(".about .sec-image"), {
        x: "-100%",
        duration: 0.6,
        scrollTrigger: {
          trigger: $(".about .sec-image"),
        },
      });
      gsap.from($(".about .sec-content > *"), {
        x: "100%",
        y: "200%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        scrollTrigger: {
          trigger: $(".about .sec-content"),
        },
      });
      // ---------- Service Section ----------
      gsap.from(".service-card", {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".service-container",
        },
      });
      break;

    case "resume":
      // ---------- Resume Section ----------
      $(".timeline-card").each((i, el) => {
        gsap.from(el, {
          x: "-110%",
          opacity: 0,
          duration: 0.6,
          delay: i * 0.25,
          scrollTrigger: {
            trigger: ".resume .sec-content",
          },
        });
      });
      // ---------- Skill Section ----------
      $(".skill-card .value").each((i, valEl) => {
        let val = $(valEl).text();
        let el = $(valEl).parent().next().find("span");

        gsap.to(el, {
          width: val,
          duration: 1,
          delay: i * 0.25,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".skills .sec-content",
          },
        });
      });
      break;

    case "portfolio":
      // ---------- Portfolio Section ----------
      $(".filter-list li.active").click();

      // ---------- Counter Section ----------
      $(".counter").each((i, el) => {
        gsap.from(el, {
          innerText: 0,
          duration: 3,
          snap: {
            innerText: 1,
          },
          scrollTrigger: ".counters",
        });
      });
      break;

    case "blog":
      // ---------- Blog Section ----------
      gsap.from(".blog-card", {
        y: "100%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".blog-container",
        },
      });
      break;

    case "contact":
      gsap.from($(".contact .contact-form"), {
        x: "-100%",
        duration: 0.6,
        scrollTrigger: {
          trigger: $(".contact .contact-form"),
        },
      });
      gsap.from($(".contact .detail > *"), {
        x: "100%",
        y: "200%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        scrollTrigger: {
          trigger: $(".contact .detail"),
        },
      });

      break;
  }
}

// ---------- Ajax Mail ----------
$(function () {
  // Get the form.
  var form = $("#contact-form");

  // Get the messages div.
  var formMessages = $(".form-message");

  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData,
    })
      .done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $("#contact-form input,#contact-form textarea").val("");
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text("Oops! An error occured and your message could not be sent.");
        }
      });
  });
});
