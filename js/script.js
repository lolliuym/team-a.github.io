const projects = new Swiper('.projects', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar

});

const about = new Swiper(".about", {
  slidesPerView: 1,
  spaceBetween: 1,
  slidesPerGroup: 1,
  loop: true,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    499: {
      slidesPerView: 2,
      spaceBetweenSlides: 1
    },
    799: {
      slidesPerView: 3,
      spaceBetweenSlides: 1
    },
    1199: {
      slidesPerView: 4,
      spaceBetweenSlides: 1
    }

  }
});

var swiper = new Swiper(".command--md", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
const partners = new Swiper('.partners', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
