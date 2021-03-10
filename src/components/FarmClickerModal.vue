<template>
  <div class="farm-clicker-modal">
    <div data-toggle="modal" data-target="#farmModal">
      <img class="farmClicker" src="../assets/img/pixil-frame-0.png" alt="">
    </div>

    <!-- Modal -->
    <div class="modal fade"
         id="farmModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-warning" id="exampleModalCenterTitle">
              Farming clicker
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row d-flex justify-content-center">
              <img class="farmClickerSite rounded" src="../assets/img/FarmClickerPort.png" alt="">
            </div>
            <div class="row">
              <div class="col text">
                <p>Farming Clicker was an early project (which is currently being remade) that displayed basic coding methods and function usage.</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="farmCode">
              Navigate to Source Code
            </button>
            <button type="button" class="btn btn-warning" @click="farmApp">
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
  name: 'FarmClickerModal',
  setup() {
    return {
      farmApp() {
        router.push({ name: 'FarmClicker' })
      },
      farmCode() {
        router.push({ name: 'FarmClickerCode' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
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

.farmClickerSite{
  max-height: 35vh;
  max-width: 35vw;
}
.text{
   font-family: 'Nanum Myeongjo', serif;
}
</style>
