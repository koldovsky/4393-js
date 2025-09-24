// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// counter = counter + 1;
// counter += 1;

// Цикл з передумовою
// let counter = 1;
// while (counter <= 5) {
//   console.log(counter);
//   counter++;
// }

// Цикл з постумовою
// let counter = 1;
// do {
//   console.log(counter);
//   counter++;
// } while (counter <= 5);

// Цикл з лічильником
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// Задача: вивести лише парні числа, починаючи зі 100 і завершуючи 42
// for (let i = 100; i >= 42; i -= 2) {
//   console.log(i);
// }
// for (let i = 100; i % 2 == 0 && i >= 42; i--) {
//   console.log(i);
// }
// for (let i = 100; i >= 42; i--) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

const cars = [
  "Ferrari LaFerrari",
  "Dodge Challenger",
  "Dodge RAM TRX",
  "Tesla Model S Plaid",
  "Posrshce 911",
];
cars[5] = "Audi A5";
cars.push("Tesla Cybertruck");
// console.log(cars);

// const last = cars.pop();
// console.log('Останній:', last);

// cars.splice(3,1);

// for (let i = 0; i < cars.length; i++) {
//   console.log(i, cars[i]);
// }

// цикл for..of

for (const car of cars) {
  console.log(car);
}

// Поглиблена

// чому не ок використовувати var
function example() {
  for (let i = 0; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
  }
  console.log(i);
}
// example();

// Керування ходом циклу - break, continue
// Бажано не використовувати, якщо цикл можна написати без них

// Методи масивів
// cars.reverse();
// cars.sort();
// console.log(cars);

const nums = [42, 4.2, 142, 10, 15, 100, 0];
nums.sort((a, b) => b - a);
console.log(nums);

// Перебираючи методи масивів
// forEach - заміна циклу for
// map - робить масив також ж розміру виконавши функцію над кожним елементом
// filter - фільтрує
// reduce - скорочує до одного елемента
// https://navin-moorthy.github.io/blog/map-filter-reduce-animated/

let i = 42;
switch (i) {
  case 42:
    console.log("Ultimate answer");
    break;
  case 13:
    console.log("No lucky");
    break;
  default:
    console.log("Lucky");
}
