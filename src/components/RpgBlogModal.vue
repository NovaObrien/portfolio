<template>
  <div class="rpg-blog-modal">
    <!-- Button trigger modal -->
    <div class="d-flex flex-column align-items-center">
      <i class="fa fa-dice-d20 " data-toggle="modal" data-target="#rpgModal" id="dice"></i>
    </div>

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
  #dice{
  //    max-width: 35vw;
  // min-width: 30vw;
  color: rgb(226, 221, 221);
  font-size: 140px;
  // max-height: 35vh;
  // min-height: 30vh;
  }

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

.text{
   font-family: 'Nanum Myeongjo', serif;
}
</style>
