<template lang="html">
  <div class="">
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!--
            carStatus: '', // BOUGHT, SHIPPED, SETTING_UP, PROBATION, WORKING, SOLD, GIVEN_OUT
            carWorkingCity: '', //ACCRA GHANA
            carOwner: '', // OWNERID
            carOwners: [], // LIST OF OWNERS NOT JUST IDS
            currentDriver: '', // FULL DRIVER DETAILS
            allDrivers: [], // LIST OF DRIVERS NOT JUST IDS
            carType: '', // UT-TYPE, TRUCK-SIZE
            serviceType: '', // UBER-SERVICES, TAXI-SERVICES, DUMP-TRACK-SEVICES
            dateResigtered: '', // 22ND MARCH 2021
            carNumber: '', // GS 4567 - 20
            insuranceDetails: [], // [{year: '', type: '', status: '', amount: ''}],
            roadWorthyDetails: [], // [{year: '', period: '', amount: '', renewalDate: ''}]
            incomeTaxDetails: [], // [{year: '', period: '', amount: '', renewalDate: ''}]
            costOfAquiring: '', // $10,000
            costOfShipping: '', // $890
            costOfClearing: '', // GHC 39493
            costOfSettingUp: '', // GHC 7,000
            imageUrl: '',
           -->
           <form class="">
             <h1 class="text-white text-uppercase">Add New Car</h1><br>
              <div class="row">
                <div class="col-md-3">
                    <h5 class="text-white text-uppercase">Model Name</h5>
                    <base-input v-model="carForm.modelName" addon-left-icon="ni ni-delivery-fast" placeholder="E.g Kia Morning Lx"></base-input>
                </div>
                <div class="col-md-3">
                  <h5 class="text-white text-uppercase">Model Year</h5>
                  <base-input v-model="carForm.modelYear" addon-left-icon="ni ni-calendar-grid-58" placeholder="Eg. 2009" ></base-input>
                </div>
                <div class="col-md-3">
                    <h5 class="text-white text-uppercase">Color</h5>
                    <base-input v-model="carForm.color" addon-left-icon="ni ni-world" placeholder="E.g Blue"></base-input>
                </div>
                <div class="col-md-3">
                  <h5 class="text-white text-uppercase">Car Status</h5>
                  <multiselect v-model="carForm.carStatus" :options="carStatusList"></multiselect>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                    <h5 class="text-white text-uppercase">Car Working City</h5>
                    <base-input addon-left-icon="ni ni-square-pin" placeholder="E.g Accra"></base-input>
                </div>
                <div class="col-md-3">
                  <h5 class="text-white text-uppercase">Car Owner</h5>
                  <multiselect v-model="carForm.carOwner" :options="carOwnersList"></multiselect>
                </div>
                <div class="col-md-3">
                    <h5 class="text-white text-uppercase">Current Driver</h5>
                    <multiselect v-model="carForm.currentDriver" :options="allDriversList"></multiselect>
                </div>
                <div class="col-md-3">
                  <h5 class="text-white text-uppercase">Cost Of Purchase In USD</h5>
                  <base-input placeholder="Eg. $10,000" ></base-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                    <h5 class="text-white text-uppercase">Service Type</h5>
                    <multiselect v-model="carForm.serviceType" :options="carServiceTypeList"></multiselect>
                </div>
                <div class="col-md-3">
                  <h5 class="text-white text-uppercase">Date Registed</h5>
                    <base-input addon-left-icon="ni ni-calendar-grid-58">
                        <flat-pickr slot-scope="{focus, blur}"
                                     @on-open="focus"
                                     @on-close="blur"
                                     :config="{allowInput: true}"
                                     class="form-control datepicker"
                                     v-model="carForm.dateResigtered"
                                     >
                        </flat-pickr>
                    </base-input>
                </div>
                <div class="col-md-3">
                    <h5 class="text-white text-uppercase">Car Number</h5>
                    <base-input addon-left-icon="ni ni-delivery-fast" placeholder="E.g Kia Morning Lx"></base-input>
                </div>
                <div class="col-md-3">
                  <h5 class="text-white text-uppercase">Cost Of Purchase</h5>
                  <base-input placeholder="Disabled" ></base-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                    <h5 class="text-white text-uppercase">Cost Of Shipping</h5>
                    <base-input addon-left-icon="ni ni-delivery-fast" placeholder="E.g Kia Morning Lx"></base-input>
                </div>
                <div class="col-md-3">
                  <h5 class="text-white text-uppercase">Cost Of Clearing</h5>
                  <base-input placeholder="Disabled" ></base-input>
                </div>
                <div class="col-md-3">
                    <h5 class="text-white text-uppercase">Cost Of Setting Up</h5>
                    <base-input addon-left-icon="ni ni-delivery-fast" placeholder="E.g Kia Morning Lx"></base-input>
                </div>
                <div class="col-md-3">
                  <h5 class="text-white text-uppercase">Car Image Link</h5>
                  <base-input placeholder="Disabled" ></base-input>
                </div>
              </div>
              <div class="text-center">
                  <base-button type="default" class="my-4">Add New Car</base-button>
              </div>
             </form>
    </base-header>
    <div class="container-fluid">
        <br>
      <div class="row">
        <div class="col-md-4">
            <base-button block type="default" class=" mb-3" @click="modals.modal1 = true">
                Add A Car
            </base-button>
            <modal :show.sync="modals.modal1"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                   <div v-show="validationError">
                     <base-alert type="danger" dismissible>
                         <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
                         <span class="alert-inner--text"><strong>Error!</strong> Please Fill Out All Required Fields</span>
                         <button type="button" class="close">
                             <span aria-hidden="true">&times;</span>
                         </button>
                     </base-alert>
                   </div>

                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <small>Perform Action</small>
                        </div>
                        <form role="form">
                            <base-input
                                        v-model="createOwner.username"
                                        type="text"
                                        placeholder="Full Name"
                                        addon-left-icon="ni ni-single-02">
                            </base-input>
                            <base-input alternative
                                        v-model="createOwner.email"
                                        class="mb-3"
                                        type="email"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input alternative
                                        v-model="createOwner.phoneNumber"
                                        type="text"
                                        placeholder="Phone Number"
                                        addon-left-icon="ni ni-mobile-button">
                            </base-input>
                            <base-input alternative
                                        v-model="createOwner.address"
                                        type="text"
                                        placeholder="Address"
                                        addon-left-icon="ni ni-square-pin">
                            </base-input>
                            <base-input alternative
                                        v-model="createOwner.country"
                                        type="text"
                                        placeholder="Country Of Origin"
                                        addon-left-icon="ni ni-world-2">
                            </base-input>
                            <div class="text-center">
                                <base-button @click="handleCreateOwner" type="default" class="my-4">Submit</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>
        <div class="col-md-4">
            <base-button block type="warning" class=" mb-3" @click="modals.modal2 = true">
                Notification
            </base-button>

            <modal :show.sync="modals.modal2"
                   gradient="danger"
                   modal-classes="modal-danger modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Your attention is required</h6>

                <div class="py-3 text-center">
                    <i class="ni ni-bell-55 ni-3x"></i>
                    <h4 class="heading mt-4">You should read this!</h4>
                    <p>A small river named Duden flows by their place and supplies it with the
                        necessary regelialia.</p>
                </div>

                <template slot="footer">
                    <base-button type="white">Ok, Got it</base-button>
                    <base-button type="link"
                                 text-color="white"
                                 class="ml-auto"
                                 @click="modals.modal2 = false">
                        Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class="col-md-4">
            <base-button block type="default" class=" mb-3" @click="modals.modal3 = true">
                Add Owner
            </base-button>

            <modal :show.sync="modals.modal3"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                   <div v-show="validationError">
                     <base-alert type="danger" dismissible>
                         <span class="alert-inner--icon"><i class="ni ni-like-2"></i></span>
                         <span class="alert-inner--text"><strong>Error!</strong> Please Fill Out All Required Fields</span>
                         <button type="button" class="close">
                             <span aria-hidden="true">&times;</span>
                         </button>
                     </base-alert>
                   </div>

                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <template>
                        <div class="text-center text-muted mb-4">
                            <small>Perform Action</small>
                        </div>
                        <form role="form">
                            <base-input
                                        v-model="createOwner.username"
                                        type="text"
                                        placeholder="Full Name"
                                        addon-left-icon="ni ni-single-02">
                            </base-input>
                            <base-input alternative
                                        v-model="createOwner.email"
                                        class="mb-3"
                                        type="email"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83">
                            </base-input>
                            <base-input alternative
                                        v-model="createOwner.phoneNumber"
                                        type="text"
                                        placeholder="Phone Number"
                                        addon-left-icon="ni ni-mobile-button">
                            </base-input>
                            <base-input alternative
                                        v-model="createOwner.address"
                                        type="text"
                                        placeholder="Address"
                                        addon-left-icon="ni ni-square-pin">
                            </base-input>
                            <base-input alternative
                                        v-model="createOwner.country"
                                        type="text"
                                        placeholder="Country Of Origin"
                                        addon-left-icon="ni ni-world-2">
                            </base-input>
                            <div class="text-center">
                                <base-button @click="handleCreateOwner" type="default" class="my-4">Submit</base-button>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  components: {
    Modal,
  },
  data(){
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false,
      },
      createOwner: {
        username: '',
        email: '',
        phoneNumber: '',
        address: '',
        country: '',
        other: {},
      },
      carForm: {
        modelName: '', //KIA PICANTO
        modelYear: '', //2008
        color: '', // RED || RED & YELLOW
        carStatus: '', // BOUGHT, SHIPPED, SETTING_UP, PROBATION, WORKING, SOLD, GIVEN_OUT
        carWorkingCity: '', //ACCRA GHANA
        carOwner: '', // OWNERID
        carOwners: [], // LIST OF OWNERS NOT JUST IDS
        currentDriver: '', // FULL DRIVER DETAILS
        allDrivers: [], // LIST OF DRIVERS NOT JUST IDS
        carType: '', // UT-TYPE, TRUCK-SIZE
        serviceType: '', // UBER-SERVICES, TAXI-SERVICES, DUMP-TRACK-SEVICES
        dateResigtered: '', // 22ND MARCH 2021
        carNumber: '', // GS 4567 - 20
        insuranceDetails: [], // [{year: '', type: '', status: '', amount: ''}],
        roadWorthyDetails: [], // [{year: '', period: '', amount: '', renewalDate: ''}]
        incomeTaxDetails: [], // [{year: '', period: '', amount: '', renewalDate: ''}]
        costOfAquiring: '', // $10,000
        costOfShipping: '', // $890
        costOfClearing: '', // GHC 39493
        costOfSettingUp: '', // GHC 7,000
        imageUrl: '',
        other: {},
      },
      validationError: false,
      carStatusList: [
        'BOUGHT',
        'SHIPPED',
        'SETTING_UP',
        'PROBATION',
        'WORKING',
        'SOLD',
        'GIVEN_OUT'
      ],
      carOwnersList: [
        'Owner 1',
        'Owner 2',
        'Owner 3',
      ],
      allDriversList: [
        'Driver 1',
        'Driver 2',
        'Driver 3',
      ],
      carServiceTypeList: [
        'UBER-SERVICES',
        'TAXI-SERVICES',
        'DUMP-TRACK-SEVICES',
      ],
    }// end of data
  },
  methods: {
    handleCreateOwner() {
      const noneIsEmpty = this.validateBody(this.createOwner);
      if (noneIsEmpty) {
        console.log("noneIsEmpty", "Go Agead Create Owner");
        // CREATE OWNER
        console.log(JSON.stringify(this.createOwner));
      } else {
        alert("Error!! Please Fill All Required Fields")
        this.validationError = true;
      }
    },
    handleCreateCar() {
      // required:
      const requiredBody = {
        modelName: this.carForm.modelName,
        modelYear: this.carForm.modelYear,
        color: this.carForm.color,
        carStatus: this.carForm.carStatus,
        carOwner: this.carForm.carOwner,
        carType: this.carForm.carType,
        costOfAquiring: this.carForm.costOfAquiring,
      }

      const noneIsEmpty = this.validateBody(requiredBody);

      if (noneIsEmpty) {
        console.log("noneIsEmpty", "Go Ahead Create A Car");
        // CREATE A Car
        console.log(JSON.stringify(this.carForm));
      } else {
        alert("Error!! Please Fill All Required Fields")
        this.validationError = true;
      }
    },
    validateBody(payload){
      delete payload.other
      let meto = true
      for (var item in payload){
        if (!this.isNotEmpty(payload[`${item}`])) {
          meto = false
        }
      }
      return meto
    },
    isNotEmpty(value){
      return value !== '' && value !== undefined && value !== null
    },
  },
}
</script>

<style lang="css" scoped>
</style>
