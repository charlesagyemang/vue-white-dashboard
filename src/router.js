import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import ExternalLayout from '@/layout/ExternalLayout'
import OwnerDashboardLayout from '@/layout/OwnerDashboardLayout'
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
          component: () => import('./views/Car/AddANewCar.vue')
        },
        {
          path: '/dashboard/car-list',
          name: 'Car List',
          component: () => import('./views/Car/CarList.vue')
        },
        {
          path: '/dashboard/edit-single-car/:id',
          name: 'Edit Single Car',
          component: () => import('./views/Car/EditSingleCar.vue')
        },
        {
          path: '/dashboard/view-single-car/:id',
          name: 'View Single Car',
          component: () => import('./views/Car/SingleCarView.vue')
        },
        {
          path: '/dashboard/owner-list',
          name: 'Owner List',
          component: () => import('./views/Owner/OwnerList.vue')
        },
        {
          path: '/dashboard/add-an-owner',
          name: 'Add New Owner',
          component: () => import('./views/Owner/AddNewOwner.vue')
        },
        {
          path: '/dashboard/view-owner-details/:id',
          name: 'Owner Details',
          component: () => import('./views/Owner/SingleOwnerView.vue')
        },
        {
          path: '/dashboard/edit-single-owner/:id',
          name: 'Edit Owner Details',
          component: () => import('./views/Owner/EditSingleOwner.vue')
        },

        {
          path: '/dashboard/driver-list',
          name: 'Driver List',
          component: () => import('./views/Driver/DriverList.vue')
        },
        {
          path: '/dashboard/add-a-driver',
          name: 'Add A Driver',
          component: () => import('./views/Driver/AddNewDriver.vue')
        },
        {
          path: '/dashboard/view-single-driver/:id',
          name: 'Single Driver Details',
          component: () => import('./views/Driver/SingleDriverView.vue')
        },
        {
          path: '/dashboard/edit-single-driver/:id',
          name: 'Edit Single Driver',
          component: () => import('./views/Driver/EditSingleDriver.vue')
        },


        {
          path: '/dashboard/sales-list',
          name: 'All Sales',
          component: () => import('./views/Sales/SalesList.vue')
        },
        {
          path: '/dashboard/add-a-sales',
          name: 'Add Sales',
          component: () => import('./views/Sales/AddNewSales.vue')
        },
        {
          path: '/dashboard/view-single-sales/:id',
          name: 'Single Sales Details',
          component: () => import('./views/Sales/SingleSalesView.vue')
        },
        {
          path: '/dashboard/edit-single-sales/:id',
          name: 'Edit Single Sales',
          component: () => import('./views/Sales/EditSingleSales.vue')
        },

        {
          path: '/dashboard/send-sms',
          name: 'Send SMS',
          component: () => import('./views/SendSms.vue')
        },

        {
          path: '/dashboard/expense-list',
          name: 'Expenses',
          component: () => import('./views/Expenses/ExpenseList.vue')
        },

        {
          path: '/dashboard/pay-out-list',
          name: 'Owner Payout List',
          component: () => import('./views/Payout/PayoutList.vue')
        },

        {
          path: '/dashboard/model-checker',
          name: 'Model Checker',
          component: () => import('./views/ModelChecker.vue')
        },
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('./views/Register.vue')
        },
      ]
    },

    {
      path: '/',
      component: ExternalLayout,
      children: [
        {
          path: '/driver/temp',
          name: 'driver-temp',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/driver/details/:id',
          name: 'toulouse',
          component: () => import('./views/Externals/ExternalDriverProfile.vue')
        },
      ]
    },

    {
      path: '/',
      component: OwnerDashboardLayout,
      children: [
        {
          path: '/owner/dashboard',
          name: 'owner-dashboard',
          component: () => import('./views/Externals/OwnerDashboard.vue')
        },
        {
          path: '/owners/dashboard/cars',
          name: 'owner-cars',
          component: () => import('./views/Externals/OwnerCarList.vue')
        },
        {
          path: '/owners/dashboard/view-single-car/:id',
          name: 'view-owner-single-car',
          component: () => import('./views/Car/OwnerSingleCarView.vue'),
        },
        {
          path: '/owners/dashboard/profile',
          name: 'owner-profile',
          component: () => import('./views/Externals/OwnerProfile.vue')
        },
        {
          path: '/owners/dashboard/drivers',
          name: 'owner-drivers',
          component: () => import('./views/Externals/OwnerDriverList.vue')
        },
      ]
    },
    // {
    //   path: '/chat-with-us',
    //   name: 'chat',
    //   component: () => import('./views/Contact.vue')
    // },


  ]
})
