<template>
  <div class="shooting-stars">
    <canvas ref="canvas" width="1280" height="600"></canvas>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { shootingStarService } from '../services/ShootingStarService'
export default {
  name: 'ShootingStars',
  setup() {
    const canvas = ref(null)
    let ctx = ref(null)
    onMounted(() => {
      ctx = canvas.value.getContext('2d')

      shootingStarService.init(canvas, ctx)
      // shootingStarService.animate(ctx, canvas)
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
