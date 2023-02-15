$(function () {
  $(".arrows .xi-arrow-left").on("click", function () {
    $(".mainVisual .main_slide").slick("slickPrev");
  });
  $(".arrows .xi-arrow-right").on("click", function () {
    $(".mainVisual .main_slide").slick("slickNext");
  });
  $(".mainVisual").on("init afterChange", function (e, s, c) {
    $(".num span").text(c ? c + 1 : 1);
    $(".num strong").text(s.slideCount);
    $(".sd02112 span").width((100 / s.slideCount) * (c + 1) + "%");
    console.log(s.slideCount);
  });

  $(".main_slide").slick({
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    fade: true,
  });

  $(".content_slide .first_itm").slick({
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    slidesToShow: 5,
  });

  $(".content_slide .second_itm").slick({
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    slidesToShow: 5,
  });

  $(".one").on("click", function () {
    $(".second_itm").addClass("hidden");
    $(".first_itm").removeClass("hidden");
  });

  $(".two").on("click", function () {
    $(".first_itm").addClass("hidden");
    $(".second_itm").removeClass("hidden");
  });
});
