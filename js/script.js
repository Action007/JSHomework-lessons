// Объявляем expression функцию filterByType и передаём тип и значение. Перебираем значение с помощью .filter()
//  и проверяем тип с помощью typeoff
const filterByType = (type, ...values) => values.filter(value => typeof value === type), //перечисляем константы через запятую

  // Объявляем expression функцию hideAllResponseBlocks 
  hideAllResponseBlocks = () => {
    // создаём константу responseBlocksArray создаём новый массив из массивоподобного или итерируемого объекта из DOM элемент
    const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
    // Перебираем массив и записываем в стили display = 'none'
    responseBlocksArray.forEach(block => block.style.display = 'none');
  },

  // Объявляем expression функцию showResponseBlock и передаём имя класса, аргумент msgText и имя ID
  showResponseBlock = (blockSelector, msgText, spanSelector) => {
    // вызываем функцию hideAllResponseBlocks();
    hideAllResponseBlocks();
    // ищем наш класс blockSelector и задаем ему display = 'block'
    document.querySelector(blockSelector).style.display = 'block';
    // если мы передали spanSelector то...
    if (spanSelector) {
      // находим наш элемент и присваиваем текст контенту msgText
      document.querySelector(spanSelector).textContent = msgText;
    }
  },

  // Объявляем expression функцию showError аргументом которого является msgText
  showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'), //вызываем функцию showResponseBlock и передаём наши аргументы. Эта функция вызывается если произошла ошибка

  // Объявляем expression функцию showResults аргументом которого является msgText
  showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'), //вызываем функцию showResponseBlock и передаём наши аргументы. Эта функция вызывается если всё успешно

  // Объявляем expression функцию showNoResults
  showNoResults = () => showResponseBlock('.dialog__response-block_no-results'), //вызываем функцию showResponseBlock и передаём наши аргумент. Эта функция вызывается если поле пустое

  // Объявляем expression функцию tryFilterByType и передаём тип и значение
  tryFilterByType = (type, values) => {
    // Создаем блок try. Если в этом блоке будет ошибка, то ошибка не сломает нашу функцию
    try {
      // объявляем константу valuesArray. 
      const valuesArray = eval(`filterByType('${type}', ${values})`).join(", "); //eval() - функция глобального объекта. Исполняет содержащееся в строке выражение. И с помощью шаблонных литералов мы используем аргументы type и value. Затем результат вызова eval объединяем при помощи метода join в строку

      // объявляем константу alertMsg и при помощи тернарных операторов, проверяем valuesArray.length
      const alertMsg = (valuesArray.length) ?
        // если valuesArray.length не пустой то выполняется следующий код
        `Данные с типом ${type}: ${valuesArray}` :
        // если нет то выполняется следующий код
        `Отсутствуют данные типа ${type}`;
      // И после этого вызывается функция showResults и alertMsg передается как аргумент
      showResults(alertMsg);

      //если произошла ошибка в блоке try то выполняется catch
    } catch (e) {
      //вызвать функцию showError() и передаем ошибку как аргумент
      showError(`Ошибка: ${e}`);
    }
  };

// создаём константу и присваиваем ему ID #filter-btn из DOM элемента. Получаем элемент с помощью document.querySelector
const filterButton = document.querySelector('#filter-btn');

//навешиваем события на filterButton
filterButton.addEventListener('click', e => {

  // создаём константу и присваиваем ему ID #type из DOM элемента. Получаем элемент с помощью document.querySelector
  const typeInput = document.querySelector('#type');
  // создаём константу и присваиваем ему ID #data из DOM элемента. Получаем элемент с помощью document.querySelector
  const dataInput = document.querySelector('#data');

  //если поле dataInput.value пустое то выполняется следующий код
  if (dataInput.value === '') {
    //Предупреждаем что в поле не должно быть пустым. Метод setCustomValidity() устанавливает  специальное сообщение для  выбранного элемента.
    dataInput.setCustomValidity('Поле не должно быть пустым!');

    // и запускаем функцию showNoResults();
    showNoResults();

    //если поле dataInput.value не пустое то выполняется следующий код
  } else {
    // Если элемент не имеет пользовательской ошибки в параметре указываем пустую строку в setCustomValidity()
    dataInput.setCustomValidity('');

    // с помощью e.preventDefault() отменяем перезагрузку страницы
    e.preventDefault();

    // Передаем значение typeInput.value и dataInput.value как аргумент и при помощью trim() удаляем лишние пробелы в начале и в конце
    tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
  }
});