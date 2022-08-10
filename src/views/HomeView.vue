<template>
  <div class="home">
    <h1>{{titulo}}</h1>
    <!-- <card></card> -->
    <div class="container text-center">
      <div class="row py-5 games">
        <div class="col-12 col-sm-6 col-md-4 mb-4 game" v-for="(game, i) in games" :key="i">
          <card :game= "game" :index="i"/>
        </div>
      </div>
    </div>
    <!-- <opiniones></opiniones> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import CardComponent from '@/components/CardComponent.vue'
import OpinionesComponent from '@/components/OpinionesComponent.vue'

import { mapState } from "vuex"

export default {
  name: 'HomeView',
  data: function () {
    return {
      titulo:'Lista de Juegos Disponibles',
    };
  },
  components: {
    'card':CardComponent,
    'opiniones':OpinionesComponent,
    
  },
  computed:{
   ...mapState(['games']),
  },
}
</script>
<style scoped>
  h1{
    margin-top: 1em;
  }
</style>
