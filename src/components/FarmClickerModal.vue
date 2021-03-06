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
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Farming clicker
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <img class="farmClickerSite border" src="../assets/img/FarmClickerPort.png" alt="">
              <p>Farming Clicker App was an early project (which is currently being remade) that displayed basic coding methods</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="keeprApp">
              Navigate to App
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FarmClickerModal',
  setup() {
    return {}
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
  max-height: 25vh;
max-width: 25vw;
}
</style>
