import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user'
import * as notification from '@/store/modules/notifications'
import * as owner from '@/store/modules/owner'
import * as car from '@/store/modules/car'
import * as driver from '@/store/modules/driver'
import * as sales from '@/store/modules/sales'
import * as payout from '@/store/modules/payout'
import * as statistics from '@/store/modules/statistics'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    owner,
    car,
    driver,
    sales,
    payout,
    notification,
    statistics,
  }
})
