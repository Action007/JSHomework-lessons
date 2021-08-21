  const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
      loadMassage = 'Загрузка...',
      succsessMessage = 'Спасибо! Скоро мы с вами свяжемся!',
      formAll = document.querySelectorAll('.form-form'),
      statusMessage = document.createElement('div'),
      img = document.createElement('img'),
      regExpEmail = /^(?!\s*$).+/,
      regExpTel = /.{16}/;

    statusMessage.style.cssText = `
    font-size: 2rem;
    color: white;`;

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        body: JSON.stringify(body)
      });
    };

    const resetValue = () => {
      let name = document.querySelectorAll('.form-name'),
        tel = document.querySelectorAll('.form-tel');

      name.forEach(item =>  item.value = '');
      tel.forEach(item => item.value = '');

      statusMessage.textContent = '';
      img.style.cssText = ``;
    };

    const succsessFunc = () => {
      formAll.forEach(item => {
        item.value = '';
      });
      statusMessage.textContent = succsessMessage;
      img.style.cssText = `
      margin-right: 10px;
      width: 25px;`;
      img.src = 'images/success.png';
      statusMessage.insertBefore(img, statusMessage.firstChild);

      setTimeout(resetValue, 5000);
    };

    const errorFunc = (error) => {
      console.error(error);
      statusMessage.textContent = errorMessage;
      img.style.cssText = `
      margin-right: 10px;
      width: 25px;`;
      img.src = 'images/error.png';
      statusMessage.insertBefore(img, statusMessage.firstChild);

      setTimeout(resetValue, 5000);
    };

    const formFunc = (form) => {
      form.appendChild(statusMessage);
      statusMessage.textContent = loadMassage;
      img.style.cssText = `
      margin-right: 10px;
      width: 25px;`;
      img.src = 'images/load2.gif';
      statusMessage.insertBefore(img, statusMessage.firstChild);

      const formData = new FormData(form),
        calcTotal = document.getElementById('calc-total');
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });
      if (calcTotal !== null) body.calculate = calcTotal.value;
      postData(body)
        .then(response => {
          if (response.status !== 200) {

            throw new Error('status network not 200');
          }
          succsessFunc();
        })
        .catch(error => errorFunc(error));
    };

    formAll.forEach(elem => {
      elem.addEventListener('submit', (event) => {
        let name = elem.querySelector('.form-name'),
        tel = elem.querySelector('.form-tel');
        event.preventDefault();
        if (regExpEmail.test(name.value)) {
          if (regExpTel.test(tel.value)) {
            formFunc(elem);
          } else {
            alert('введите номер телефона до конца');
          }
        } else {
          alert('введите имя');
        }
      });
    });
  };

  export default sendForm;