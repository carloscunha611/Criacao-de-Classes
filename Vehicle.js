class Vehicle {
  constructor(brand, name, engine, power, zeroOneHundred, maxSpeed) {
    this.brand = `${brand}`
    this.name = `${name}`
    this.engine = `${engine}cm³`
    this.power = `${power}CV`
    this.zeroOneHundred = `${zeroOneHundred}s`
    this.maxSpeed = `${maxSpeed} Km/h`
    this.garage = ''
    this.price = ''
  }

  addToGarage(quantity) {
    this.garage = `${quantity}`
  }
  vehiclePrice(unit) {
    this.price = unit.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }
}

const vehicle1 = new Vehicle('Dodge', 'Viper', '8360', '612', '4,0', '360')
vehicle1.addToGarage(4)
vehicle1.vehiclePrice(1000000)
console.log(vehicle1)
