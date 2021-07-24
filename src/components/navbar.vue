<template>
  <nav class="navbar navbar-expand-lg justify-content-center nav-item">
    <router-link :to="{ name: 'About' }" class="nav-link">
      Nova
    </router-link>
    <router-link :to="{ name: 'Apps' }" class="nav-link">
      Apps
    </router-link>
    <router-link :to="{ name: 'Art' }" class="nav-link">
      Art
    </router-link>
    <router-link :to="{ name: 'Photo' }" class="nav-link">
      Photo
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
  background-color: rgba(214, 212, 208, 0.24);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  font-size: 10px;
  text-transform: uppercase;
  padding: .4rem;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--warning);
}

@media (min-width: 475px) {
  .nav-link{
    font-size: 12px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

}

@media (min-width: 800px) {
  .nav-link{
    font-size: 17px;
  }

}

@media (min-width: 1200px) {
  .nav-link{
    font-size: 21px;
  }

}
</style>
