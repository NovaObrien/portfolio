import { AppState } from '../AppState'
import Particle from '../services/Particle'
const numberOfParticles = 3

class ShootingStarService {
  init(canvas) {
    AppState.particlesArrary = []
    for (let i = 0; i < numberOfParticles; i++) {
      const x = Math.random() * canvas.value.width
      const y = Math.random() * canvas.value.height
      AppState.particlesArrary.push(new Particle(x, y))
    }
  }

  animate(ctx, canvas) {
    ctx.value.fillStyle = 'rgba(0, 0, 0, 0.3)'
    ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
    for (let i = 0; i < AppState.particlesArrary.length; i++) {
      AppState.particlesArrary[i].update(canvas)
      AppState.particlesArrary[i].draw(ctx)
    }
    AppState.hue++
    requestAnimationFrame(this.animate)
  }

  update(canvas) {
    if (this.y > canvas.height) {
      this.y = Math.random() * canvas.height * 1.3
      this.weight = Math.random() * 20 + 1
      this.x = Math.random() * canvas.width * 1.3
    } else if (this.y < Math.random() * this.y * 1.1 - 50) {
      this.y = Math.random() * canvas.height * 1.3
      this.weight = Math.random() * 20 + 1
      this.x = Math.random() * canvas.width * 1.3
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
export const shootingStarService = new ShootingStarService()
