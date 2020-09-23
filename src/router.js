import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('./views/Dashboard.vue')
        },
        {
          path: '/dashboard/icons',
          name: 'icons',
          component: () => import('./views/Icons.vue')
        },
        {
          path: '/dashboard/profile',
          name: 'profile',
          component: () => import('./views/UserProfile.vue')
        },
        {
          path: '/dashboard/maps',
          name: 'maps',
          component: () => import('./views/Maps.vue')
        },
        {
          path: '/dashboard/tables',
          name: 'tables',
          component: () => import('./views/Tables.vue')
        },
        {
          path: '/dashboard/add-a-car',
          name: 'Add A Car',
          component: () => import('./views/Car/Car.vue')
        },
        {
          path: '/dashboard/car-list',
          name: 'Car List',
          component: () => import('./views/Car/CarList.vue')
        },
        {
          path: '/dashboard/owner-list',
          name: 'Owner List',
          component: () => import('./views/Owner/OwnerList.vue')
        },
        {
          path: '/dashboard/add-an-owner',
          name: 'Add An Owner',
          component: () => import('./views/Owner/Owner.vue')
        },
        {
          path: '/dashboard/driver-list',
          name: 'Driver List',
          component: () => import('./views/Driver/DriverList.vue')
        },
        {
          path: '/dashboard/add-a-driver',
          name: 'Add A Driver',
          component: () => import('./views/Driver/Driver.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/',
          name: 'login',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('./views/Register.vue')
        }
      ]
    }
  ]
})
