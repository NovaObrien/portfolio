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
            <h5 class="modal-title text-warning" id="exampleModalCenterTitle">
              Carpe Mare
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row d-flex justify-content-center">
              <img class="carpeMareSite rounded " src="../assets/img/carpeMarePort.png" alt="">
            </div>
            <div class="row">
              <div class="col text my-3">
                <p>
                  Carpe Mare was my first app at BoiseCodeWorks only utilizing basic html and css. Is mobile friendly.
                </p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="carpeCode">
              Navigate to Source Code
            </button>
            <button type="button" class="btn btn-warning" @click="carpeApp">
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
  max-height: 35vh;
  max-width: 35vw;
}
.text{
   font-family: 'Nanum Myeongjo', serif;
}
</style>
