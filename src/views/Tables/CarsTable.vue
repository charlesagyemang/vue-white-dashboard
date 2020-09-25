<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
          {{title}}  <router-link to="/dashboard/add-a-car" class="btn btn-primary">ADD A NEW CAR</router-link>
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

          <th>Actions</th>
          <th>Model</th>
          <th>Status</th>
          <th>Cost</th>
          <th>OP City</th>
          <th>Owner</th>
          <th>Completion</th>
        </template>

        <template slot-scope="{row}">

          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" href="#">View Full Details</a>
                <a class="dropdown-item" href="#">Edit Car</a>
                <a class="dropdown-item" href="#">Add Insurance</a>
                <a class="dropdown-item" href="#">Add Road Worthy</a>
                <a class="dropdown-item" href="#">Activate Car</a>
                <a class="dropdown-item" href="#">Change Car Status</a>
              </template>
            </base-dropdown>
          </td>

          <th scope="row">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Car Image" :src="row.imageUrl">
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.modelName}} {{row.modelYear}}</span>
              </div>
            </div>
          </th>
          <td class="status">
            <badge class="badge-dot mr-4" :type="getStatusColor(row.status)">
              <i :class="`bg-${getStatusColor(row.status)}`"></i>
              <span class="status">{{row.status}}</span>
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

          <td class="owner">
            Name: {{row.carOwner.name}}<br>
            Email: {{row.carOwner.email}}<br>
            City: {{row.carOwner.city}}<br>
          </td>

          <td class="current-driver">
            Name: {{row.currentDriver.name}}<br>
            Location: {{row.currentDriver.email}}<br>
            City: {{row.currentDriver.city}}<br>
          </td>



        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination :total="total" ></base-pagination>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        total: 30,
        tableData: [
          {
            imageUrl: '/img/cars/picanto2.jpg',
            modelName: 'KIA Morning',
            status: 'BOUGHT',
            modelYear: '2009',
            costOfAquiring: '$3,000',
            carWorkingCity: 'Accra',
            carOwner: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
            currentDriver: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
            //currentDriver
          },
          {
            imageUrl: '/img/cars/dump-truck.jpg',
            modelName: 'Dump Track',
            status: 'SHIPPED',
            modelYear: '2020',
            costOfAquiring: '$3,000',
            carWorkingCity: 'Accra',
            carOwner: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
            currentDriver: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            modelName: 'KIA Morning Lx',
            status: 'SETTING_UP',
            modelYear: '2009',
            costOfAquiring: '$3,000',
            carWorkingCity: 'Accra',
            carOwner: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
            currentDriver: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
          },
          {
            imageUrl: '/img/cars/dump-truck.jpg',
            modelName: 'Dump Track',
            status: 'PROBATION',
            modelYear: '2020',
            costOfAquiring: '$3,000',
            carWorkingCity: 'Accra',
            carOwner: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
            currentDriver: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            modelName: 'KIA Morning Lx',
            status: 'WORKING',
            modelYear: '2010',
            costOfAquiring: '$3,000',
            carWorkingCity: 'Accra',
            carOwner: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
            currentDriver: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
          },
          {
            imageUrl: '/img/cars/dump-truck.jpg',
            modelName: 'Dump Track',
            status: 'SOLD',
            modelYear: '2020',
            costOfAquiring: '$3,000',
            carWorkingCity: 'Accra',
            carOwner: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
            currentDriver: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            modelName: 'KIA Morning Lx',
            status: 'GIVEN_OUT',
            modelYear: '2010',
            costOfAquiring: '$3,000',
            carWorkingCity: 'Accra',
            carOwner: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergia',
            },
            currentDriver: {
              name: 'name',
              email: 'email@email.com',
              city: 'Goergiaaaaa',
            },
          },
        ],
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
  }
</script>
<style>
</style>
