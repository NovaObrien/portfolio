<template>
  <div class="shooting-stars">
    <canvas ref="canvas" width="560" height="360"></canvas>
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
      // canvas = ref('canvas1')
      ctx = canvas.value.getContext('2d')

      shootingStarService.init(canvas)
      shootingStarService.update(ctx, canvas)
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
#canvas1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
