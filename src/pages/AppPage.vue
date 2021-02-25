<template>
  <div class="app-page container-fluid">
    <div class="row d-flex justify-content-center mt-5 " id="style">
      <h3>Full-Stack Applications</h3>
    </div>
    <div class="row">
      <div class="col-2">
      </div>
      <div class="col d-flex align-items-center justify-content-between">
        <keepr-modal />
        <crit-fail-modal />
        <kan-ban-modal />
        <rpg-blog-modal />
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row d-flex justify-content-center mt-5" id="style">
      <h3>Early Applications</h3>
    </div>
    <div class="row d-flex align-items-center justify-content-center">
      <farm-clicker-modal />
      <ballon-pop-modal />
      <moody-kitten-modal />
      <carpe-mare-modal />
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import FarmClickerModal from '../components/FarmClickerModal.vue'
import router from '../router'
export default {
  components: { FarmClickerModal },
  name: 'AppPage',

  setup() {
    return {
      critFailApp() {
        router.push({ name: 'CritFail' })
      },
      kanbanApp() {
        router.push({ name: 'Kanban' })
      },
      balloonPopApp() {
        router.push({ name: 'Balloon' })
      },
      moodyKittenApp() {
        router.push({ name: 'MoodyKitten' })
      },
      farmClickerApp() {
        router.push({ name: 'FarmClicker' })
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

#logo{
  color: #000;
  font-family: 'Audiowide', cursive;
  font-size: 100px;
  border: 12px solid;
}
#logo:hover{
  color: #636E72;
  border-color: #000;
}
#style{
    color: #636E72;
  font-family: 'Nanum Myeongjo', serif;
  font-size: 100px;
}
</style>
