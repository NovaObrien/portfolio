<template>
  <div class="about-page container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="d-flex justify-content-center">
          Hey, I'm Nova!
        </h1>
        <h3 class="d-flex justify-content-center mb-5 text-warning">
          Welcome to my about page!
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <img class="portImg" src="../assets/img/SeflPort2.png" alt="">
      </div>
    </div>
    <div class="row mt-5 d-flex justify-content-center">
      <h2>Software Developer</h2>
    </div>
    <div class="row mt-5 mx-auto">
      <div class="col">
        <h5 class="text-warning">
          What I've learned thus far
        </h5>
        <ul>
          <li>
            <p>
              VueJs, C# .Net, Javascript, HTML CSS, Actionscript
            </p>
          </li>
          <li>
            <p>
              Scrum project management, timeline development, and execution of set goals
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
              MySQL SQL, MongoDB, Express, Mongoose, Nuget, dapper
            </p>
          </li>
          <li>
            <p>
              Node.js, Auth0, Sockets
            </p>
          </li>
          <li>
            <p>
              UE4 Blueprints, Zbrush, Graphic Design, Animation, StoryTelling, UI, and UX
            </p>
          </li>
          <li>
            <p>
              Adobe Photoshop, Illustrator, and Animate
            </p>
          </li>
        </ul>
      </div>
      <div class="col">
        <h5 class="text-warning">
          I always strive to discover new skills! I'm currently studying...
        </h5>
        <ul>
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
        </ul>
      </div>

      <div class="row mt-5 d-flex justify-content-center">
        <img class="famImg rounded" src="../assets/img/Family3.jpg" alt="">
        <div class="col-2">
          <h5 class="text-warning">
            My Family
          </h5>
          <p>
            My other half is this wonderful human.
          </p>
        </div>
        <img class="angelImg rounded" src="../assets/img/AngelsLanding.jpg" alt="">
        <div class="col">
          <h5 class="text-warning">
            Adventure & Exploration
          </h5>
          <p>
            Some of my fondest memories are trecking into mountains, long drives with good music, and discovering new sights. (one of my fonder memories was climbing Angels Landing here in Zion with my old man)
          </p>
        </div>
      </div>
      <div class="row d-flex justify-content-center my-5">
        <div class="col">
          <h5 class="text-warning">
            CodeWorks
          </h5>
          <p>
            A highlight of the notorius 2020 year was spending the end of it with these guys.. I met some incredible minds and some amazing people, and discovered what it means to be a software developer.
          </p>
        </div>
        <img class="famImg rounded" src="../assets/img/codeworks.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
<style lang="scss" scoped>
.portImg{
height: 50vh;
}
.famImg{
  max-height: 35vh;
}
.angelImg{
  max-height: 35vh;
}
@media (max-width: 575.98px) {
  .famImg{
    max-height: 45vw;
  }
}
@media (max-width: 575.98px) {
  p{
    font-size: 12px;
  }
}
</style>
