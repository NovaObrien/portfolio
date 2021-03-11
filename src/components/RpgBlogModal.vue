<template>
  <div class="rpg-blog-modal">
    <!-- Button trigger modal -->
    <i class="fa fa-dice-d20 fa-9x" data-toggle="modal" data-target="#rpgModal" id="dice"></i>

    <!-- Modal -->
    <div class="modal fade"
         id="rpgModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-warning" id="exampleModalCenterTitle">
              Rpg-Blogger
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <img class="rpgSite" src="../assets/img/rpgBlogPort.png" alt="">
              </div>
              <div class="col text">
                <p>RPG-Blogger is a blog style app that was remade after my project at BoiseCodeWorks. Rebuilt with a working mongoDb/express backend and a revamped front end utilizing vuejs. This app was designed with the intent to be a mobile app so it may feel funky on your personal computer.</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="rpgCode">
              Navigate to Source Code
            </button>
            <button type="button" class="btn btn-warning" @click="rpgApp">
              Navigate to Site
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'RpgBlogModal',
  setup() {
    return {
      rpgApp() {
        router.push({ name: 'RpgBlog' })
      },
      rpgCode() {
        router.push({ name: 'RpgBlogCode' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
#dice:hover{
  cursor: pointer;
  color: grey;
}
.rpgSite{
  max-height: 45vh;
  max-width: 25vw;
}
@media (max-width: 575.98px) {
  .rpgSite{
    margin-left: 75px;
    max-width: 75vw;
  }
}
@media (max-width: 575.98px) {
  #dice{
    max-width: 25vw;
  }
}
.text{
   font-family: 'Nanum Myeongjo', serif;
}
</style>
