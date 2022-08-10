<template>
    <div class="container my-3">
        <div class="row" v-if="opinions.length>0">
        <h1>Administrando la Lista de Opiniones</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Persona</th>
                    <th scope="col">Juego</th>
                    <th scope="col">Opinión</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(op,index) in opinions" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{op.persona}}</td>
                    <td>{{op.juego}}</td>
                    <td>{{op.comentario}}</td>
                    <td>
                        <button type="button" class="btn btn-danger" @click="removeOpinion(index)"><i class="fa-solid fa-trash-can"></i></button>
                        <button type="button"  class="btn btn-info text-light" >
                            <router-link :to="'/edit/' + index">
                            <i class="fa-solid fa-pen-to-square" to="/edit"></i>
                            </router-link>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="alert alert-danger" role="alert" v-else>
            No existen Opiniones por Administrar
        </div>
    </div>
</template>

<script>
//import OpinionesComponent from '@/components/OpinionesComponent.vue'
import {mapActions, mapState} from "vuex"
export default {
    name: 'admin-component',
    
    data: function(){
        return {
            //opinionSelected:'',
        }
    },
    computed: {
        ...mapState(["opinions"]),
    },
    methods: {
        ...mapActions(['opinion']),
        removeOpinion:function(index){
            this.opinions.splice(index, 1)
        },
        
    },
    // watch: {},
    components: {
        //'opinion':OpinionesComponent
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>