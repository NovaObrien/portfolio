import { AppState } from '../AppState'
import Particle from '../services/Particle'
const numberOfParticles = 3

class ShootingStarService {
  init(canvas, ctx) {
    AppState.particlesArrary = []
    for (let i = 0; i < numberOfParticles; i++) {
      const x = Math.random() * canvas.value.width
      const y = Math.random() * canvas.value.height
      AppState.particlesArrary.push(new Particle(x, y))
    }
    this.animate(ctx, canvas)
  }

  animate(ctx, canvas) {
    for (let i = 0; i < AppState.particlesArrary.length; i++) {
      AppState.particlesArrary[i].update(600, 1280)
      AppState.particlesArrary[i].draw(ctx)
    }
    AppState.hue++
    requestAnimationFrame(this.animate)
  }
}
export const shootingStarService = new ShootingStarService()
