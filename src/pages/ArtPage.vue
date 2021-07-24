<template>
  <div class="art-page container-fluid">
    <div class="row ml-4 py-5">
      <div class="col-8 col-md-4 border-bottom">
        <h1 class="text-dark  text-font">
          Recent Art
        </h1>
      </div>
    </div>
    <div class="row ml-2">
      <div class="col">
        <img src="../assets/img/SeflPort2.png" alt="" class="img rounded">
        <img src="../assets/img/DragonLogoNew.svg" alt="" class="dragonImg rounded">
        <img src="../assets/img/Bonzai.svg" alt="" class="dragonImg rounded">
        <img src="../assets/img/SpaceMan.png" alt="" class="img rounded">
        <img src="../assets/img/AlienGuy.png" alt="" class="img rounded">
        <img src="../assets/img/WarriorGal.png" alt="" class="img rounded">
      </div>
    </div>
    <div class="row ml-4 mt-5 py-5">
      <div class="col-8 col-md-4 border-bottom">
        <h1 class="text-dark text-font">
          2018 Art
        </h1>
      </div>
    </div>
    <div class="row ml-2">
      <div class="col">
        <img src="../assets/img/SpaceAdd.png" alt="" class="shadow rounded">
        <img src="../assets/img/MountainMan.png" alt="" class="shadow rounded">
        <img src="../assets/img/abstract.jpg" alt="" class="shadow rounded">
        <img src="../assets/img/Guitar.png" alt="" class="shadow rounded">
        <img src="../assets/img/FamGift.jpg" alt="" class="shadow rounded">
        <img src="../assets/img/IslandGuy.jpg" alt="" class="shadow rounded">
        <img src="../assets/img/HairLady.png" alt="" class="shadow rounded">
        <img src="../assets/img/emergence.png" alt="" class="shadow rounded">
        <img src="../assets/img/bunny.png" alt="" class="shadow rounded">
        <img src="../assets/img/Scary.png" alt="" class="shadow rounded">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtPage',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.container-fluid{
background-color: #8d8d8d;
background-image: linear-gradient(19deg, #8d8d8d 0%, #DDD6F3 100%);

}

img {
margin: 5rem;
max-height: 40vh;
  border-radius: 50%;
  margin: 1rem;
}
.dragonImg{
height: 40vh;
}
.text-font{
  font-family: 'Nanum Myeongjo', serif;
}
</style>
