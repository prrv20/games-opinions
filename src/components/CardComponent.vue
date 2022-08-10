<template>
  <div class="container" >
    <div class="row py-5">
      <div class="col-12 col-sm-6 col-lg-4 mb-4 game" >
          <div class="card" style="width: 18rem">
            <img :src="game.background_image" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title text-start">{{game.name}}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-start">Rating: {{ game.rating }}</li>
              <li class="list-group-item text-start">Released: {{ game.released }}</li>
              <li class="list-group-item text-start">Updated: {{ game.updated }}</li>
            </ul>
            <div class="card-body">
              <button type="button" class="btn btn-primary" @click="opinar(game.name)" 
              data-bs-toggle="modal" :data-bs-target="`#exampleModal${index}`">Opinar</button>
            </div>
          </div>
             
      </div>
    </div>
    <opinion :juego="juegoSelected" :index="index"></opinion>
  </div>
  
</template>

<script>
import OpinionesComponent from '@/components/OpinionesComponent.vue'

export default {
  name: "card-component",
  props: ["game", "index"],
  data: function () {
    return {
      juegoSelected:'',
    };
  },
  computed: {
    
  },
  methods: {
   opinar(juego){
      this.juegoSelected = juego;
   }
  },
  // watch: {},
  components: {
    'opinion':OpinionesComponent
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>