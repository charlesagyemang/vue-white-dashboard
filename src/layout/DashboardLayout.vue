<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Kehilla"
      title="kehilla"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-dark',
            path: '/dashboard'
          }"
        />

        <sidebar-item :link="{name: 'Owners', icon: 'ni ni-circle-08', path: '/dashboard/owner-list'}"/>
        <sidebar-item :link="{name: 'Drivers', icon: 'ni ni-bus-front-12', path: '/dashboard/driver-list'}"/>
        <sidebar-item :link="{name: 'Cars', icon: 'ni ni-delivery-fast', path: '/dashboard/car-list'}"/>
        <sidebar-item :link="{name: 'Sales', icon: 'ni ni-money-coins', path: '/dashboard/sales-list'}"/>
        <sidebar-item :link="{name: 'Expenses', icon: 'ni ni-credit-card', path: '/dashboard/expense-list'}"/>
        <sidebar-item :link="{name: 'Owner Payouts', icon: 'ni ni-ui-04', path: '/dashboard/pay-out-list'}"/>
        <sidebar-item :link="{name: 'Send Sms', icon: 'ni ni-send', path: '/dashboard/send-sms'}"/>
        <sidebar-item :link="{name: 'Model Checker', icon: 'ni ni-atom', path: '/dashboard/model-checker'}"/>
        <sidebar-item :link="{name: 'User Profile', icon: 'ni ni-single-02', path: '/dashboard/profile'}"/>



      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'primary' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
