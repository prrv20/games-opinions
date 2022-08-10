<template>
    <div class="container">
        <H1>Lista de Opiniones</H1>
        <div class="accordion accordion-flush" id="accordionExample" v-if="opinions.length>0">
            <div class="accordion-item" v-for="(op,i) in opinions" :key="i">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        aria-expanded="true"
                        :data-bs-target="'#collapse' + i" >
                    Opinión Creada por: {{op.persona}} Para el Juego: {{op.juego}}
                </button>
                </h2>
                <div :id="'collapse'+i" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body text-start">
                    <strong>Opinión:</strong> {{op.comentario}}
                </div>
                </div>
            </div>    
        </div>
        <div class="alert alert-danger" role="alert" v-else>
            No existen Opiniones por Administrar
        </div>
        
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
export default {
    name: 'lista-component',
    props: ["game", "index"],
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(["opinions"]),
    },
    methods: {
       ...mapActions(['opinion'])
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