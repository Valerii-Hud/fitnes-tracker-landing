import 'https://code.jquery.com/jquery-1.11.0.min.js';
import 'https://code.jquery.com/jquery-migrate-1.2.1.min.js';
import '/src/js/slick.min.js';
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
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  const tabs = document.querySelectorAll('.plan__tab');
  const contents = document.querySelectorAll('.plan__content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      tabs.forEach((t) => t.classList.remove('plan__tab_active'));
      contents.forEach((c) => c.classList.remove('plan__content_active'));

      tab.classList.add('plan__tab_active');
      document.getElementById(target).classList.add('plan__content_active');
    });
  });
});
