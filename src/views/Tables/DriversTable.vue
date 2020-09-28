<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}} <router-link class="btn btn-primary" to="/dashboard/add-a-driver">ADD A NEW DRIVER</router-link>
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
          <th>Full Name</th>
          <th>email</th>
          <th>phoneNumber</th>
          <th>address</th>
          <th>driverStatus</th>
          <th>car status</th>
        </template>

        <template slot-scope="{row}">

          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>
              <template>
                <button @click.prevent="handleOwnerActions(row.id, `/dashboard/view-single-driver/${row.id}`)" class="dropdown-item">View Full Details</button>
                <button @click.prevent="handleOwnerActions(row.id, `/dashboard/edit-single-driver/${row.id}`)" class="dropdown-item">Edit Driver</button>
                <button @click="modals.attachACarModal = true" class="dropdown-item">Assign A Car</button>
                <button @click="modals.updateDriverStatusModal = true" class="dropdown-item">Change Driver Status</button>
              </template>
            </base-dropdown>
          </td>

          <th scope="fullname">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Car Image" :src="row.imageUrl">
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.fullName}}</span>
              </div>
            </div>
          </th>

          <td class="email">
            {{row.email}}
          </td>

          <td class="phone-number">
            {{row.phoneNumber}}
          </td>

          <td class="address">
            {{row.address}}
          </td>

          <td class="driverStatus">
            {{row.driverStatus}}
          </td>

          <td class="car">
            {{row.carAssignmentStatus}}
          </td>

        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination :total="total" ></base-pagination>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-md-4">
            <modal :show.sync="modals.attachACarModal"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <h4>Assign A Car To (Driver Name)</h4>
                        </div>
                        <form role="form">
                           <multiselect v-model="carForm.currentDriver" :options="allDriversList"></multiselect>
                            <div class="text-center">
                                <base-button type="success" class="my-4">Submit</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>

        <div class="col-md-4">
            <modal :show.sync="modals.updateDriverStatusModal"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <h4>Update (Driver Name) Status</h4>
                        </div>
                        <form role="form">
                           <multiselect v-model="carForm.currentDriver" :options="allDriversList"></multiselect>
                            <div class="text-center">
                                <base-button type="success" class="my-4">Submit</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>

      </div>
    </div>

  </div>
</template>
<script>

import { mapState } from 'vuex'
import store from '@/store/store'

  export default {
    name: 'projects-table',
    created() {
      if (store.state.driver.drivers.length < 1) {
        store.dispatch('driver/fetchDrivers').then(() =>{
            console.log(this.driver.drivers );
          });
      }
      if (store.state.car.cars.length < 1) {
        store.dispatch('car/fetchCars').then(() =>{
            console.log(this.car.cars );
          });
      }
    },
    methods: {

      handleOwnerActions(id, route){
        store.dispatch('driver/fetchDriverById', id).then((driver) =>{
          console.log("==== fetched ====", driver);
          this.$notify({
            type: 'success',
            title: `Full Details For ${driver.fullName}`,
          });
          this.$router.push({
            path: route,
          });
        });
      },//handleOwnerActions

    },
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        carForm: {
          currentDriver: '',
        },
        modals: {
          attachACarModal: false,
          updateDriverStatusModal: false,
        },
        total: 30,
      }
    },
    computed: {
      ...mapState(['driver', 'car']),
      tableData(){
        return this.driver.drivers;
      },
      allDriversList(){
        return this.car.cars
      },
    }
  }
</script>
<style>
</style>
