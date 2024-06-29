$(document).ready(function () {
  $(".banner-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".banner-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".banner-slider-wrap .slider-navigation .slick-next"),
  });

  $(".images-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".images-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".images-slider-wrap .slider-navigation .slick-next"),
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => {
        pane.classList.remove("active");
        pane.classList.remove("fade-in");
      });

      button.classList.add("active");
      document.getElementById(targetTab).classList.add("active", "fade-in");
    });
  });

  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });

  $(".popup-gallery2").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });
});
