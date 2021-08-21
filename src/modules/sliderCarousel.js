const sliderCarousel = (wrap, right, left, item, width1, width2) => {
  const wrapper = document.querySelector(wrap),
    arrowRight = document.querySelector(right),
    arrowLeft = document.querySelector(left),
    slider = document.querySelector(item);

  let slide;

  window.addEventListener('resize', () => {
    if (window.innerWidth > 576) {
      slide = slider.offsetWidth * width1;
    } else {
      slide = slider.offsetWidth;
    }
  });

  if (window.innerWidth > 576) {
    slide = slider.offsetWidth * width1;
  } else {
    slide = slider.offsetWidth;
  }

  let offset = 0;

  const slideToRight = () => {
    offset += slide;

    if (window.innerWidth > 576) {
      if (offset > slide) offset = 0;
    } else {
      if (offset > slide * width2) offset = 0;
    }


    wrapper.style.left = -offset + 'px';
  };

  const slideToLeft = () => {
    offset -= slide;

    if (window.innerWidth > 576) {
      if (offset < 0) offset = slide;
    } else {
      if (offset < 0) offset = slide * width2;
    }

    wrapper.style.left = -offset + 'px';
  };

  arrowRight.addEventListener('click', slideToRight);
  arrowLeft.addEventListener('click', slideToLeft);
};

export default sliderCarousel;