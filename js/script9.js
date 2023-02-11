// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта,
// який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price
// в об'єкта, який буде його викликати на newPrice.

//ТЕСТИ

// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line

//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const car1 = new Car({ brand: "Ford", model: "EDGE", price: 20000 });

console.log("car1", car1);

console.log("price", car1.getPrice());

car1.changePrice(25000);

console.log("price", car1.getPrice());
