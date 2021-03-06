<template>
  <div class="kan-ban-modal">
    <!-- Button trigger modal -->
    <div data-toggle="modal" data-target="#kanbanModal">
      <img class="kanbanLogo rounded-circle" src="../assets/img/Bonzai.svg" alt="">
    </div>

    <!-- Modal -->
    <div class="modal fade"
         id="kanbanModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Kanbandoit
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img class="kanSite" src="../assets/img/KanBanPort.png" alt="">
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
  name: 'KanBanModal',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.kanbanLogo{
  max-width: 25vh;
  min-width: 25vh;
  max-height: 25vh;
  min-height: 25vh;
  cursor: pointer;
}
.kanbanLogo:hover{
  // background-image: linear-gradient(180deg, yellow, red );
  background-repeat: no-repeat;
  opacity: 0.85;

}
.kanSite{
  max-height: 25vh;
  max-width: 25vw;
}
</style>
