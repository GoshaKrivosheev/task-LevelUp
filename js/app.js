'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let slider = $('#slider');
  slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  });

  // TIMER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let timer = '30:00';
  let interval = setInterval(() => {
    let t = timer.split(':');
    let minutes = +t[0];
    let seconds = +t[1];
    --seconds;
    minutes = seconds < 0 ? --minutes : minutes;
    seconds = seconds < 0 ? 59 : seconds;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    if ((seconds <= 0 && minutes <= 0) || minutes < 0) {
      clearInterval(interval);
    }
    timer = minutes + ':' + seconds;

    document.querySelector('#timer').innerHTML = `
  ${minutes}:${seconds}
  `;
  }, 1000);

  // SCROLL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      700
    );
  });

  // ONE MORE WAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // const btn = document.querySelectorAll('[data-scroll]'),
  //   form = document.querySelector('#form');
  // function scrollIntoView(top) {
  //   form.scrollIntoView({
  //     block: 'center',
  //     behavior: 'smooth',
  //   });
  // }

  // btn.forEach((item) => {
  //   item.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     scrollIntoView(item);
  //   });
  // });
});
