<template>
  <div id="app">
    <navbar></navbar>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
import { mapActions } from "vuex"

export default {
  components:{
    'navbar':NavComponent,
  },
  methods:{

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
  text-align: center;
  color: #2c3e50;
}

</style>
