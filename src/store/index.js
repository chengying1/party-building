import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    token:'',
    userInfo:{
      username:'',
      header:''
    }
  },
  mutations:{
    'CHANGE_userInfo'(state, payload){
      state.userInfo = payload
    },
    'CHANGE_token'(state, payload){
      state.token = payload
    },
    del_token(state) {
      state.token = ''
      sessionStorage.removeItem('token')
    }

  },
  actions:{},
  plugins:[createPersistedState({
    storage: {
      getItem: key => sessionStorage.getItem(key),
      setItem: (key, value) =>
        sessionStorage.setItem(key, value),
      removeItem: key => sessionStorage.removeItem(key),
    },
  })]
})

export default store
