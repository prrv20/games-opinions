<template>
    <div class="container">
        <edit></edit>
    </div>
    
</template>

<script>
import EditOpinion from '@/views/EditOpinionView.vue'
export default {
    name: 'component-name',

    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'edit':EditOpinion
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>