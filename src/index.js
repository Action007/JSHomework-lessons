'use strict';

import allPopups from './modules/allPopups';
import smoothScroll from './modules/smoothScroll';
import timer from './modules/timer';
import sliderCarousel from './modules/sliderCarousel';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import validate from './modules/validate';

allPopups();

smoothScroll();

timer('30 august 2021');

sliderCarousel('.benefits-wrap', '.benefits__arrow--right',
  '.benefits__arrow--left', '.benefits__item', 3, 5);

sliderCarousel('.slider-popip__sliders', '.services__arrow--right',
  '.services__arrow--left', '.slider-popup__slide', 2, 3);

calc();

sendForm();

validate();