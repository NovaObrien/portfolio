<template>
  <div class="shooting-stars">
    <canvas id="myCanvas" width="1280" height="600"></canvas>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { shootingStarService } from '../services/ShootingStarService'
export default {
  name: 'ShootingStars',
  setup() {
    let canvas = null
    let ctx = ref(null)
    onMounted(() => {
      canvas = document.getElementById('myCanvas')
      ctx = canvas.getContext('2d')

      shootingStarService.init(canvas)
      shootingStarService.animate(ctx, canvas)
    })
    return {
      canvas,
      ctx
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#canvas1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
