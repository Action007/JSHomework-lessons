const calc = () => {
  const calcSection = document.getElementById('calc');
  
  if (calcSection) {
    const calcInput = document.getElementById('calc-input'),
    calcTotal = document.getElementById('calc-total');

    let calcType = document.getElementById('calc-type'),
      calcTypeMaterial = document.getElementById('calc-type-material');

    const calculate = () => {
      const calcTypeOption = document.getElementById('calc-type'),
        calcMaterial = document.getElementById('calc-type-material'),
        material = calcMaterial.options[calcMaterial.selectedIndex].value,
        type = calcTypeOption.options[calcTypeOption.selectedIndex].value;

      if (material !== '--' && type !== '--') {
        calcTotal.value = material * type * calcInput.value;
      } else if (material !== '--') {
        calcTotal.value = material * calcInput.value;
      } else if (type !== '--') {
        calcTotal.value = type * calcInput.value;
      } else {
        calcTotal.value = calcInput.value;
      }
    };

    const replace = () => {
      calcInput.value = calcInput.value.replace(/\W/, '');
      calculate();
    };

    calcInput.addEventListener('input', replace);
    calcType.addEventListener('change', calculate);
    calcTypeMaterial.addEventListener('change', calculate);
  }
};

export default calc;