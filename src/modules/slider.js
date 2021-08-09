  // const slider = () => {
  //   const slide = document.querySelectorAll('.portfolio-item'),
  //     dotParrent = document.querySelector('.portfolio-dots'),
  //     slider = document.querySelector('.portfolio-content');
  //   let dot = document.querySelectorAll('.dot');

  //   let currentSlide = 0,
  //     interval;

  //   const dots = () => {
  //     dot.forEach(item => {
  //       item.parentNode.removeChild(item);
  //     });

  //     for (let i = 0; i < slide.length; i++) {
  //       let newDiv = document.createElement('li');
  //       newDiv.classList = 'dot';
  //       if (i === 0) {
  //         newDiv.classList.add('dot-active');
  //       }
  //       dotParrent.append(newDiv);
  //     }
  //     dot = document.querySelectorAll('.dot');
  //   };

  //   const prevSlide = (elem, index, strClass) => {
  //     elem[index].classList.remove(strClass);
  //   };

  //   const nextSlide = (elem, index, strClass) => {
  //     elem[index].classList.add(strClass);
  //   };

  //   const autoPlaySlide = () => {
  //     prevSlide(slide, currentSlide, 'portfolio-item-active');
  //     prevSlide(dot, currentSlide, 'dot-active');
  //     currentSlide++;
  //     if (currentSlide >= slide.length) {
  //       currentSlide = 0;
  //     }
  //     nextSlide(slide, currentSlide, 'portfolio-item-active');
  //     nextSlide(dot, currentSlide, 'dot-active');
  //   };
  //   const startSlide = (time = 1500) => {
  //     interval = setInterval(autoPlaySlide, time);
  //   };
  //   const stopSlide = () => {
  //     clearInterval(interval);
  //   };

  //   slider.addEventListener('click', (event) => {
  //     event.preventDefault();

  //     let target = event.target;

  //     if (!target.matches('.portfolio-btn, .dot')) {
  //       return;
  //     }

  //     prevSlide(slide, currentSlide, 'portfolio-item-active');
  //     prevSlide(dot, currentSlide, 'dot-active');

  //     if (target.matches('#arrow-right')) {
  //       currentSlide++;
  //     } else if (target.matches('#arrow-left')) {
  //       currentSlide--;
  //     } else if (target.matches('.dot')) {
  //       dot.forEach((item, index) => {
  //         if (item === target) {
  //           currentSlide = index;
  //         }
  //       });
  //     }

  //     if (currentSlide >= slide.length) {
  //       currentSlide = 0;
  //     }

  //     if (currentSlide < 0) {
  //       currentSlide = slide.length - 1;
  //     }
  //     nextSlide(slide, currentSlide, 'portfolio-item-active');
  //     nextSlide(dot, currentSlide, 'dot-active');
  //   });

  //   slider.addEventListener('mouseover', (event) => {
  //     if (event.target.matches('.portfolio-btn') ||
  //       event.target.matches('.dot')) {
  //       stopSlide();
  //     }
  //   });
  //   slider.addEventListener('mouseout', (event) => {
  //     if (event.target.matches('.portfolio-btn') ||
  //       event.target.matches('.dot')) {
  //       startSlide();
  //     }
  //   });

  //   dots();
  //   startSlide(1500);
  // };

  class Slider {
    constructor({
      main,
      wrap,
      slides,
      next,
      prev,
      position = 0,
      showSlides = 3,
      infinity = false
    }) {
      if (!main && !wrap) {
        console.warn('slider-carusel: Необходимо передать 2 свойства, "main" и "wrap"');
      }
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelectorAll(slides);
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.showSlides = showSlides;
      this.options = {
        position,
        infinity,
        widthSlides: Math.floor(100 / this.showSlides)
      };
    }

    init() {
      this.addClass();
      this.addStyle();



      if (this.prev && this.next) {
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      }
    }

    addClass() {
      this.main.classList.add('glo-slider');
      this.wrap.classList.add('glo-slider__wrap');

      for (const item of this.slides) {
        item.classList.add('glo-slider__item');
      }
    }

    addStyle() {
      const style = document.createElement('style');
      style.id = 'sliderCarusel-style';
      style.textContent = `
      .glo-slider {
        overflow: hidden !important;
      }

      .glo-slider__wrap{
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
      }

      .glo-slider__item {
        display: flex !important;
        align-items: center;
        justify-content: center;
        flex: 0 0 ${this.options.widthSlides}% !important;
        margin: 0 auto !important;
      }

      .glo-slider__next,
      .glo-slider__prev {
        position: absolute;
        cursor: pointer;
        top: 50%;
        z-index: 5;
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
      }

      .glo-slider__next {
        right: 20px;
        border-left-color: #19bbfe
      }

      .glo-slider__prev {
        left: 20px;
        border-right-color: #19bbfe
      }

      .glo-slider__prev:hover,
      .glo-slider__next:hover,
      .glo-slider__prev:focus,
      .glo-slider__next:focus {
        outline: transparent;
        background: transparent;
      }
      `;

      document.head.append(style);
    }

    controlSlider() {
      this.next.addEventListener('click', (e) => {
        e.preventDefault();
        this.nextSlider();
      });
      this.prev.addEventListener('click', (e) => {
        e.preventDefault();
        this.prevSlider();
      });
    }

    prevSlider() {
      if (this.options.infinity | this.options.position > 0) {
        --this.options.position;
        if (this.options.position < 0) {
          this.options.position = this.slides.length - this.showSlides;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;
      }
    }

    nextSlider() {
      if (this.options.infinity | this.options.position < this.slides.length - this.showSlides) {
        ++this.options.position;
        if (this.options.position > this.slides.length - this.showSlides) {
          this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;
      }
    }

    addArrow() {
      this.prev = document.createElement('button');
      this.next = document.createElement('button');

      this.prev.className = 'glo-slider__prev';
      this.next.className = 'glo-slider__next';

      this.main.append(this.prev);
      this.main.append(this.next);
    }
  }

  export default Slider;