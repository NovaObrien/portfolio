<template>
  <div class="moody-kitten-modal">
    <!-- Button trigger modal -->
    <div data-toggle="modal" data-target="#moodyModal">
      <img class="moodyKitten" src="../assets/img/moody-logo.png" alt="">
    </div>

    <!-- Modal -->
    <div class="modal fade"
         id="moodyModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-warning" id="exampleModalCenterTitle">
              Moody Kittens
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row d-flex justify-content-center">
              <img class="moodySite rounded" src="../assets/img/MoodyPort.png" alt="">
            </div>
            <div class="row">
              <div class="col text my-3">
                <p>Moody Kittens was a scholarship app for BoiseCodeWorks.</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="moodyCode">
              Navigate to Source Code
            </button>
            <button type="button" class="btn btn-warning" @click="moodyApp">
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
  name: 'MoodyKittenModal',
  setup() {
    return {
      moodyApp() {
        router.push({ name: 'MoodyKitten' })
      },
      moodyCode() {
        router.push({ name: 'MoodyKittenCode' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
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
@media (max-width: 575.98px) {
  .moodyKitten{
    max-width: 45vw;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
.moodySite{
  max-height: 35vh;
  max-width: 35vw;
}
@media (max-width: 575.98px) {
  .moodySite{
    max-width: 75vw;
  }
}
.text{
   font-family: 'Nanum Myeongjo', serif;
}
</style>
