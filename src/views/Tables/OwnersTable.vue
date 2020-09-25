<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}   <router-link to="/dashboard/add-an-owner" class="btn btn-primary">ADD A NEW OWNER</router-link>
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
          <th>username</th>
          <th>email</th>
          <th>phoneNumber</th>
          <th>address</th>
          <th>country</th>
          <th>Cars</th>
        </template>

        <template slot-scope="{row}">

          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <router-link class="dropdown-item" to="/dashboard/view-owner-details">View Full Details</router-link>
                <router-link class="dropdown-item" to="/dashboard/edit-single-owner">Edit Owner</router-link>
                <button @click="modals.modal3 = true" class="dropdown-item" href="#">Attach A Car</button>
                <button @click="modals.modal2 = true" class="dropdown-item" href="#">Update Owner Status</button>
              </template>
            </base-dropdown>
          </td>

          <th scope="username">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Car Image" :src="row.imageUrl">
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.username}}</span>
              </div>
            </div>
          </th>

          <td class="address">
            {{row.address}}
          </td>


          <td class="email">
            {{row.email}}
          </td>

          <td class="phone-number">
            {{row.phoneNumber}}
          </td>

          <td class="country">
            {{row.country}}
          </td>

          <td class="cars">
            {{row.cars.length}}
          </td>

        </template>

      </base-table>
    </div>
    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination :total="total" ></base-pagination>
    </div>


    <div class="row">
        <div class="col-md-4">
            <modal :show.sync="modals.modal3"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <small>Select A Car To Attach To Name Here</small>
                        </div>
                        <form role="form">
                           <multiselect v-model="carForm.currentDriver" :options="allDriversList"></multiselect>
                            <div class="text-center">
                                <base-button type="primary" class="my-4">Attach Car To Name Here</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>
        <div class="col-md-4">
            <modal :show.sync="modals.modal2"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <small>Update Owner Status</small>
                        </div>
                        <form role="form">
                           <multiselect v-model="carForm.currentDriver" :options="allDriversList"></multiselect>
                            <div class="text-center">
                                <base-button type="success" class="my-4">Update Status</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>
    </div>
  </div>
</template>
<script>
import Modal from '@/components/Modal'
  export default {
    components: {
        Modal,
    },
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        modals:{
          modal1: false,
          modal2: false,
          modal3: false,
        },
        carForm: {
          currentDriver: ''
        },
        allDriversList: [
          'Driver 1',
          'Driver 2',
          'Driver 3',
        ],
        total: 30,
        tableData: [
          {
            imageUrl: '/img/cars/picanto2.jpg',
            username: 'username',
            email: 'username@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            cars: [
              'car one',
              'car two'
            ]
            //currentDriver
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            username: 'username',
            email: 'username@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            cars: [
              'car one',
              'car two'
            ]
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            username: 'username',
            email: 'username@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            cars: [
              'car one',
              'car two'
            ]
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            username: 'username',
            email: 'username@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            cars: [
              'car one',
              'car two'
            ]
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            username: 'username',
            email: 'username@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            cars: [
              'car one',
              'car two'
            ]
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            username: 'username',
            email: 'username@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            cars: [
              'car one',
              'car two'
            ]
          },
          {
            imageUrl: '/img/cars/picanto2.jpg',
            username: 'username',
            email: 'username@user.com',
            phoneNumber: '0987446633',
            address: 'Accra Ghana',
            country: 'Togo',
            cars: [
              'car one',
              'car two'
            ]
          },
        ],
      }
    },
  }
</script>
<style>
</style>
