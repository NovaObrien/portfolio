<template>
  <nav class="navbar navbar-expand-lg justify-content-center nav-item">
    <router-link :to="{ name: 'Home' }" class="nav-link">
      Home
    </router-link>
    <router-link :to="{ name: 'About' }" class="nav-link">
      About
    </router-link>
    <router-link :to="{ name: 'LinkedIn' }" class="nav-link">
      LinkedIn
    </router-link>
    <router-link :to="{ name: 'Github' }" class="nav-link">
      Github
    </router-link>
    <router-link :to="{ name: 'Email' }" class="nav-link">
      Email Me
    </router-link>
  </nav>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state

    }
  }
}
</script>

<style scoped>
.navbar{
  background-color: rgba(214, 212, 208, 0.281);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--success);
}
</style>
