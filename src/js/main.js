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

  // Логика табов
  const tabs = document.querySelectorAll('.plan__tab');
  const contents = document.querySelectorAll('.plan__content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      // Удаляем активные классы
      tabs.forEach((t) => t.classList.remove('plan__tab_active'));
      contents.forEach((c) => c.classList.remove('plan__content_active'));

      // Добавляем активные классы для выбранных
      tab.classList.add('plan__tab_active');
      document.getElementById(target).classList.add('plan__content_active');
    });
  });
});
