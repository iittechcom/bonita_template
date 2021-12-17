$("img:not(.banner__item img)").each(function () {
  $(this).attr("loading", "lazy");
});

document.body.addEventListener(
  "load",
  (e) => {
    if (e.target.tagName != "IMG") {
      return;
    }
    // Remove the blurry placeholder.
    e.target.style.backgroundImage = "none";
  },
  /* capture */
  true
);

$(document).ready(function () {

  /* --- Menu --- */
  $(".lang__menu-icon").click(function (e) {

    $(".lang__menu_drop").toggleClass("active");
  });

  var $lang__menu = $('.lang__menu');
  $(document).mouseup(e => {

    if (!$lang__menu.is(e.target) // if the target of the click isn't the container...
      &&
      $lang__menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $(".lang__menu_drop").removeClass("active");
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $(".header").addClass("fixed");
    }
    else {
      $(".header").removeClass("fixed");
    }
  });

  $(".nav__sub li a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      // event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      var pos = $(hash).offset().top;
      var pos_y = pos;
      $('html, body').animate({
        scrollTop: pos_y
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // menu bar
  $(".menu-icon").click(function (e) {

    if ($(".header__main").hasClass("active")) {
      $(".nav__child").removeClass("active");
    }
    $(".header__main").toggleClass("active");
  });




  function responsive() {
    if ($(window).width() < 1023) {
      $(".nav__item").removeClass("hover");

      $(".nav__item").click(function (e) {

        var $this = $(this)
        if ($this.hasClass("active")) {
          $this.removeClass("active");
        }
        else {
          $(".nav__item").removeClass("active");
          $this.addClass("active");
        }

      });
    }
    else {
      $(".nav__item").addClass("hover");
      $(".nav__item").removeClass("active");
    }

  };

  responsive();

  $(window).resize(function () {
    responsive();
  });

  $(".close-menu").click(function (e) {

    $(".header__main").removeClass("active");
    $(".nav__item").removeClass("active");
  });

  // close menu on click out area mobile

  var $header = $('.header');
  $(document).mouseup(e => {

    if (!$header.is(e.target) // if the target of the click isn't the container...
      &&
      $header.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $(".header__main").removeClass("active");
    }
  });

  // ------
  $(window).scroll(function () {
    if ($(window).scrollTop() > 450) {
      $('.back-top').addClass("show")
    }
    else {
      $('.back-top').removeClass("show")
    }
  });
  $('.back-top').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });


});
