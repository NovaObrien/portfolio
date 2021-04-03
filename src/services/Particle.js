export default class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 10 + 1
    this.weight = Math.random() * 1 + 1
    this.directionX = -10
  }
}
