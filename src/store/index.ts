import {createStore} from 'vuex'

export default createStore({
  state: {
    testnum: 0
  },
  mutations: {
    Addnum(state:any) {
      state.testnum ++
      console.log(state.testnum, 'state.testnum');
      
    }
  },
  actions: {
    add({commit}:any) {
      commit('Addnum')
      
    }
  },
  modules: {
  }
})
