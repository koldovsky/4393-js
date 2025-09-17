// Змінні
// const - змінна, значення якої не змінюється (стала, константа)
// let - змінна, значення якої ми обов'язково змінемо
// var - схоже до попереднього, але застаріло, не використовуємо
// const messageForUser = "Привіт, JavaScript!";
// alert(messageForUser);
// const anotherMessageForUser = 'Радий тебе бачити!';
// alert(anotherMessageForUser);

// Типи даних
const userAge = Number(prompt('Введіть ваш вік'));
console.log('Тип змінної userAge', typeof userAge);
console.log('Ваш вік', userAge);

const nextAge = add(userAge,  1);
console.log('Наступний вік', nextAge);

// Які є типи даних в JS?
// string - текст
// number - числа, 42, 42.42, -42, 42e42, Infinity, -Infinity, NaN
// оператори для чисел: +, -, *, /, % (залишок від ділення)
// boolean - логічний, true, false
// undefined - пусто і нічого не було
// null - пусто, але могло щось бути
// Object - об'єкт

// Не будемо вивчати на цьому курсі
// Symbol - унікальні ідентифікатор
// BigInt - великі цілі числа

// розгалудження
if (userAge >= 18) { // > < <= >= !== === == !== || &&
    console.log('Повнолітній');
} else {
    console.log('Неповнолітній');
}


// Функції
function add(a, b) {
    return a + b;
}