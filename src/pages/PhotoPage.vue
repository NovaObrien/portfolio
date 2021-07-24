<template>
  <div class="photo-page container-fluid">
    <div class="row">
      <img src="../assets/img/photography/sandDune.jpg" alt="">
      <img src="../assets/img/photography/park1.jpg" alt="">
      <img src="../assets/img/photography/park2.jpg" alt="">
      <img src="../assets/img/photography/lake1.jpg" alt="">
      <img src="../assets/img/photography/ocean1.jpg" alt="">
      <img src="../assets/img/photography/space1.jpg" alt="">
      <img src="../assets/img/photography/space2.jpg" alt="">
      <img src="../assets/img/photography/space3.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoPage',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.container-fluid{
background-color: #eeffff;
background-image: linear-gradient(0deg, #eeffff 37%, #97D9E1 100%);

}

img {
  max-height: 25rem;
  max-width: 17rem;
  margin: 2rem;
  border-radius: 1rem;
}

@media(min-width: 481px){
  img{
    max-width: 27rem;
  }
}

@media(min-width: 750px){
  img{
    max-width: 50rem;
  }
}
</style>
