<template>
  <div class="app-page container-fluid">
    <div class="row d-flex justify-content-center mt-5 " id="style">
      <h3>Full-Stack Applications</h3>
    </div>
    <div class="row d-flex align-items-center justify-content-between">
      <div class="col-3">
      </div>
      <keepr-modal />
      <img class="critFailLogo rounded-circle" src="../assets/img/DragonLogo.svg" alt="" @click="critFailApp">

      <img class="kanbanLogo rounded-circle" src="../assets/img/Bonzai.svg" alt="" @click="kanbanApp">
      <rpg-blog-modal />
      <div class="col-3"></div>
    </div>
    <div class="row d-flex justify-content-center mt-5" id="style">
      <h3>Early Applications</h3>
    </div>
    <div class="row d-flex align-items-center justify-content-center">
      <img class="farmClicker" src="../assets/img/pixil-frame-0.png" alt="" @click="farmClickerApp">
      <img class="balloonPop" src="../assets/img/balloon-pop-logo.png" alt="" @click="balloonPopApp">
      <img class="moodyKitten" src="../assets/img/moody-logo.png" alt="" @click="moodyKittenApp">
      <div>
        <div class="row carpe-logo">
          <i class=" fas fa-anchor fa-3x"></i>
          <h1>CarpeMare</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KeeprModal from '../components/KeeprModal.vue'
import RpgBlogModal from '../components/RpgBlogModal.vue'
import router from '../router'
export default {
  components: { KeeprModal, RpgBlogModal },
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
.critFailLogo{
  max-width: 35vh;
  min-width: 35vh;
  max-height: 35vh;
  min-height: 35vh;
  cursor: pointer;
}
.critFailLogo:hover{
  opacity: 0.85;

}
.kanbanLogo{
  max-width: 25vh;
  min-width: 25vh;
  max-height: 25vh;
  min-height: 25vh;
  cursor: pointer;
}
.kanbanLogo:hover{
  // background-image: linear-gradient(180deg, yellow, red );
  background-repeat: no-repeat;
  opacity: 0.85;

}
.farmClicker{
 max-width: 20vh;
  min-width: 20vh;
  max-height: 20vh;
  min-height: 10vh;
  cursor: pointer;
}
.farmClicker:hover{
  opacity: 0.50;
}
.balloonPop{
 max-width: 40vh;
  min-width: 40vh;
  max-height: 10vh;
  min-height: 10vh;
  cursor: pointer;
}
.balloonPop:hover{
  opacity: 0.50;
}
.moodyKitten{
 max-width: 20vh;
  min-width: 10vh;
  max-height: 25vh;
  min-height: 10vh;
  cursor: pointer;
}
.moodyKitten:hover{
  opacity: 0.50;
}
.carpe-logo{
  cursor: pointer;
}
.carpe-logo:hover{
  color: #636E72;
}
#logo{
  color: #636E72;
  font-family: 'Audiowide', cursive;
  font-size: 100px;
  border: 12px solid;
}
#logo:hover{
  color: #000;
  border-color: #000;
}
#style{
    color: #636E72;
  font-family: 'Nanum Myeongjo', serif;
  font-size: 100px;
}
</style>
