'use strict';

let money;

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = () => {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period: 3,
  asking: () => {
    if (confirm('Есть ли у вас дополнительный заработок?')) {
      let itemIncome;
      let cashIncome;
      do {
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'фриланс');
      } while (!/^\D\S+$/.test(itemIncome));
      do {
        cashIncome = prompt('сколько в месяц на этом зарабатываете?', 10000);
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    }

    do {
      appData.addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую")
        .toLowerCase().split(', ');
    } while (!/^\D\S+$/.test(appData.addExpenses));

    appData.deposit = confirm("Есть ли у вас депозит в банке ?");
    for (let i = 0; i < 2; i++) {
      let expenses;
      let sum;
      do {
        expenses = prompt('Введите обязательную статью расходов?');
      } while (!/^\D\S+$/.test(expenses) && isFinite(expenses));
      do {
        sum = prompt('Во сколько это обойдется?');
      } while (!isNumber(sum));

      appData.expenses[expenses] = +sum;
    }
  },
  getExpensesMonth: () => {
    for (let key in appData.expenses) {
      appData.expensesMonth = appData.expensesMonth + appData.expenses[key];
    }
  },
  getBudget: () => {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth: () => {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: () => {
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (appData.budgetDay > 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
      return ('Что то пошло не так');
    }
  },
  getInfoDeposite: () => {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('какой годовой процент?', 10);
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSavedMoney: () => {
    return appData.budgetMonth * appData.period;
  }
};

let target = () => {
  if (appData.getTargetMonth() > 0) {
    console.log(`цель будет достигнута за ${appData.getTargetMonth()} месяца`);
  } else {
    console.log('цель не будет достигнута');
  }
};

let finalFunc = () => {
  for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
  }
};

let myFunc = () => {
  for (let i = 0; i < appData.addExpenses.length; i++) {
    let myVar = appData.addExpenses[i].trim().charAt(0).toUpperCase() +
      appData.addExpenses[i].trim().substr(1).toLowerCase();
    console.log(myVar);
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('расходы за месяц ' + appData.expensesMonth);
console.log(appData.getStatusIncome());
target();
myFunc();
finalFunc();