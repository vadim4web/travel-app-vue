<template>
  <div>
    <nav id="nav">
      <p class="logo">The Vue Scholl Travel App</p>
      <ul class="nav-links">
        <li class="links">
          <router-link to="/">Home</router-link>
        </li>
        <li v-for="destination in destinations" :key="destination.name" class="links">
          <!-- <router-link
            :to="{
              name: 'DestinationDetails',
              params: { id: destination.id },
            }"
          >
            {{ destination.name }}</router-link
          > -->
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { slug: destination.slug },
            }"
          >
            {{ destination.name }}</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {
      // destinationId: this.$route.params.id,
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
#nav {
  display: flex;
}

#nav a {
  font-weight: 900;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.vue-school-active-class {
  color: #ab26ab;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
