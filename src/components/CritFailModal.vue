<template>
  <div class="crit-fail-modal">
    <!-- Button trigger modal -->
    <div data-toggle="modal" data-target="#critModal">
      <img class="critFailLogo rounded-circle" src="../assets/img/DragonLogo.svg" alt="">
    </div>

    <!-- Modal -->
    <div class="modal fade"
         id="critModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Critical Failure
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img class="critSite" src="../assets/img/CritFailPort.png" alt="">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Navigate to Source Code
            </button>
            <button type="button" class="btn btn-primary">
              Navigate to Site
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CritFailModal',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.critFailLogo{
  max-width: 35vh;
  min-width: 35vh;
  max-height: 35vh;
  min-height: 35vh;
  cursor: pointer;
}
.critFailLogo:hover{
  opacity: 0.85;

}
.critSite{
  max-height: 25vh;
  max-width: 25vw;
}
</style>
