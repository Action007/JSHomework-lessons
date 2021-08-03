  const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
      loadMassage = 'Загрузка...',
      succsessMessage = 'Спасибо! Скоро мы с вами свяжемся!';
    const form1 = document.getElementById('form1'),
      form2 = document.getElementById('form2'),
      form3 = document.getElementById('form3'),
      input = document.querySelectorAll('input');
    const statusMessage = document.createElement('div'),
      img = document.createElement('img');

    statusMessage.style.cssText = `
    font-size: 2rem;
    color: white;`;

    const postData = (body) => {
      return fetch('./server1.php', {
        method: 'POST',
        body: JSON.stringify(body)
      });
    };

    const resetValue = () => {
      statusMessage.textContent = '';
      img.style.cssText = ``;
    };

    const succsessFunc = () => {
      input.forEach(item => {
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

      const formData = new FormData(form);
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          succsessFunc();
        })
        .catch(error => errorFunc(error));
    };
    form1.addEventListener('submit', (event) => {
      event.preventDefault();
      formFunc(form1);
    });
    form2.addEventListener('submit', (event) => {
      event.preventDefault();
      formFunc(form2);
    });
    form3.addEventListener('submit', (event) => {
      event.preventDefault();
      formFunc(form3);
    });

  };

  export default sendForm;