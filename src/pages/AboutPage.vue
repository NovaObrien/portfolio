<template>
  <div class="about-page container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="d-flex justify-content-center mt-4 text-light">
          Nova O'Brien
        </h1>
        <h2 class="d-flex justify-content-center mb-5 mt-4 text-warning">
          Portfolio
        </h2>
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
      <div class="col-md-6 col-12 mt-3">
        <div class="row">
          <div class="col">
            <h4 class="text-warning">
              Skills
            </h4>
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
      </div>

      <div class="col-md-6 col-12 mt-3">
        <div class="row">
          <div class="col">
            <h4 class="text-warning">
              Currently Studying
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col text-light mt-2">
            <ul>
              <li>
                <p>
                  Computer Science and Artficial Intelligence
                </p>
              </li>
              <li>
                <p>
                  Differential Calculus and Linear Algebra
                </p>
              </li>
              <li>
                <p>
                  Python and C++
                </p>
              </li>
              <li>
                <p>
                  Lazy Loading in C#
                </p>
              </li>
              <li>
                <p>
                  Basic Cryptography with batch algorithms
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4 d-flex justify-content-center">
      <div class="col-6 mt-3">
        <img class="famImg rounded" src="../assets/img/Family3.jpg" alt="">
      </div>
      <div class="col-6 mt-3">
        <h5 class="text-warning">
          My Family
        </h5>
        <p class="text-light">
          My other half is this wonderful human.
        </p>
      </div>

      <div class="col-6 mt-4">
        <h5 class="text-warning">
          Adventure & Exploration
        </h5>
        <p class="text-light">
          Some of my fondest memories are trecking into mountains, long drives with good music, and discovering new sights. (one of my fonder memories was climbing Angels Landing here in Zion with my old man)
        </p>
      </div>
      <div class="col-6 mt-5">
        <img class="angelImg rounded" src="../assets/img/AngelsLanding.jpg" alt="">
      </div>
    </div>
    <div class="row d-flex justify-content-center my-5">
      <div class="col-12">
        <h5 class="text-warning">
          CodeWorks
        </h5>
        <p class="text-light">
          A highlight of the notorius 2020 year was spending the end of it with these guys.. I met some incredible minds and some amazing people, and discovered what it means to be a software developer.
        </p>
      </div>
      <img class="codeImg rounded" src="../assets/img/codeworks.jpg" alt="">
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
    font-size: 14px;
  }

.portImg{
height: 50vh;
}

.angelImg{
  max-height: 32vh;
}
 .famImg{
    max-height: 20vh;
  }
  .codeImg{
    max-height: 27vh;
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
  max-height: 22vh;
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
   .container-fluid{
     padding-left: 25vw;
     padding-right: 25vw;
   }
    p{
    font-size: 18px;
  }

 }
</style>
