const allPopups = () => {
  const overlay = document.querySelector('.overlay'),
    headerModalBtn = document.querySelector('.header-modal__btn'),
    headerModalClose = document.querySelector('.header-modal__close'),
    headerModal = document.querySelector('.header-modal'),

    serviceModal = document.querySelector('.services-modal'),
    servicesModalClose = document.querySelector('.services-modal__close'),
    sliderPopup = document.querySelector('.slider-popup'),

    sertificateDocument = document.querySelectorAll('.sertificate-document'),
    imgResponsive = document.querySelector('.img-responsive__img'),
    docsModalClose = document.querySelector('.docs-modal__close');

  const fadeIn = (elem) => {
    elem.style.display = 'block';
    elem.style.opacity = '0';
    const tick = () => {
      elem.style.opacity = +elem.style.opacity + 0.1;
      if (+elem.style.opacity < 1) {
        setTimeout(tick, 16);
      }
    };
    tick();
  };

  const fadeOut = (elem) => {
    const tick = () => {
      if (+elem.style.opacity !== 0) {
        elem.style.opacity = +elem.style.opacity - 0.1;
        setTimeout(tick, 16);
      } else {
        elem.style.display = 'none';
      }
    };
    tick();
  };

  headerModalBtn.addEventListener('click', () => fadeIn(headerModal.parentNode));
  headerModalClose.addEventListener('click', () => fadeOut(headerModal.parentNode));

  sliderPopup.addEventListener('click', (event) => {
    if (event.target.classList.contains('service-modal__btn')) {
      fadeIn(serviceModal.parentNode);
    }
  });
  servicesModalClose.addEventListener('click', () => fadeOut(serviceModal.parentNode));

  sertificateDocument.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      fadeIn(imgResponsive.parentNode);
    });
  });
  docsModalClose.addEventListener('click', () => fadeOut(docsModalClose.parentNode));
};

export default allPopups;