<template>
  <div class="keepr-modal">
    <!-- Button trigger modal -->
    <div data-toggle="modal" data-target="#keeprModal">
      <div class="d-flex flex-column align-items-center">
        <p class="px-1 rounded" id="logo">
          K
        </p>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade"
         id="keeprModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-warning" id="exampleModalCenterTitle">
              Keepr
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row d-flex justify-content-center">
              <img class="keeprSite rounded" src="../assets/img/KeepPort.png" alt="">
            </div>
            <div class="row text my-3">
              <div class="col">
                <p>
                  Keepr is an instagram style application that utilizes a C# backend, mySQL database and a vuejs frontend. This project was my final at BoiseCodeWorks. (You may have to refresh the page due to modal bug)
                </p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="keeprCode">
              Navigate to Source Code
            </button>
            <button type="button" class="btn btn-warning" @click="keeprApp">
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
  name: 'KeeprModal',
  setup() {
    return {
      keeprCode() {
        router.push({ name: 'KeeprCode' })
      },
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
  color: rgb(139, 192, 159);
  font-family: 'Audiowide', cursive;

     font-size: 100px;
    border: 12px solid;
  cursor: pointer;
}
#logo:hover{
  color: #636E72;
}
// @media (min-width: 800.98px) {
//   #logo{
//  font-size: 100px;
//   border: 15px solid;

//   }
// }
.keeprSite{
  max-height: 35vh;
  max-width: 35vw;
}
@media (max-width: 575.98px) {
  .keeprSite{
    max-width: 75vw;
  }
}
.text{
   font-family: 'Nanum Myeongjo', serif;
}
</style>
