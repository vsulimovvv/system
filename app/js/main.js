window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.reviews__slider');
    new Swiper(sliderEl, {
      loop: true,
      spaceBetween: 40,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 25,
        },
        1560: { spaceBetween: 40 },
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.photos__slider');
    new Swiper(sliderEl, {
      loop: true,
      spaceBetween: 15,
      slidesPerView: 'auto',
      navigation: {
        nextEl: document.querySelector('.photos__slider .swiper-button-next'),
        prevEl: document.querySelector('.photos__slider .swiper-button-prev'),
      },
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.directions__slider');
    new Swiper(sliderEl, {
      effect: 'fade',
      navigation: {
        nextEl: document.querySelector('.directions .swiper-button-next'),
        prevEl: document.querySelector('.directions .swiper-button-prev'),
      },
      loop: true,
      slidesPerView: 1,
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.mentors__slider');
    new Swiper(sliderEl, {
      navigation: {
        nextEl: document.querySelector('.mentors__slider .swiper-button-next'),
        prevEl: document.querySelector('.mentors__slider .swiper-button-prev'),
      },
      spaceBetween: 45,
      loop: true,
      slidesPerView: 'auto',
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        991: { spaceBetween: 45 },
      },
    });
  })();

  // * ===== Slider
  (function showMore() {
    const showMoreBtn = document.querySelector('.event-program__more');
    const showMoreContainer = document.querySelector('.event-program__list');
    if (showMoreBtn) {
      showMoreBtn.addEventListener('click', (e) => {
        showMoreContainer.classList.toggle('active');

        if (showMoreContainer.classList.contains('active')) {
          showMoreBtn.textContent = 'Скрыть';
        } else {
          showMoreBtn.textContent = 'Показать еще';
        }
      });
    }
  })();

  // // * ===== Custom select
  // (function customSelect() {
  //   const selects = document.querySelectorAll('.select');
  //   selects.forEach((el) => {
  //     const select = new Choices(el, {
  //       itemSelectText: '',
  //       searchEnabled: false,
  //     });
  //   });
  // })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.style.transform = 'translateX(0)';
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.style.transform = 'translateX(-100%)';
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.style.transform = 'translateX(-100%)';
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // // * ===== Accordion
  // const toggleAccordion = (accordionControl, accordionContent, accordion) => {
  //   const filters = document.querySelectorAll(accordionControl);
  //   filters.forEach((el) => {
  //     el.addEventListener('click', (e) => {
  //       const target = e.target.closest(accordion);
  //       const content = target.querySelector(accordionContent);
  //       target.classList.toggle('active');
  //       if (target.classList.contains('active')) {
  //         content.style.maxHeight = content.scrollHeight + 'px';
  //       } else {
  //         content.style.maxHeight = null;
  //       }
  //     });
  //   });
  // };
  // toggleAccordion('.accordion__control', '.accordion__content', '.accordion');
  // // * ===== Mixer
  // (function mixer() {
  //   const mixContent = document.querySelector('.mixer__content');
  //   if (mixContent) {
  //     const mixer = mixitup(mixContent);
  //   }
  // })();
  // // * ===== Modal
  // (function modals() {
  //   function bindModal(openBtn, modal, close) {
  //     const openBtnEl = document.querySelectorAll(openBtn);
  //     const modalEl = document.querySelector(modal);
  //     const closeEl = document.querySelectorAll(close);
  //     const body = document.querySelector('body');
  //     if (modalEl) {
  //       openBtnEl.forEach((el) => {
  //         el.addEventListener('click', (e) => {
  //           if (e.target) {
  //             e.preventDefault();
  //           }
  //           modalEl.classList.add('active');
  //           body.classList.add('no-scroll');
  //         });
  //       });
  //       closeEl.forEach((btn) => {
  //         btn.addEventListener('click', (e) => {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         });
  //       });
  //       modalEl.addEventListener('click', (e) => {
  //         if (e.target === modalEl) {
  //           modalEl.classList.remove('active');
  //           body.classList.remove('no-scroll');
  //         }
  //       });
  //     }
  //   }
  //   bindModal('.download__btn', '.popup--download', '.popup__close');
  //   bindModal('.header__favorite', '.popup--card-object', '.popup__close');
  //   bindModal('.get-presentation', '.popup--get-info', '.popup__close');
  //   bindModal('.presentation__download', '.popup--get-info', '.popup__close');
  // })();
  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    if (header) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs(
    '.tabs',
    '.tabs__top-btn',
    '.tabs__content',
    'tabs__top-btn--active'
  );
});
