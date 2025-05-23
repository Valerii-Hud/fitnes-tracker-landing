import '/src/less/main.less';

$(document).ready(function () {
  $('.about__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    appendDots: $('.about__dots'),
    customPaging: function (slider, i) {
      return '<button class="about__dot"></button>';
    },
  });
});
