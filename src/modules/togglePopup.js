  const togglePopup = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn');

    let fadeIn = (element) => {
      element.style.display = 'block';
      if (screen.width > 768) {
        element.style.opacity = '0';
        let tick = () => {
          element.style.opacity = +element.style.opacity + 0.1;
          if (+element.style.opacity < 1) {
            setTimeout(tick, 16);
          }
        };
        tick();
      }
    };

    let fadeOut = (element) => {
      let tick = () => {
        if (+element.style.opacity !== 0) {
          element.style.opacity = +element.style.opacity - 0.1;
          setTimeout(tick, 16);
        } else {
          element.style.display = 'none';
        }
      };
      tick();
    };

    popupBtn.forEach(item => {
      item.addEventListener("click", () => {
        fadeIn(popup);
      });
    });

    popup.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        fadeOut(popup);
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          fadeOut(popup);
        }
      }
    });
  };

  export default togglePopup;