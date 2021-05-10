jQuery(document).ready(function ($) {
  $(".tabs a").click(function (e) {
    e.preventDefault();
    $(".tabs a").not($(this)).removeClass("active");
    $(this).addClass("active");
    //Update the content below tab by clicked tab index:
    var index = $(this).index();
    //Instead of using hide/show, use max-height to serves as hide/show to remain the width for the slick slider,
    // otherwise, the slick slider will shrink into a very thin width div after switching from hide to show.
    $(".attractions .content").children().css("max-height", "0");
    $(".attractions .content").children().eq(index).css("max-height", "none");
  });
});
