// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand,
// model і price, значеннями яких повинні бути передані аргументи
// під час його виклику з оператором new.

//ТЕСТИ

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// class Car {
//   // Change code below this line
//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

console.log(new Car("Audi", "Q3", 36000));
//  { brand: "Audi", model: "Q3", price: 36000 }

console.log(new Car("BMW", "X5", 58900));
// { brand: "BMW", model: "X5", price: 58900 }

console.log(new Car("Nissan", "Murano", 31700));
// { brand: "Nissan", model: "Murano", price: 31700 }
