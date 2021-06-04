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
            <h5 class="modal-title text-warning" id="exampleModalCenterTitle">
              Kanbandoit
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row d-flex justify-content-center">
              <img class="kanSite rounded" src="../assets/img/KanBanPort.png" alt="">
            </div>
            <div class="row text my-3">
              <div class="col">
                <p>
                  Kanbandoit, a kanban style app, was created with one of my peers at BoiseCodeWorks using Scrum for project management. Utilizing a vuejs front end and a mongoDb/express backend this was my first major comprehension of a full-stack application.
                </p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="kanCode">
              Navigate to Source Code
            </button>
            <button type="button" class="btn btn-warning" @click="kanApp">
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
  name: 'KanBanModal',
  setup() {
    return {
      kanApp() {
        router.push({ name: 'Kanban' })
      },
      kanCode() {
        router.push({ name: 'KanbanCode' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.kanbanLogo{
 max-width: 22vw;
  min-width: 22vw;
  max-height: 22vh;
  min-height: 22vh;
  cursor: pointer;
}
// @media (max-width: 575.98px) {
//   .kanbanLogo{
//     min-width: 35vw;
//     max-height: 35vh;
//     max-width: 35vw;
//   }
// }
.kanbanLogo:hover{
  // background-image: linear-gradient(180deg, yellow, red );
  background-repeat: no-repeat;
  opacity: 0.85;

}
.kanSite{
  max-height: 35vh;
  max-width: 35vw;
}
@media (max-width: 575.98px) {
  .kanSite{
    max-width: 75vw;
  }
}
.text{
   font-family: 'Nanum Myeongjo', serif;
}
</style>
