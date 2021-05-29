import { AppState } from '../AppState'
import Particle from '../services/Particle'
const numberOfParticles = 3

class ShootingStarService {
  init(canvas) {
    AppState.particlesArrary = []
    for (let i = 0; i < numberOfParticles; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      AppState.particlesArrary.push(new Particle(x, y))
    }
  }

  animate(ctx, canvas) {
    for (let i = 0; i < AppState.particlesArrary.length; i++) {
      AppState.particlesArrary[i].update(canvas)
      AppState.particlesArrary[i].draw(ctx)
    }
    AppState.hue++
    requestAnimationFrame(this.animate)
  }
}
export const shootingStarService = new ShootingStarService()
