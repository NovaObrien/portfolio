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
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="keeprApp">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarpeMareModal',
  setup() {
    return {}
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
</style>
