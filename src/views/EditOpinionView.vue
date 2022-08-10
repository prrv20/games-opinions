<template>
    <div class="container">
        <H1 v-model="titleJuego">Editando la Opinión de : {{titleJuego}}</H1>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" v-model="newName">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Comentario</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="newOpinion"></textarea>
        </div>
        <div class="mb-3">
            <router-link to="/admin">
            <button type="button" class="btn btn-primary me-3"><i class="fa-solid fa-arrow-right-from-bracket"></i>Regresar</button> 
            </router-link>
            
            <button type="button" class="btn btn-success" @click="edit"><i class="fa-solid fa-floppy-disk"></i>Guardar</button>
        </div>                  
    </div>
</template>

<script>

import { mapMutations, mapState } from "vuex";
import {mapActions} from "vuex"

export default {
    name: 'edit-component',
    props: {
      
    },
    data: function(){
        return {
            juego:'',
            persona:'',
            comentario:'',
        }
    },
    computed: {
        ...mapState(["opinions"]),
        miOpinion() {
        return this.$route.params.id;
        },
        titleJuego:{
            get(){
                return this.opinions[this.miOpinion].juego
            }
        },
        newName: {
            get() {
                return this.opinions[this.miOpinion].persona;
            },
            set(value) {
                this.persona = value;
            },
        },
        newOpinion: {
            get() {
                return this.opinions[this.miOpinion].comentario;
            },
            set(value) {
                this.comentario = value;
            },
        },
    },
    methods: {
        ...mapActions(["opinion"]),
        ...mapMutations(["EDIT_OPINION"]),
        edit() {
            this.EDIT_OPINION({
                i: this.$route.params.id,
                persona: this.persona,
                comentario: this.comentario,
            });
            alert("Opinión modificada con éxito");
            this.$router.push("/admin");
        },
    },
    // watch: {},
    components: {
        
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>