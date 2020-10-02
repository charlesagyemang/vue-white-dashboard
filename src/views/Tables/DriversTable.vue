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
          <th>Assigned Car</th>
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
                <!-- <button @click.prevent="handleOwnerActions(row.id, `/dashboard/edit-single-driver/${row.id}`)" class="dropdown-item">Edit Driver</button> -->
                <button @click="handleModalOpenings(row, 'attachACarModal')" class="dropdown-item">Assign A Car To Driver</button>
                <button @click="handleModalOpenings(row, 'personalDetailsModal')" class="dropdown-item">Edit Basic Details</button>
                <button @click="handleModalOpenings(row, 'guarantorDetailsModal')" class="dropdown-item">Edit Guarantor Details</button>
                <button @click="handleModalOpenings(row, 'formerEmployerDetailsModal')" class="dropdown-item">Edit Former Employer Details</button>
                <button @click="handleModalOpenings(row, 'changeCarAssignmentModal')" class="dropdown-item">Change Car Assignment Status</button>
                <button @click="handleModalOpenings(row, 'updateDriverStatusModal')" class="dropdown-item">Change Driver Status</button>
              </template>
            </base-dropdown>
          </td>

          <th scope="fullname">
            <div class="media align-items-center">
              <!-- <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Car Image" src="/img/cars/picanto2.jpg">
              </a> -->
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

          <td v-if="row.currentCar !== null" class="phone-number">
            {{row.currentCar.modelName}}
          </td>

          <td v-else class="phone-number">
            "Car Has Not Been Assigned Yet"
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
            <modal :show.sync="modals.changeCarAssignmentModal"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <h4>Update Car Assignment Status</h4>
                        </div>
                        <form role="form">
                           <multiselect
                             v-model="selectedCarAssignmentStatus"
                             :options="allCarAssignmentStatus">
                           </multiselect>
                            <div class="text-center">
                                <base-button @click.prevent="handleDriverCarAssignmentStatus" type="success" class="my-4">Submit</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>

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
                            <h4>Assign Car To Driver</h4>
                        </div>
                        <form role="form">
                           <multiselect
                             track-by="modelName"
                             label="modelName"
                             v-model="selectedCarToAddToDriver"
                             :options="allDriversList">
                           </multiselect>
                            <div class="text-center">
                                <base-button @click.prevent="handleAttachCarToDriver" type="success" class="my-4">Submit</base-button>
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
                            <h4> Change Driver Status </h4>
                        </div>
                        <form role="form">
                           <multiselect
                             v-model="selectedDriverStatus"
                             :options="allCarStatus">
                           </multiselect>
                            <div class="text-center">
                                <base-button @click.prevent="handleUpdateDriverStatus" type="success" class="my-4">Submit</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>

        <div class="col-md-4">
            <modal :show.sync="modals.personalDetailsModal"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <h4>Update {{currentlySelectedDriver.fullName}}'s details</h4>
                        </div>
                        <form role="form">
                          <h5 class="text-uppercase text-muted">Full Name ( {{currentlySelectedDriver.fullName}} )</h5>
                           <base-input
                              v-model="personalDetailsForm.fullName"
                              addon-left-icon="ni ni-circle-08"
                              :placeholder="currentlySelectedDriver.fullName"
                              >
                            </base-input>

                              <h5 class="text-uppercase text-muted">Phone Number ( {{currentlySelectedDriver.phoneNumber}} )</h5>
                              <base-input
                                 v-model="personalDetailsForm.phoneNumber"
                                 addon-left-icon="ni ni-mobile-button"
                                 :placeholder="currentlySelectedDriver.phoneNumber"
                                 >
                               </base-input>

                              <h5 class="text-uppercase text-muted">Address ( {{currentlySelectedDriver.address}} )</h5>
                              <base-input
                                 v-model="personalDetailsForm.address"
                                 addon-left-icon="ni ni-square-pin"
                                 :placeholder="currentlySelectedDriver.address"
                                 >
                               </base-input>
                            <div class="text-center">
                                <base-button @click.prevent="handleUpdatePersonalDetails" type="primary" class="my-4">Submit</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>

        <div class="col-md-4">
            <modal :show.sync="modals.guarantorDetailsModal"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <h4>Update {{currentlySelectedDriver.fullName}}'s details</h4>
                        </div>
                        <form role="form">
                          <h5 class="text-uppercase text-muted">Guarantor Full Name ( {{currentlySelectedDriver.guarantorFullName}} )</h5>
                           <base-input
                              v-model="guarantorDetailsForm.guarantorFullName"
                              addon-left-icon="ni ni-circle-08"
                              :placeholder="currentlySelectedDriver.guarantorFullName"
                              >
                            </base-input>

                              <h5 class="text-uppercase text-muted">Guarantor Phone Number ( {{currentlySelectedDriver.guarantorPhoneNumber}} )</h5>
                              <base-input
                                 v-model="guarantorDetailsForm.guarantorPhoneNumber"
                                 addon-left-icon="ni ni-mobile-button"
                                 :placeholder="currentlySelectedDriver.guarantorPhoneNumber"
                                 >
                               </base-input>
                               <h5 class="text-uppercase text-muted"> Email ( {{currentlySelectedDriver.guarantorEmail}} )</h5>
                               <base-input
                                  v-model="guarantorDetailsForm.guarantorEmail"
                                  addon-left-icon="ni ni-send"
                                  :placeholder="currentlySelectedDriver.guarantorEmail"
                                  >
                                </base-input>

                              <h5 class="text-uppercase text-muted">Address ( {{currentlySelectedDriver.guarantorAddress}} )</h5>
                              <base-input
                                 v-model="guarantorDetailsForm.guarantorAddress"
                                 addon-left-icon="ni ni-pin-3"
                                 :placeholder="currentlySelectedDriver.guarantorAddress"
                                 >
                               </base-input>
                            <div class="text-center">
                                <base-button @click.prevent="handleUpdateGuarantorDetails" type="primary" class="my-4">Submit</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>


        <div class="col-md-4">
            <modal :show.sync="modals.formerEmployerDetailsModal"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <h4>Update {{currentlySelectedDriver.fullName}}'s details</h4>
                        </div>
                        <form role="form">
                          <h5 class="text-uppercase text-muted"> Full Name ( {{currentlySelectedDriver.formerEmployerFullName}} )</h5>
                           <base-input
                              v-model="guarantorDetailsForm.formerEmployerFullName"
                              addon-left-icon="ni ni-circle-08"
                              :placeholder="currentlySelectedDriver.formerEmployerFullName"
                              >
                            </base-input>

                              <h5 class="text-uppercase text-muted"> Phone Number ( {{currentlySelectedDriver.formerEmployerPhoneNumber}} )</h5>
                              <base-input
                                 v-model="guarantorDetailsForm.formerEmployerPhoneNumber"
                                 addon-left-icon="ni ni-mobile-button"
                                 :placeholder="currentlySelectedDriver.formerEmployerPhoneNumber"
                                 >
                               </base-input>

                               <h5 class="text-uppercase text-muted"> Email ( {{currentlySelectedDriver.formerEmployerEmail}} )</h5>
                               <base-input
                                  v-model="guarantorDetailsForm.formerEmployerEmail"
                                  addon-left-icon="ni ni-send"
                                  :placeholder="currentlySelectedDriver.formerEmployerEmail"
                                  >
                                </base-input>

                              <h5 class="text-uppercase text-muted">Address ( {{currentlySelectedDriver.formerEmployerAddress}} )</h5>
                              <base-input
                                 v-model="guarantorDetailsForm.formerEmployerAddress"
                                 addon-left-icon="ni ni-pin-3"
                                 :placeholder="currentlySelectedDriver.formerEmployerAddress"
                                 >
                               </base-input>
                            <div class="text-center">
                                <base-button @click.prevent="handleUpdateFormerEmployerDetails" type="primary" class="my-4">Submit</base-button>
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

      handleModalOpenings(row, modalReference){
        this.modals[modalReference] = true;
        this.currentlySelectedDriver = row;
        this.selectedDriverStatus = row;
        this.selectedDriverStatus = row.driverStatus;
        this.selectedCarAssignmentStatus = row.carAssignmentStatus;
        console.log(JSON.stringify(this.currentlySelectedDriver));
      },//handleModalOpenings

      handleDriverCarAssignmentStatus() {

        let driverId = this.currentlySelectedDriver.id;

        let driverDataToUpdate = {
          carAssignmentStatus: this.selectedCarAssignmentStatus,
        };

        store.dispatch('driver/editDriver', {
          driverId,
          driverDataToUpdate,
        })
        .then((driver) =>{
          this.modals.changeCarAssignmentModal = false;
          this.$notify({
            type: 'success',
            title: `Status Updated Successfully. Changed To ${driver.carAssignmentStatus}`,
          });
        }).catch((error) => {
          this.modals.changeCarAssignmentModal = false;
          this.$notify({
            type: 'danger',
            title: `Status Failed To Update: Error => ${error.message}`,
          });
        });

      },//handleDriverCarAssignmentStatus

      handleUpdateDriverStatus() {

        let currentDriver = this.currentlySelectedDriver;
        let driverId = currentDriver.id;

        currentDriver = {
          driverStatus: this.selectedDriverStatus,
        };

        store.dispatch('driver/editDriver', {
          driverId,
          driverDataToUpdate: currentDriver
        })
        .then((driver) =>{
          this.modals.updateDriverStatusModal = false;
          this.$notify({
            type: 'success',
            title: `Status Updated Successfully. Changed To ${driver.driverStatus}`,
          });
        }).catch((error) => {
          this.modals.updateDriverStatusModal = false;
          this.$notify({
            type: 'danger',
            title: `Status Failed To Update: Error => ${error.message}`,
          });
        });

      },//handleUpdateDriverStatus


      handleUpdatePersonalDetails() {

        console.log(this.personalDetailsForm);
        console.log(this.currentlySelectedDriver.id);


        store.dispatch('driver/editDriver', {
          driverId: this.currentlySelectedDriver.id,
          driverDataToUpdate: this.personalDetailsForm,
        })
        .then((driver) =>{
          this.modals.personalDetailsModal = false;
          this.$notify({
            type: 'success',
            title: `Status Updated Successfully. Changed To ${driver.driverStatus}`,
          });
        }).catch((error) => {
          this.modals.personalDetailsModal = false;
          this.$notify({
            type: 'danger',
            title: `Status Failed To Update: Error => ${error.message}`,
          });
        });

      },//handleUpdatePersonalDetails

      handleUpdateGuarantorDetails() {

        console.log(this.guarantorDetailsForm);
        console.log(this.currentlySelectedDriver.id);


        store.dispatch('driver/editDriver', {
          driverId: this.currentlySelectedDriver.id,
          driverDataToUpdate: this.guarantorDetailsForm,
        })
        .then(() =>{
          this.modals.guarantorDetailsModal = false;
          this.$notify({
            type: 'success',
            title: `Updated Successfully`,
          });
        }).catch((error) => {
          this.modals.guarantorDetailsModal = false;
          this.$notify({
            type: 'danger',
            title: `Status Failed To Update: Error => ${error.message}`,
          });
        });

      },//handleUpdateGuarantorDetails


      handleUpdateFormerEmployerDetails() {

        console.log(this.guarantorDetailsForm);
        console.log(this.currentlySelectedDriver.id);


        store.dispatch('driver/editDriver', {
          driverId: this.currentlySelectedDriver.id,
          driverDataToUpdate: this.guarantorDetailsForm,
        })
        .then(() =>{
          this.modals.formerEmployerDetailsModal = false;
          this.$notify({
            type: 'success',
            title: `Updated Successfully`,
          });
        }).catch((error) => {
          this.modals.formerEmployerDetailsModal = false;
          this.$notify({
            type: 'danger',
            title: `Status Failed To Update: Error => ${error.message}`,
          });
        });

      },//handleUpdateFormerEmployerDetails


      handleAttachCarToDriver() {

        let currentDriver = {
          carId: this.selectedCarToAddToDriver.id,
          currentCar: this.selectedCarToAddToDriver,
          carAssignmentStatus: "ASSIGNED",
          driverStatus: "ASSIGNED_CAR",
        };

        console.log(currentDriver);
        //
        store.dispatch('driver/editDriver', {
          driverId: this.currentlySelectedDriver.id,
          driverDataToUpdate: currentDriver
        })
        .then(() =>{
          this.modals.attachACarModal = false;
          this.$notify({
            type: 'success',
            title: `Updated Successfully`,
          });
        }).catch((error) => {
          this.modals.attachACarModal = false;
          this.$notify({
            type: 'danger',
            title: `Status Failed To Update: Error => ${error.message}`,
          });
        });

      },//handleAttachCarToDriver





    },
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        selectedCarToAddToDriver: {},
        currentlySelectedDriver: {},
        selectedDriverStatus: '',
        selectedCarAssignmentStatus: '',
        carForm: {
          currentDriver: '',
        },
        modals: {
          attachACarModal: false,
          updateDriverStatusModal: false,
          changeCarAssignmentModal: false,
          personalDetailsModal: false,
          formerEmployerDetailsModal: false,
          guarantorDetailsModal: false,
        },
        total: 30,
        allCarStatus: [
          'APPLIED',
          'AWAITING_CAR',
          'ASSIGNED_CAR',
          'PROBATION',
          'PASSED_PROBATION',
          'FAILED_PROBATION',
          'SIGNED_CONTRACT',
          'WORKING',
          'COMPLETED_WORK',
          'CAR_BEING_TRANSFERED',
          'CAR_TRANSFERED_TO_DRIVER'
        ],
        allCarAssignmentStatus: [
          "NOT_ASSIGNED",
          "ASSIGNED",
          "TAKEN_AWAY",
        ],
        allDriverStatus: [
          "active",
          "inactive",
        ],
        personalDetailsForm: {},
        guarantorDetailsForm: {},
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
    },
  }
</script>
<style>
</style>
