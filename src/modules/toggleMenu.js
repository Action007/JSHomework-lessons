  const toggleMenu = () => {
    const body = document.querySelector('body'),
      menu = document.querySelector('menu');

    let actionMenu = () => {
      menu.classList.toggle('active-menu');
    };
    body.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('close-btn')) {
        actionMenu();
      } else if (target.closest('menu>ul>li')) {
        actionMenu();
      } else if (target.closest('.menu')) {
        actionMenu();
      } else if (menu.classList.value === 'active-menu') {
        target = target.closest('menu');
        if (!target) {
          actionMenu();
        }
      }
    });
  };

  export default toggleMenu;