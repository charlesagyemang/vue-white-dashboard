<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">

        <template slot="columns">
          <th>View Full Details</th>
          <th>Model</th>
          <th>Status</th>
          <th>Cost</th>
          <th>OP City</th>
          <th>Driver</th>
         </template>

        <template slot-scope="{row}">
          <td class="more-actions">
            <a class="btn btn-primary" :href="'/owners/dashboard/view-single-car/'+ row.id">View Full Details</a>
          </td>

          <th scope="row">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Car Image" src="/img/cars/picanto2.jpg">
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.modelName}} {{row.modelYear}}</span>
              </div>
            </div>
          </th>
          <td class="status">
            <badge class="badge-dot mr-4" :type="getStatusColor(row.status)">
              <i :class="`bg-${getStatusColor(row.status)}`"></i>
              <span class="status">{{row.carStatus}}</span>
            </badge>
          </td>
          <td class="cost-of-aquiring">
            Aquiring: {{row.costOfAquiring}}<br>
            Shipping: {{row.costOfAquiring}}<br>
            Clearing: {{row.costOfAquiring}}<br>
          </td>

          <td class="op-city">
            {{row.carWorkingCity}}
          </td>

          <td class="current-driver">
           {{row.driver.fullName}}
          </td>
        </template>
      </base-table>
    </div>

  </div>
</template>
<script>
 import {mapState} from 'vuex';
  export default {
    beforeCreate() {
      this.$store.dispatch('owner/fetchOwnerByIdExternal')
    },
    name: 'owners-cars-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        total: 30,
      }
    },
    methods: {
      getStatusColor(status) {
        const statusColors = {
          'BOUGHT': 'dark',
          'SHIPPED': 'danger',
          'SETTING_UP': 'info',
          'PROBATION': 'primary',
          'WORKING': 'success',
          'SOLD': 'danger',
          'GIVEN_OUT': 'success'
        }
        return statusColors[`${status}`]
      },
    },
    computed: {
      ...mapState(['owner']),
      tableData () {
          return this.owner.ownerCars
      },
    },
  }
</script>
<style>
</style>
