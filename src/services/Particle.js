import { AppState } from '../AppState'

export default class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 10 + 1
    this.weight = Math.random() * 1 + 1
    this.directionX = -10
  }

  update(height, width) {
    if (this.y > height) {
      this.y = Math.random() * height * 1.3
      this.weight = Math.random() * 20 + 1
      this.x = Math.random() * width * 1.3
    } else if (this.y < Math.random() * this.y * 1.1 - 50) {
      this.y = Math.random() * height * 1.3
      this.weight = Math.random() * 20 + 1
      this.x = Math.random() * width * 1.3
    }
    this.weight += 0.05
    if (this.size > 1) {
      this.size -= 0.001
    }
    this.y += this.weight
    this.x += this.directionX
  }

  draw(ctx) {
    ctx.fillStyle = 'hsl(' + AppState.hue + ', 100%, 50%)'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }
}
