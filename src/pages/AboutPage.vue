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
    <div class="row mt-5">
      <div class="col-2"></div>
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
      <div class="col-1"></div>
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
              Calculous
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
        </ul>
      </div>
      <div class="col-2"></div>
    </div>

    <div class="row mt-5">
      <div class="col-2">
      </div>
      <div class="col">
        <div class="row">
          <img class="famImg rounded" src="../assets/img/Family3.jpg" alt="">
          <div class="col-2">
            <h5 class="text-warning">
              My Family
            </h5>
            <p>
              The other half to my chaos is this flower of sunshine! Wouldn't be who I am without her support in life.
            </p>
          </div>
          <div class="col"></div>
          <img class="famImg rounded" src="../assets/img/AngelsLanding.jpg" alt="">
          <div class="col-3">
            <h5 class="text-warning">
              Adventure & Exploration
            </h5>
            <p>
              Some of my fondest memories are with others while trecking into mountains, long drives with good music, and/or finding the perfect view to sit and relax together with. (one of my fonder memories was here with my Father clibming Angels Landing.)
            </p>
          </div>
        </div>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row my-5">
      <div class="col-3">
      </div>
      <div class="col">
        <div class="row">
          <div class="col-3">
            <h5 class="text-warning">
              CodeWorks
            </h5>
            <p>
              A highlight of the notorius 2020 year was spending the end of it with these guys.. I met some incredible minds of amazing people and learned how to take my skills into the feild
            </p>
          </div>
          <img class="famImg rounded" src="../assets/img/codeworks.jpg" alt="">
        </div>
      </div>
      <div class="col-2"></div>
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
</style>
