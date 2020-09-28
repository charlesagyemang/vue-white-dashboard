import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user'
import * as notification from '@/store/modules/notifications'
import * as owner from '@/store/modules/owner'
import * as car from '@/store/modules/car'
import * as driver from '@/store/modules/driver'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    owner,
    car,
    driver,
    notification,
  }
})
