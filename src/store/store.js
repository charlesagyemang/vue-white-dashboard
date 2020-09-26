import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user'
import * as notification from '@/store/modules/notifications'
import * as owner from '@/store/modules/owner'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    owner,
    notification,
  }
})
