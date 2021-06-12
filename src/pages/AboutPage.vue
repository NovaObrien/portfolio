<template>
  <div class="about-page container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="d-flex justify-content-center mt-4 text-light">
          Nova O'Brien
        </h1>
        <h2 class="d-flex justify-content-center mb-5 mt-3 text-warning">
          Portfolio
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <img class="portImg shadow-lg border border-warning rounded-circle" src="../assets/img/SeflPort2.png" alt="">
      </div>
    </div>
    <div class="row  m-5 p-2 d-flex justify-content-center text-light text-font border-bottom border-dark text-center">
      <h2>Software Developer</h2>
    </div>

    <div class="row mt-4">
      <div class="col-md-6 col-12 mt-3">
        <div class="row">
          <div class="col">
            <h4 class="text-warning text-font border-bottom">
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
            <h4 class="text-warning text-font border-bottom">
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

    <div class="row mt-5">
      <div class="col">
        <h4 class="text-warning text-font border-bottom">
          Freelancing
        </h4>
      </div>
    </div>
    <div class="row d-flex mt-4">
      <div class="col-12 ">
        <div class="row">
          <div class="col text-light">
            <p>
              Working with a client, I modernized their website for mobile first, as well as making their lives easier when creating listings. These were part of the accepted figma drafts (not final) design for the client
            </p>
            <img class="freelanceImg border border-warning rounded m-3" src="../assets/img/Freelance.png" alt="">
            <img class="freelanceImg border border-warning rounded m-3" src="../assets/img/FreelanceListing.png" alt="">
          </div>
        </div>
      </div>

      <div class="col-12 mt-3 ">
        <div class="row mb-5">
          <div class="col text-light mt-2">
            <p>The clients old website design on mobile:</p>
            <img class="freelanceImg border border-warning rounded m-3" src="../assets/img/FreelanceOldSite.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center text-light text-font border-bottom border-dark m-5 p-2">
      <h2>About Me</h2>
    </div>

    <div class="row mt-5 d-flex justify-content-center">
      <div class="col-6 mt-3">
        <img class="famImg rounded border border-warning" src="../assets/img/Family3.jpg" alt="">
      </div>
      <div class="col-6 mt-3">
        <h5 class="text-warning text-font border-bottom">
          My Family
        </h5>
        <p class="text-light p-3">
          My other half is this wonderful human. (We also have a small little rat dog, and a large number of plants that we consider family)
        </p>
      </div>

      <div class="col-6 mt-5">
        <h5 class="text-warning text-font border-bottom">
          Adventure & Exploration
        </h5>
        <p class="text-light p-3">
          Some of my fondest memories are trecking into mountains, long drives with good music, and discovering new sights. (Climbing Angels Landing in Zion with my old man)
        </p>
      </div>
      <div class="col-6 mt-5">
        <img class="angelImg rounded border border-warning" src="../assets/img/AngelsLanding.jpg" alt="">
      </div>
    </div>
    <div class="row d-flex justify-content-center my-5">
      <div class="col-12">
        <h5 class="text-warning border-bottom text-font">
          CodeWorks
        </h5>
        <p class="text-light p-3">
          A highlight of the notorius 2020 year was spending the end of it with these guys.. I met some incredible minds and some amazing people, and discovered what it means to be a software developer.
        </p>
      </div>
      <img class="codeImg rounded border border-warning" src="../assets/img/codeworks.jpg" alt="">
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
  name: 'AboutPage',
  setup() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
// ==========>
// Mobile
// =========
.text-font{
   font-family: 'Nanum Myeongjo', serif;
    letter-spacing: 4px;
   padding-bottom: 10px;
}
  h1{
    font-family: 'Limelight', cursive;
    letter-spacing: 2px;
  }
 p{
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 25px;
  }

.portImg{
height: 50vh;
}

.freelanceImg{
  max-height: 60vh;
}

 .famImg{
    max-height: 20vh;
    max-width: 47vw;
    margin-top: 3rem;
  }
.angelImg{
  max-height: 32vh;
    margin-top: 5rem;

}
  .codeImg{
    max-height: 27vh;
  }

  // =========
  // Tablets
  // ==========
 @media(min-width: 481px){
    p{
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 25px;
  }
.container-fluid{
margin-left: 12vw;
margin-right: 12vw;
// padding-left: 3em;
// padding-right: 3em;

}

}
// =================
// Small screeens Laptops
// ==================
 @media(min-width: 768px){
.famImg{
  max-height: 22vh;
  max-width: 33vw;
}
p{
    font-size: 21px;
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
     margin-left: 18vw;
     margin-right: 18vw;

   }
    p{
    font-size: 17px;
  }

 }

 @media(min-width: 1800px){
   .container-fluid{
     margin-left: 25vw;
     margin-right: 25vw;

   }
     p{
    font-size: 20px;
  }

 }
</style>
