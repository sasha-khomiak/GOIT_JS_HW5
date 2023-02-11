// Виконай рефакторинг класу Car таким чином, щоб він приймав
// один параметр - об'єкт з властивостями brand, model і price.
// Деструктуризуй об'єкт в сигнатурі(підписі) конструктора.

//ТЕСТИ

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 }) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

class Car {
  // Change code below this line
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
//   { brand: "Audi", model: "Q3", price: 36000 }

console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
//  { brand: "BMW", model: "X5", price: 58900 }

console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
//  { brand: "Nissan", model: "Murano", price: 31700 }
