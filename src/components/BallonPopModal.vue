<template>
  <div class="ballon-pop-modal">
    <div data-toggle="modal" data-target="#balloonPop">
      <img class="balloonPop" src="../assets/img/balloon-pop-logo.png" alt="">
    </div>

    <!-- Modal -->
    <div class="modal fade"
         id="balloonPop"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Balloon Pop
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row border">
              <img class="balloonSite" src="../assets/img/Balloon.png" alt="">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Navigate to Source Code
            </button>
            <button type="button" class="btn btn-primary" @click="balloonApp">
              Navigate to App
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
  name: 'BallonPopModal',
  setup() {
    return {
      balloonApp() {
        router.push({ name: 'Balloon' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
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
.balloonSite{
max-height: 25vh;
max-width: 15vw;
}
</style>
