<template>
  <div class="app-page container-fluid">
    <div class="row d-flex justify-content-center mt-5 " id="style">
      <h3 class="text-warning">
        Full-Stack Applications
      </h3>
    </div>
    <div class="row fullStack">
      <keepr-modal class=" ml-4 kan" />
      <crit-fail-modal class="kan" />
      <kan-ban-modal class="mr-4 kan" />
      <rpg-blog-modal class="ml-4 mr-3 kan" />
    </div>
    <div class="row d-flex justify-content-center mt-5" id="style">
      <h3 class="text-warning">
        Early Applications
      </h3>
    </div>
    <div class="row earlyApp">
      <farm-clicker-modal class="kan mar" />
      <ballon-pop-modal class=" kan mar" />
      <moody-kitten-modal class="kan mar" />
      <carpe-mare-modal class="kan mar" />
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
@media (max-width: 575.98px) {
  .mar{
   justify-content: center;
  }
}
.kan{
  margin-top: auto;
  margin-bottom: auto;
}
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

.fullStack{
  justify-content: center;

}
.earlyApp{
  justify-content: center;
}
</style>
