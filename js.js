"use strict";

const lastList = document.querySelectorAll('ul'),
  link = document.querySelectorAll('a')[4],
  li = lastList[5].querySelectorAll('li'),
  li2 = lastList[0].querySelectorAll('li'),
  li3 = lastList[2].querySelectorAll('li'),
  book = document.querySelectorAll('.book'),
  add = document.createElement('li');

add.textContent = 'Глава 8: За пределами ES6';
lastList[2].append(add);

book[1].after(book[0]);
book[0].after(book[4]);
book[5].after(book[2]);

li[1].after(li[9]);
li[4].after(li[2]);
li[7].after(li[5]);

li2[9].after(li2[2]);
li2[3].after(li2[6]);
li2[6].after(li2[8]);

li3[8].after(add);


document.querySelector('.adv').remove();
link.textContent = "Книга 3. this и Прототипы Объектов";
console.log(li3);




// let start1 = document.getElementById('start');
// let button = document.getElementsByTagName('button')[0];
// let button1 = document.getElementsByTagName('button')[1];
// let depositCheck = document.querySelector('#deposit-check');
// let additionalIncomeItem = document.querySelectorAll('.additional_income-item')[0];
// let additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[1];
// let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
// let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
// let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
// let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
// let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
// let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
// let salaryAmount = document.querySelector('.salary-amount');
// let incomeTitle = document.querySelectorAll('.income-title')[1];
// let incomeAmount = document.querySelector('.income-amount');
// let additionalIncomeItem2 = document.querySelector('.additional_income-item');
// let additionalIncomeItem3 = document.querySelectorAll('.additional_income-item')[1];
// let expensesTitle = document.querySelectorAll('.expenses-title')[1];
// let expensesAmount = document.querySelector('.expenses-amount');
// let additionalExpensesItem = document.querySelector('.additional_expenses-item');
// let targetAmount = document.querySelector('.target-amount');
// let periodSelect = document.querySelector('.period-select');

// let money;

// let isNumber = function (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };

// let start = () => {
//   do {
//     money = prompt('Ваш месячный доход?');
//   } while (!isNumber(money));
// };

// start();

// let appData = {
//   income: {},
//   addIncome: [],
//   expenses: {},
//   addExpenses: [],
//   budget: money,
//   budgetDay: 0,
//   budgetMonth: 0,
//   expensesMonth: 0,
//   deposit: false,
//   percentDeposit: 0,
//   moneyDeposit: 0,
//   mission: 50000,
//   period: 3,
//   asking: () => {
//     if (confirm('Есть ли у вас дополнительный заработок?')) {
//       let itemIncome;
//       let cashIncome;
//       do {
//         itemIncome = prompt('Какой у вас дополнительный заработок?', 'фриланс');
//       } while (!/^\D\S+$/.test(itemIncome));
//       do {
//         cashIncome = prompt('сколько в месяц на этом зарабатываете?', 10000);
//       } while (!isNumber(cashIncome));
//       appData.income[itemIncome] = cashIncome;
//     }

//     do {
//       appData.addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую")
//         .toLowerCase().split(', ');
//     } while (!/^\D\S+$/.test(appData.addExpenses));

//     appData.deposit = confirm("Есть ли у вас депозит в банке ?");
//     for (let i = 0; i < 2; i++) {
//       let expenses;
//       let sum;
//       do {
//         expenses = prompt('Введите обязательную статью расходов?');
//       } while (!/^\D\S+$/.test(expenses) && isFinite(expenses));
//       do {
//         sum = prompt('Во сколько это обойдется?');
//       } while (!isNumber(sum));

//       appData.expenses[expenses] = +sum;
//     }
//   },
//   getExpensesMonth: () => {
//     for (let key in appData.expenses) {
//       appData.expensesMonth = appData.expensesMonth + appData.expenses[key];
//     }
//   },
//   getBudget: () => {
//     appData.budgetMonth = appData.budget - appData.expensesMonth;
//     appData.budgetDay = appData.budgetMonth / 30;
//   },
//   getTargetMonth: () => {
//     return Math.ceil(appData.mission / appData.budgetMonth);
//   },
//   getStatusIncome: () => {
//     if (appData.budgetDay >= 1200) {
//       return ('У вас высокий уровень дохода');
//     } else if (appData.budgetDay >= 600) {
//       return ('У вас средний уровень дохода');
//     } else if (appData.budgetDay > 0) {
//       return ('К сожалению у вас уровень дохода ниже среднего');
//     } else {
//       return ('Что то пошло не так');
//     }
//   },
//   getInfoDeposite: () => {
//     if (appData.deposit) {
//       do {
//         appData.percentDeposit = prompt('какой годовой процент?', 10);
//       } while (!isNumber(appData.percentDeposit));
//       do {
//         appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
//       } while (!isNumber(appData.moneyDeposit));
//     }
//   },
//   calcSavedMoney: () => {
//     return appData.budgetMonth * appData.period;
//   }
// };

// let target = () => {
//   if (appData.getTargetMonth() > 0) {
//     console.log(`цель будет достигнута за ${appData.getTargetMonth()} месяца`);
//   } else {
//     console.log('цель не будет достигнута');
//   }
// };

// let finalFunc = () => {
//   for (let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
//   }
// };

// let myFunc = () => {
//   for (let i = 0; i < appData.addExpenses.length; i++) {
//     let myVar = appData.addExpenses[i].trim().charAt(0).toUpperCase() +
//       appData.addExpenses[i].trim().substr(1).toLowerCase();
//     console.log(myVar);
//   }
// };

// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();

// console.log('расходы за месяц ' + appData.expensesMonth);
// console.log(appData.getStatusIncome());
// target();
// myFunc();
// finalFunc();

// console.log(start);
// console.log(button);
// console.log(button1);
// console.log(depositCheck);
// console.log(additionalIncomeItem);
// console.log(additionalIncomeItem1);
// console.log(budgetDayValue);
// console.log(expensesMonthValue);
// console.log(additionalIncomeValue);
// console.log(additionalExpensesValue);
// console.log(incomePeriodValue);
// console.log(targetMonthValue);
// console.log(salaryAmount);
// console.log(incomeTitle);
// console.log(incomeAmount);
// console.log(additionalIncomeItem2);
// console.log(additionalIncomeItem3);
// console.log(expensesTitle);
// console.log(expensesAmount);
// console.log(additionalExpensesItem);
// console.log(targetAmount);
// console.log(periodSelect);