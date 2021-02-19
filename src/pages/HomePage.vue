<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Keepr' }">
        <div class="d-flex flex-column align-items-center">
          <p class="px-1 rounded" id="logo">
            K
          </p>
        </div>
      </router-link>

      <img class="critFailLogo rounded-circle" src="../assets/img/DragonLogo.svg" alt="" @click="critFailApp">

      <img class="kanbanLogo rounded-circle" src="../assets/img/Bonzai.svg" alt="" @click="kanbanApp">
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
.critFailLogo{
  max-width: 50vh;
  min-width: 50vh;
  max-width: 50vh;
  min-width: 50vh;
}
.critFailLogo:hover{
  background-color: #636e72fb;

}
.kanbanLogo{
  max-width: 50vh;
  min-width: 50vh;
  max-width: 50vh;
  min-width: 50vh;
}
.kanbanLogo:hover{
  background-image: linear-gradient(180deg, red, yellow);
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
</style>
