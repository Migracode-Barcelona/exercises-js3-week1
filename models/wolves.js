const Mammal = require(`./mammals`)

class Wolf extends Mammal {
  toString() {
    return 'wooo'
  }
}

module.exports = Wolf