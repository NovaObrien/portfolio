<template>
  <div class="about-page container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="d-flex justify-content-center mt-4 text-light">
          Nova O'Brien
        </h1>
        <h3 class="d-flex justify-content-center mb-5 text-warning">
          Portfolio
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <img class="portImg shadow-lg border border-warning rounded-circle" src="../assets/img/SeflPort2.png" alt="">
      </div>
    </div>
    <div class="row mt-5 d-flex justify-content-center text-light">
      <h2>Software Developer</h2>
    </div>
    <div class="row mt-5">
      <div class="col">
        <h5 class="text-warning">
          Skills
        </h5>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col text-light">
        <ul>
          <li>
            <p>
              VueJs, C# .Net, Javascript, HTML CSS, Actionscript
            </p>
          </li>
          <li>
            <p>
              Scrum project management
            </p>
          </li>
          <li>
            <p>
              Partner Programing, GitHub Source Control, State Machine
            </p>
          </li>
          <li>
            <p>
              Debugging, flow charts, diagrams, MVC, and MVP
            </p>
          </li>
          <li>
            <p>
              MySQL SQL, MongoDB
            </p>
          </li>
          <li>
            <p>
              Express, Mongoose, Nuget, Dapper, Node.js, Auth0, Sockets
            </p>
          </li>
          <li>
            <p>
              UI and UX
            </p>
          </li>
          <li>
            <p>
              Adobe Photoshop, Illustrator, and Animate
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <h5 class="text-warning">
          Currently Studying
        </h5>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col text-light">
        <ul>
          <li>
            <p>
              Computer Science
            </p>
          </li>
          <li>
            <p>
              Artificial Inteligence
            </p>
          </li>
          <li>
            <p>
              Differential Calculus
            </p>
          </li>
          <li>
            <p>
              Linear Algebra
            </p>
          </li>
          <li>
            <p>
              C++
            </p>
          </li>
          <li>
            <p>
              Python
            </p>
          </li>
          <li>
            <p>
              Lazy Loading in C#
            </p>
          </li>
        <!-- <li>
          <p>
          </p>
        </li> -->
        </ul>
      </div>
    </div>

    <div class="row mt-5 d-flex justify-content-center">
      <img class="famImg rounded" src="../assets/img/Family3.jpg" alt="">
      <div class="col-2">
        <h5 class="text-warning">
          My Family
        </h5>
        <p class="text-light">
          My other half is this wonderful human.
        </p>
      </div>
      <img class="angelImg rounded" src="../assets/img/AngelsLanding.jpg" alt="">
      <div class="col">
        <h5 class="text-warning">
          Adventure & Exploration
        </h5>
        <p class="text-light">
          Some of my fondest memories are trecking into mountains, long drives with good music, and discovering new sights. (one of my fonder memories was climbing Angels Landing here in Zion with my old man)
        </p>
      </div>
    </div>
    <div class="row d-flex justify-content-center my-5">
      <div class="col">
        <h5 class="text-warning">
          CodeWorks
        </h5>
        <p class="text-light">
          A highlight of the notorius 2020 year was spending the end of it with these guys.. I met some incredible minds and some amazing people, and discovered what it means to be a software developer.
        </p>
      </div>
      <img class="famImg rounded" src="../assets/img/codeworks.jpg" alt="">
    </div>
    <div class="row d-flex justify-content-center">
      <router-link :to="{name: 'Apps'}">
        <p>Check out the Apps Page</p>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutPage'
}
</script>
<style lang="scss" scoped>
// ==========>
// Mobile
// =========
  h1{
    font-family: 'Limelight', cursive;
  }
 p{
    font-size: 12px;
  }

.portImg{
height: 50vh;
}

.angelImg{
  max-height: 35vh;
}
 .famImg{
    max-height: 45vw;
  }

  // =========
  // Tablets
  // ==========
 @media(min-width: 481px){
.container-fluid{
padding-left: 15vw;
padding-right: 15vw;
}

}
// =================
// Small screeens Laptops
// ==================
 @media(min-width: 769px){
.famImg{
  max-height: 35vh;
}
}
// ===========
// Desktops
// ===========
 @media(min-width: 1024px){

}
// ============
// extra large screens
// ==============
 @media(min-width: 1200px){
// .feature-img{
//   width: 35vw;
//   height: 40vh;
//   border-radius: 19px;
// }
 }
</style>
