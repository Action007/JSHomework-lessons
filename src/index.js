  'use strict';

  import countTimer from './modules/countTimer';
  import toggleMenu from './modules/toggleMenu';
  import togglePopup from './modules/togglePopup';
  import tabs from './modules/tabs';
  import scroll from './modules/scroll';
  import slider from './modules/slider';
  import validator from './modules/validator';
  import calc from './modules/calc';
  import sendForm from './modules/sendForm';
  import Slider from './modules/slider';
  import carusel from './modules/carusel';

  // timer
  countTimer('15 august 2021');
  // menu
  toggleMenu();
  // popup
  togglePopup();
  // tabs
  tabs();
  // Smooth scrolling
  scroll();
  // slider
  carusel();
  const sliderCarusel = new Slider({
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    slides: '.companies-hor-item',
    showSlides: 3,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3,
      },
      {
        breakpoint: 768,
        slidesToShow: 2,
      },
      {
        breakpoint: 576,
        slidesToShow: 1,
      },
    ],
  });
  sliderCarusel.init();
  //validator
  validator();
  // calculator
  calc(100);
  // send-ajax-form
  sendForm();