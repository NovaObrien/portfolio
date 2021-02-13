<template>
  <div class="contact container-fluid">
    <div class="row d-flex justify-content-center">
      <img class="rounded-circle" src="../assets/Family3.jpg" alt="" />
      <div class="col">
        <div class="row">
          <a href="mailto:tannerkobrien@gmail.com">
            Email
          </a>
        </div>
        <div class="row">
          <a href="http://www.linkedin.com/in/nova-obrien">LinkedIn</a>
        </div>
        <div class="row">
          <a href="http://www.linkedin.com/in/nova-obrien">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  setup() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped>
img {
  max-height: 10vh;
  max-width: 15vh;
}
</style>
