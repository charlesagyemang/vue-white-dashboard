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
                <button @click.prevent="handleOwnerActions(row.id, `/dashboard/view-single-car/${row.id}`)" class="dropdown-item">View Full Details</button>
                <button @click.prevent="handleOwnerActions(row.id, `/dashboard/edit-single-car/${row.id}`)" class="dropdown-item">Edit Car</button>
                <button @click="modals.addInsurance = true" class="dropdown-item">Add Insurance</button>
                <button @click="modals.addRoadWorthy = true" class="dropdown-item">Add Road Worthy</button>
                <button @click="modals.addIncomeTax = true" class="dropdown-item">Add Income Tax</button>
                <button @click="modals.addMonthlyExpense = true" class="dropdown-item">Add Monthly Expense</button>
                <button @click="modals.addDocumentLink = true" class="dropdown-item">Add Document Links</button>
                <!-- <button @click="modals.updateCarStatusModal = true" class="dropdown-item">Change Car Status</button> -->
                <button @click="handleOpenChangeCarStatusModal(row.id)" class="dropdown-item">Update Owner Status</button>
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

          <td class="car">
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

    <div class="row">

      <div class="col-md-4">
          <modal :show.sync="modals.addInsurance"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Add Insurance</h3>
                      </div>
                      <form role="form">
                        <h5 class="text-uppercase text-muted">Provider</h5>
                         <base-input
                            v-model="carForm.currentDriver"
                            addon-left-icon="ni ni-key-25"
                            placeholder="E.g SIC Insurance"
                            >
                          </base-input>
                          <h5 class="text-uppercase text-muted">Start Date</h5>
                          <base-input addon-left-icon="ni ni-calendar-grid-58">
                                <flat-pickr slot-scope="{focus, blur}"
                                             @on-open="focus"
                                             @on-close="blur"
                                             :config="{allowInput: true}"
                                             class="form-control datepicker"
                                             v-model="carForm.dateRegistered"
                                             >
                                </flat-pickr>
                            </base-input>

                            <h5 class="text-uppercase text-muted">End Date</h5>
                            <base-input addon-left-icon="ni ni-calendar-grid-58">
                                  <flat-pickr slot-scope="{focus, blur}"
                                               @on-open="focus"
                                               @on-close="blur"
                                               :config="{allowInput: true}"
                                               class="form-control datepicker"
                                               v-model="carForm.dateRegistered"
                                               >
                                  </flat-pickr>
                              </base-input>

                            <h5 class="text-uppercase text-muted">Amount</h5>
                            <base-input
                               v-model="carForm.currentDriver"
                               addon-left-icon="ni ni-money-coins"
                               placeholder="Eg. GHC 450"
                               >
                             </base-input>
                          <div class="text-center">
                              <base-button type="primary" class="my-4">Submit</base-button>
                          </div>
                      </form>
                  </template>
              </card>
          </modal>
      </div>

      <div class="col-md-4">
          <modal :show.sync="modals.addRoadWorthy"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Add Road Worthy</h3>
                      </div>
                      <form role="form">
                          <h5 class="text-uppercase text-muted">Start Date</h5>
                          <base-input addon-left-icon="ni ni-calendar-grid-58">
                                <flat-pickr slot-scope="{focus, blur}"
                                             @on-open="focus"
                                             @on-close="blur"
                                             :config="{allowInput: true}"
                                             class="form-control datepicker"
                                             v-model="carForm.dateRegistered"
                                             >
                                </flat-pickr>
                            </base-input>

                            <h5 class="text-uppercase text-muted">End Date</h5>
                            <base-input addon-left-icon="ni ni-calendar-grid-58">
                                  <flat-pickr slot-scope="{focus, blur}"
                                               @on-open="focus"
                                               @on-close="blur"
                                               :config="{allowInput: true}"
                                               class="form-control datepicker"
                                               v-model="carForm.dateRegistered"
                                               >
                                  </flat-pickr>
                              </base-input>

                            <h5 class="text-uppercase text-muted">Amount</h5>
                            <base-input
                               v-model="carForm.currentDriver"
                               addon-left-icon="ni ni-money-coins"
                               placeholder="Eg. GHC 450"
                               >
                             </base-input>
                          <div class="text-center">
                              <base-button type="primary" class="my-4">Submit</base-button>
                          </div>
                      </form>
                  </template>
              </card>
          </modal>
      </div>

      <div class="col-md-4">
          <modal :show.sync="modals.addIncomeTax"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Add Income Tax</h3>
                      </div>
                      <form role="form">
                        <h5 class="text-uppercase text-muted">Quater</h5>
                         <base-input
                            v-model="carForm.currentDriver"
                            addon-left-icon="ni ni-key-25"
                            placeholder="E.g First Quarter"
                            >
                          </base-input>
                          <h5 class="text-uppercase text-muted">Start Date</h5>
                          <base-input addon-left-icon="ni ni-calendar-grid-58">
                                <flat-pickr slot-scope="{focus, blur}"
                                             @on-open="focus"
                                             @on-close="blur"
                                             :config="{allowInput: true}"
                                             class="form-control datepicker"
                                             v-model="carForm.dateRegistered"
                                             >
                                </flat-pickr>
                            </base-input>

                            <h5 class="text-uppercase text-muted">End Date</h5>
                            <base-input addon-left-icon="ni ni-calendar-grid-58">
                                  <flat-pickr slot-scope="{focus, blur}"
                                               @on-open="focus"
                                               @on-close="blur"
                                               :config="{allowInput: true}"
                                               class="form-control datepicker"
                                               v-model="carForm.dateRegistered"
                                               >
                                  </flat-pickr>
                              </base-input>

                            <h5 class="text-uppercase text-muted">Amount</h5>
                            <base-input
                               v-model="carForm.currentDriver"
                               addon-left-icon="ni ni-money-coins"
                               placeholder="Eg. GHC 450"
                               >
                             </base-input>
                          <div class="text-center">
                              <base-button type="primary" class="my-4">Submit</base-button>
                          </div>
                      </form>
                  </template>
              </card>
          </modal>
      </div>

      <div class="col-md-4">
          <modal :show.sync="modals.addMonthlyExpense"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Add Monthly Expense</h3>
                      </div>
                      <form role="form">
                        <h5 class="text-uppercase text-muted">Year</h5>
                         <base-input
                            v-model="carForm.currentDriver"
                            addon-left-icon="ni ni-calendar-grid-58"
                            placeholder="E.g 2020"
                            >
                          </base-input>
                          <h5 class="text-uppercase text-muted">Month</h5>
                           <base-input
                              v-model="carForm.currentDriver"
                              addon-left-icon="ni ni-calendar-grid-58"
                              placeholder="Eg. May"
                              >
                            </base-input>
                            <h5 class="text-uppercase text-muted">Amount</h5>
                            <base-input
                               v-model="carForm.currentDriver"
                               addon-left-icon="ni ni-money-coins"
                               placeholder="Eg. GHC 450"
                               >
                             </base-input>
                          <div class="text-center">
                              <base-button type="primary" class="my-4">Submit</base-button>
                          </div>
                      </form>
                  </template>
              </card>
          </modal>
      </div>

      <div class="col-md-4">
          <modal :show.sync="modals.addDocumentLink"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Add Document Link</h3>
                      </div>
                      <form role="form">
                        <h5 class="text-uppercase text-muted">Item Name</h5>
                         <base-input
                            v-model="carForm.currentDriver"
                            addon-left-icon="ni ni-single-copy-04"
                            placeholder="E.g Form A"
                            >
                          </base-input>
                          <h5 class="text-uppercase text-muted">Paste Document Link Here</h5>
                           <base-input
                              v-model="carForm.currentDriver"
                              addon-left-icon="ni ni-briefcase-24"
                              placeholder="Eg. https://drive.google.com/738"
                              >
                            </base-input>
                          <div class="text-center">
                              <base-button type="primary" class="my-4">Submit</base-button>
                          </div>
                      </form>
                  </template>
              </card>
          </modal>
      </div>

      <div class="col-md-4">
          <modal :show.sync="modals.updateCarStatusModal"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Update {{selectedCar.modelName}}'s Status</h3>
                      </div>
                      <form role="form">
                         <multiselect
                           v-model="selectedCarStatus"
                           :options="allCarStatusList">
                         </multiselect>
                          <div class="text-center">
                              <base-button @click.prevent="handleUpdateCarStatus" type="success" class="my-4">Update Status</base-button>
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
import { mapState } from 'vuex'
import store from '@/store/store'

  export default {
    created() {
      if (store.state.car.cars.length < 1) {
        store.dispatch('car/fetchCars').then(() =>{
            console.log(this.car.cars );
          });
      }
    },
    computed: {
      ...mapState(['car']),
      tableData(){
        return this.car.cars
      },
    },
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
        selectedCarStatus: '',
        selectedCar: {},
        carForm: {
          currentDriver: '',
          dateRegistered: '',
        },
        allCarStatusList: [
          'BOUGHT',
          'SHIPPED',
          'SETTING_UP',
          'PROBATION',
          'WORKING',
          'SOLD',
          'GIVEN_OUT'
        ],
        modals:{
          updateCarStatusModal: false,
          addDocumentLink: false,
          addMonthlyExpense: false,
          addIncomeTax: false,
          addRoadWorthy: false,
          addInsurance: false,
          modal1: false,
          modal2: false,
          modal3: false,
        },
        total: 30,

        insuranceForm: {
          provider: '',
          startDate: '',
          endDate: '',
          amount: '',
        },// end of insurance form

        roadWorthyForm: {
          startDate: '',
          endDate: '',
          amount: '',
        }, // roadWorhtyEnd

        incomeTaxForm: {
          quarter: '',
          startDate: '',
          endDate: '',
          amount: '',
        },//incomeTax

        monthlyExpenseForm: {
          year: '',
          month: '',
          amount: '',
        },// monthly expenses

        documentLinksForm: {
          itemName: '',
          link: '',
        },// documentLinks Form

      }// end of return
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
      },//getStatusColor

      handleOwnerActions(id, route){
        store.dispatch('car/fetchCarById', id).then((car) =>{
          console.log("==== fetched ====", car);
          this.$notify({
            type: 'success',
            title: `Full Details For ${car.modelName}`,
          });
          this.$router.push({
            path: route,
          });
        });
      },//handleOwnerActions

      handleOpenChangeCarStatusModal(id){
        this.modals.updateCarStatusModal = true
        store.dispatch('car/fetchCarById', id)
        .then((car) =>{
          console.log("==== fetched ====", car);
          this.selectedCar = this.car.car;
          this.selectedCarStatus = this.car.car.status;
        })
      },// handleOpenChangeCarStatusModal

      handleUpdateCarStatus() {
        let currentCar = this.car.car;
        let carId = currentCar.id;
        console.log(carId);
        delete currentCar.status;
        delete currentCar.id;
        currentCar = {
          ...currentCar,
          status: this.selectedCarStatus,
        };

        store.dispatch('car/editCar', {
          carId,
          carDataToUpdate: currentCar
        })
        .then((car) =>{
          this.modals.updateCarStatusModal = false;
          this.$notify({
            type: 'success',
            title: `Status Updated Successfully. Changed To ${car.status}`,
          });
        }).catch((error) => {
          this.modals.updateCarStatusModal = false;
          this.$notify({
            type: 'danger',
            title: `Status Failed To Update: Error => ${error.message}`,
          });
        });
      },//handleUpdateCarStatus

    },
  }
</script>
<style>
</style>
