const smoothScroll = () => {
  const up = document.querySelector('.smooth-scroll__img'),
    offer = document.getElementById('offer'),
    header = document.getElementById('header'),
    navigation = document.getElementById('navigation');

  window.addEventListener('scroll', () => {
    let top = offer.offsetHeight + header.offsetHeight + navigation.offsetHeight;

    if (window.pageYOffset > top) {
      up.classList.add('active');
    } else {
      up.classList.remove('active');
    }
  });

  up.addEventListener('click', (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    e.preventDefault();
  });
};

export default smoothScroll;