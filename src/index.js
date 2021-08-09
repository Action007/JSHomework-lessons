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
  const carusel = new Slider({
    main: '.portfolio__wrapper',
    wrap: '.portfolio-content',
    slides: '.portfolio-item',
    next: '#arrow-right',
    prev: '#arrow-left',
    showSlides: 1,
    infinity: true
  });
  carusel.init();
  //validator
  validator();
  // calculator
  calc(100);
  // send-ajax-form
  sendForm();