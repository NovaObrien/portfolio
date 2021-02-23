<template>
  <div class="keepr-modal">
    <!-- Button trigger modal -->
    <div data-toggle="modal" data-target="#exampleModalCenter">
      <div class="d-flex flex-column align-items-center">
        <p class="px-1 rounded" id="logo">
          K
        </p>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade"
         id="exampleModalCenter"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Modal title
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
import router from '../router'
export default {
  name: 'KeeprModal',
  setup() {
    return {
      keeprApp() {
        router.push({ name: 'Keepr' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
#logo{
  color: #636E72;
  font-family: 'Audiowide', cursive;
  font-size: 100px;
  border: 12px solid;
  cursor: pointer;
}
#logo:hover{
  color: #000;
  border-color: #000;
}
</style>
