  const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
      loadMassage = 'Загрузка...',
      succsessMessage = 'Спасибо! Скоро мы с вами свяжемся!',
      form1 = document.getElementById('form1'),
      form2 = document.getElementById('form2'),
      form3 = document.getElementById('form3'),
      formEmail1 = document.getElementById('form1-email'),
      formEmail2 = document.getElementById('form2-email'),
      formEmail3 = document.getElementById('form3-email'),
      formPhone1 = document.getElementById('form1-phone'),
      formPhone2 = document.getElementById('form2-phone'),
      formPhone3 = document.getElementById('form3-phone'),
      input = document.querySelectorAll('input'),
      statusMessage = document.createElement('div'),
      img = document.createElement('img'),
      regExpEmail = /\S+@\S+\.\S{2}/,
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
      console.log(formPhone1.value);
      event.preventDefault();
      if (regExpEmail.test(formEmail1.value)) {
        if (regExpTel.test(formPhone1.value)) {
          formFunc(form1);
        } else {
          alert('введите валидный номер телефона');
        }
      } else {
        alert('введите валидный e-mail');
      }
    });
    form2.addEventListener('submit', (event) => {
      event.preventDefault();
      if (regExpEmail.test(formEmail2.value)) {
        if (regExpTel.test(formPhone2.value)) {
          formFunc(form2);
        } else {
          alert('введите валидный номер телефона');
        }
      } else {
        alert('введите валидный e-mail');
      }
    });
    form3.addEventListener('submit', (event) => {
      event.preventDefault();
      if (regExpEmail.test(formEmail3.value)) {
        if (regExpTel.test(formPhone3.value)) {
          formFunc(form3);
        } else {
          alert('введите номер телефона до конца');
        }
      } else {
        alert('введите валидный e-mail');
      }
    });

  };

  export default sendForm;