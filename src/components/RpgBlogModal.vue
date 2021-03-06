<template>
  <div class="rpg-blog-modal">
    <!-- Button trigger modal -->
    <i class="fa fa-dice-d20 fa-9x" data-toggle="modal" data-target="#rpgModal" id="dice"></i>

    <!-- Modal -->
    <div class="modal fade"
         id="rpgModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Rpg-Blogger
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img class="rpgSite" src="../assets/img/rpgBlogPort.png" alt="">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
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
  name: 'RpgBlogModal',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
#dice:hover{
  cursor: pointer;
  color: grey;
}
.rpgSite{
  max-height: 45vh;
  max-width: 25vw;
}
</style>
