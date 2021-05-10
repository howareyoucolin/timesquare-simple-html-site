jQuery(document).ready(function ($) {
  $(".attractions .content ul").each(function () {
    $(this).on("init", function (event, slick) {
      var index = $(this).index("ul");
      // Hide the all uls expect for the first one after slick inited.
      if (index !== 0) {
        $(this).css("max-height", "0");
      }
    });

    $(this).slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            centerPadding: '40px',
            slidesToShow: 1,
          }
        },
      ]
    });
  });
});
