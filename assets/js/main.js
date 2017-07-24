function initScroll() {
  $.scrollify({
    section : ".home section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: false,
    touchScroll: false
  });
}

$(window).resize(function() {
  initScroll();
});

$(document).ready(function() {
  initScroll();

  //mobile toggle function start

  $(".mobile-toggle").on("click", function () {
    var e = $("nav");
    mobileToggle(e);
  });

  function mobileToggle(e) {
    if ($(e).hasClass("active") == true) {
      $(e).removeClass("active");
    } else {
      $(e).addClass("active");
    }
  };  
  //mobile toggle function end

  //show language options
  $(".switch-language a").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });

  //show tooltip
  $('.more-btn').click(function(e) {
    e.preventDefault();
    // var tooltips = $('.tooltip'),
    //     clickedTooltip = $(e.target); 

    // for (var i = 0, len = tooltips.length; i < len; i++) {
    //   $(tooltips[i]).prev().removeClass('active');
    // };

    // clickedTooltip.addClass('active');
  });

  //hide tooltips
  $('body').on('click', function(e) {

    //hide tooltips
    // if($(e.target).closest(".more-btn").length == 0) {
    //   $(".more-btn").removeClass("active");
    // };

    //hide language options
    if($(e.target).closest(".switch-language a").length == 0) {
      $(".switch-language a").removeClass("active");
    };
  });


  //banners slide on sidebar
  var asideSlider = $(".slider");

  if (asideSlider.length > 0) {
    $(asideSlider).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      dotsClass: 'dots'
    });
  };

  //scroll to top
  $('.to-top').click(function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, {
        duration: 1500
    });
  });

  //accordion
  $(".tab").accordion({
    header: ".q",
    collapsible: true,
    active: false
  });

  //tabs
  $('.qa .container').tabs();

});
