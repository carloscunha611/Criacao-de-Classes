class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
    this.discountPrice = 0
  }

  addToStock(quantity) {
    this.inStock += quantity
  }

  calculateDiscount(discount) {
    this.discountPrice = this.price * ((100 - discount) / 100)
  }
}

const mouse = new Product('Mouse gamer', 'sem fio, RGB, 7 botões', 50)
mouse.addToStock(100)
mouse.calculateDiscount(5)
console.log(mouse)
