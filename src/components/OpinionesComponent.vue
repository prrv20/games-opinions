<template>
    <div class="container">
      <div class="modal fade" :id="`exampleModal${index}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Nombre del Juego: {{juego}}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="name" class="col-form-label">Nombre:</label>
                  <input type="text" class="form-control" id="name" v-model="form.persona">
                </div>
                <div class="mb-3">
                  <label for="opiniones-text" class="col-form-label">Opiniones:</label>
                  <textarea class="form-control" id="opiniones-text" v-model="form.comentario"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="saveOpinion">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    name: 'opiniones-component',
    props: {
      juego:{
        type:String
      },
      index:{
        type:Number
      }
    },
    data: function(){
        return {
          form:{
            persona:"",
            juego:"",
            comentario:"",
          }
        }
    },
    // computed: {},
    methods: {
      ...mapActions(["opinion"]),
      saveOpinion(){
        this.form.juego = this.juego
        this.opinion(this.form)    
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>