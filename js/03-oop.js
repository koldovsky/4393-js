// Об'єктний літерал
const dodgeChallenger = {
  make: "Dodge",
  model: "Challenger",
  price: 100000,
  beep: function () {
    console.log(this.make + " " + this.model + " beep!");
  },
};

// console.log(dodgeChallenger["make"]);
console.log(dodgeChallenger.make);
console.log(dodgeChallenger.model);
dodgeChallenger.model += " Turbo";
console.log(dodgeChallenger.model);

dodgeChallenger.beep();

console.log(dodgeChallenger);

// Клас
class Car {
  constructor(make, model, price) {
    // let this = {};
    this.make = make;
    this.model = model;
    this.price = price;
    // return this;
  }
  beep() {
    console.log(this.make + " " + this.model + " beep!");
  }
}

const fiatPunto = new Car("Fiat", "Punto", 15000);
fiatPunto.beep();
console.log(fiatPunto);

// JSON - JavaScript Object Notation
const carJson = JSON.stringify(dodgeChallenger);
console.log(carJson);

const car = JSON.parse(carJson);
car.beep = function () {
  console.log(this.make + " " + this.model + " beep!");
};
console.log(car);
car.beep();

// Поглиблена частина

// Цикл для об'єктів
for (const key in car) {
  console.log(key, car[key]);
}

// Наслідування, приватні члени класу

class ElectricCar extends Car {
  #battery;
  constructor(make, model, price, battery) {
    super(make, model, price);
    this.#battery = battery;
  }
  charge() {
    console.log("Charging... " + this.#battery);
  }
}

const teslaY = new ElectricCar('Tesla', 'Y', 50000, 85);
console.log(teslaY);
teslaY.beep();
teslaY.charge();

// Копіювання об'єктів

// const teslaS = Object.assign({}, teslaY);
const teslaS = {...teslaY};
teslaS.model = 'S';

console.log('Викликаємо teslaS');
console.log(teslaS);
console.log('Викликаємо teslaY.beep()');
console.log(teslaY);

