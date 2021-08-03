  const validator = () => {
    const img = document.querySelectorAll('.command__photo'),
      calcItems = document.querySelectorAll('input.calc-item'),
      formName = document.querySelectorAll('.form-name'),
      formPhone = document.querySelectorAll('.form-phone'),
      formMessage = document.getElementById('form2-message');

    img.forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        e.target.src = e.target.dataset.img;
      });
      item.addEventListener('mouseleave', (e) => {
        e.target.src = e.target.dataset.img.replace(/a(?=\.jpg)/, '');
      });
    });

    const validateName = (e) => {
      e.target.value = e.target.value.replace(/[^\А-Яа-я ]/, '');
    };

    const validatePhone = (e) => {
      e.target.value = e.target.value.replace(/[^\d-()+]/g, '');
    };

    const validateMessage = (e) => {
      e.target.value = e.target.value.replace(/[^\А-Яа-я\d'";:_/.{},()?!* ]/, '');
    };

    // BLUR
    calcItems.forEach((calcItem) => {
      calcItem.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
      });
    });
    formName.forEach(element => {
      element.addEventListener('input', validateName);
    });
    formPhone.forEach(element => {
      element.addEventListener('input', validatePhone);
    });
    formMessage.addEventListener('input', validateMessage);
  };

  export default validator;