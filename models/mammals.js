// Object > Mamifero > Dog > Puppy

// CLASE PADRE
class Mamifero {
  constructor() {
    this.legs = 4
  }
  toString() {
    return 'soy un mamifero'
  }
}

module.exports = Mamifero