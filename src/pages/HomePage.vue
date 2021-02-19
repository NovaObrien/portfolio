<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <img src="../assets/img/DragonLogo.svg" alt="" @click="critFailApp">
      <img src="../assets/img/Bonzai.svg" alt="" @click="kanbanApp">
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'Home',

  setup() {
    return {
      critFailApp() {
        router.push({ name: 'CritFail' })
      },
      kanbanApp() {
        router.push({ name: 'Kanban' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
}
img{
  width: 50vh;
}
</style>
