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

        <sidebar-item :link="{name: 'Owners', icon: 'ni ni-circle-08 text-red', path: '/dashboard/owner-list'}"/>
        <sidebar-item :link="{name: 'Cars', icon: 'ni ni-delivery-fast text-warning', path: '/dashboard/car-list'}"/>
        <sidebar-item :link="{name: 'Drivers', icon: 'ni ni-bus-front-12 text-success', path: '/dashboard/driver-list'}"/>
        <sidebar-item :link="{name: 'Login', icon: 'ni ni-key-25', path: '/login'}"/>
        <sidebar-item :link="{name: 'Register', icon: 'ni ni-circle-08', path: '/register'}"/>
        <sidebar-item :link="{name: 'Icons', icon: 'ni ni-planet', path: '/dashboard/icons'}"/>
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
