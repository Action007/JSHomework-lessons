  const scroll = () => {
    const scrollBtn = document.querySelector('a[href="#service-block"]'),
      scrollBlock = document.getElementById('service-block'),
      scrollMenu = document.querySelectorAll('menu>ul>li>a');

    scrollBtn.addEventListener('click', (event) => {
      event.preventDefault();
      scrollBlock.scrollIntoView({
        behavior: "smooth",
        block: 'start'
      });
    });

    scrollMenu.forEach(item => {
      item.addEventListener('click', (event) => {
        let link = item.getAttribute('href').substring(1),
          scrollBlock = document.getElementById(link);

        event.preventDefault();

        scrollBlock.scrollIntoView({
          behavior: "smooth",
          block: 'start'
        });
      });
    });
  };

  export default scroll;