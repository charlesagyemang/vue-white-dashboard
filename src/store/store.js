import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user'
import * as notification from '@/store/modules/notifications'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    notification,
  }
})
