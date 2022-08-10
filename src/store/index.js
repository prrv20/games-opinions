import Vue from 'vue'
import Vuex from 'vuex'
import games from './games.json'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: games,
    opinions:[],
    
  },
  getters: {
    
  },
  mutations: {
    addOpinion(state, opinion){
      state.opinions.push(opinion)
    },
    EDIT_OPINION(state, opinion) {
      state.opinions[opinion.i].persona = opinion.persona;
      state.opinions[opinion.i].comentario = opinion.comentario;
    },
  },
  actions:{
    opinion({commit},opinion) {
      commit("addOpinion", opinion)
    }
  },
  // modules: {
  // },
  plugins: [createPersistedState()]

})
