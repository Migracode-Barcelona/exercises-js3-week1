const Mammal = require(`./mammals`)

class Dog extends Mammal {
  constructor(hairColor, skinColor) { // OVERWRITE
    super()
    this.skinColor = skinColor
  }
  barks() {
    return 'bark bark'
  }
}

module.exports = Dog