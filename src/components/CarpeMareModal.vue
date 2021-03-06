<template>
  <div class="carpe-mare-modal">
    <div data-toggle="modal" data-target="#carpeModal">
      <div class="row carpe-logo">
        <i class=" fas fa-anchor fa-3x"></i>
        <h1>CarpeMare</h1>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade"
         id="carpeModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Carpe Mare
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img class="carpeMareSite" src="../assets/img/carpeMarePort.png" alt="">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="carpeCode">
              Navigate to Source Code
            </button>
            <button type="button" class="btn btn-success" @click="carpeApp">
              Save changes
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
  name: 'CarpeMareModal',
  setup() {
    return {
      carpeApp() {
        router.push({ name: 'CarpeMare' })
      },
      carpeCode() {
        router.push({ name: 'CarpeMareCode' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.carpe-logo{
  cursor: pointer;
}
.carpe-logo:hover{
  color: #636E72;
}
.carpeMareSite{
  max-height: 50vh;
  max-width: 55vw;
}
</style>
