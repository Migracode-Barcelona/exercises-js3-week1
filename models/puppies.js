const Dog = require(`./dogs`)

class Puppy extends Dog {
  constructor(hairColor, skinColor) {
    super(hairColor, skinColor)
    this.historial = 'historial'
    this.comidaFavorita = 'bananas'
    this.nombreEnLatin = 'nombreEnLatin'
  }
}

module.exports = Puppy