    const validate = () => {
        const formName = document.querySelectorAll('.form-name'),
        formPhone = document.querySelectorAll('.form-tel');


      function maskPhone(selector, masked = '+7 (___) ___-__-__') {
        const elems = document.querySelectorAll(selector);

        function mask(event) {
          const keyCode = event.keyCode;
          const template = masked,
            def = template.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
          let i = 0,
            newValue = template.replace(/[_\d]/g, function (a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
          i = newValue.indexOf("_");
          if (i != -1) {
            newValue = newValue.slice(0, i);
          }
          let reg = template.substr(0, this.value.length).replace(/_+/g,
            function (a) {
              return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = newValue;
          }
          if (event.type === "blur" && this.value.length < 5) {
            this.value = "";
          }
        }

        for (const elem of elems) {
          elem.addEventListener("input", mask);
          elem.addEventListener("focus", mask);
          elem.addEventListener("blur", mask);
        }
      }

      const validateName2 = (e) => {
        e.target.value = e.target.value
          .replace(/[^а-яё\a-z -]/gi, '')
          .replace(/^[ -]+/g, '')
          .replace(/[ -]+$/g, '')
          .replace(/\s+/g, ' ')
          .split(' ')
          .map((word) => {
            if (word === '') {
              return word;
            }
            return word[0].toUpperCase() + word.slice(1);
          })
          .join(' ');
      };

      const validatePhone2 = (e) => {
        e.target.value = e.target.value.replace(/[^\d-()+]/g, '');
      };

      const validateName = (e) => {
        e.target.value = e.target.value
          .replace(/[^\А-Яа-яA-Za-z ]/, '')
          .replace(/^ | {2}/, '');
      };
      
      formName.forEach(element => {
        element.addEventListener('input', validateName);
        element.addEventListener('blur', validateName2);
      });
      formPhone.forEach(element => {

        element.addEventListener('input', () => {
          maskPhone(`.${element.classList[2]}`);
        });
        element.addEventListener('blur', validatePhone2);
      });
    };


    export default validate;