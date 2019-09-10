import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'


Vue.use(Vuex)

let api = Axios.create({
  baseURL: 'https://api.nasa.gov/'
})

let urlParams = 'planetary/apod?api_key=sctU4yoVTyXPhsfGNmSQZE3f8gpAP71maD1azfIC&date='

export default new Vuex.Store({
  state: {
    nasaimgs: []
  },
  mutations: {
    setImage(state, nasaimgs) {
      state.nasaimgs = nasaimgs
    }

  },
  actions: {
    async getImage({ commit, dispatch }, query) {
      try {
        let res = await api.get(urlParams + query)
        commit('setImage', res.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
