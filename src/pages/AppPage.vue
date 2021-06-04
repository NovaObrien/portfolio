<template>
  <div class="app-page container-fluid">
    <div class="row d-flex justify-content-center mt-5 border-bottom" id="style">
      <h3 class="text-warning">
        Full-Stack Applications
      </h3>
    </div>
    <div class="row py-5 mb-5 fullStack">
      <div class="col">
        <rpg-blog-modal class="kan" />
      </div>
      <div class="col">
        <keepr-modal class="kan" />
      </div>
      <div class="col">
        <crit-fail-modal class="kan" />
      </div>
      <div class="col">
        <kan-ban-modal class="kan" />
      </div>
    </div>
    <div class="row d-flex justify-content-center border-bottom  my-t" id="style">
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
.container-fluid{
  padding-left: 5vw;
  padding-right: 5vw;
}
 @media(min-width: 481px){
.container-fluid{
padding-left: 15vw;
padding-right: 15vw;
}
 }
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
  margin: 1rem;
}

.fullStack{
  display: flex;
  justify-content: center;

}
.earlyApp{
  justify-content: center;
}
</style>
