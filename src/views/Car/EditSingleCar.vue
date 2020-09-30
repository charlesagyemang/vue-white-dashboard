<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
        <span class="mask bg-info opacity-8"></span>
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col-xl-12 order-xl-1">
                <card shadow type="secondary">
                    <div slot="header" class="bg-white border-0">
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h3 class="mb-0">Edit Single Car  <router-link to="/dashboard/car-list" class="btn btn-primary">Back To All Cars</router-link></h3>
                            </div>
                        </div>
                    </div>
                    <template>
                      <form class="">
                         <div class="row">
                           <div class="col-md-3">
                              <h5 class="text-uppercase text-muted">Model Name</h5>
                               <base-input v-model="carForm.modelName" addon-left-icon="ni ni-delivery-fast" placeholder="E.g Kia Morning Lx"></base-input>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Model Year</h5>
                             <base-input v-model="carForm.modelYear" addon-left-icon="ni ni-calendar-grid-58" placeholder="Eg. 2009" ></base-input>
                           </div>
                           <div class="col-md-3">
                               <h5 class="text-uppercase text-muted">Color</h5>
                               <base-input v-model="carForm.color" addon-left-icon="ni ni-palette" placeholder="E.g Blue"></base-input>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Car Status</h5>
                             <multiselect v-model="carForm.status" :options="carStatusList"></multiselect>
                           </div>
                         </div>
                         <div class="row">
                           <div class="col-md-3">
                               <h5 class="text-uppercase text-muted">Car Working City</h5>
                               <base-input v-model="carForm.carWorkingCity" addon-left-icon="ni ni-square-pin" placeholder="E.g Accra"></base-input>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Car Owner</h5>
                             <multiselect
                                  v-model="carForm.owner"
                                  deselect-label="Can't remove this value"
                                  track-by="fullName"
                                  label="fullName"
                                  placeholder="Select one"
                                  :searchable="true"
                                  :options="owner.owners">
                              </multiselect>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Current Driver</h5>
                             <multiselect
                                  v-model="carForm.driver"
                                  deselect-label="Can't remove this value"
                                  track-by="fullName"
                                  label="fullName"
                                  placeholder="Select one"
                                  :searchable="true"
                                  :options="driver.drivers">
                              </multiselect>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Car Type</h5>
                             <multiselect v-model="carForm.carType"
                             :options="carTypeList"></multiselect>
                           </div>
                         </div>
                         <div class="row">
                           <div class="col-md-3">
                               <h5 class="text-uppercase text-muted">Service Type</h5>
                               <multiselect v-model="carForm.serviceType" :options="carServiceTypeList"></multiselect>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Date Registed</h5>
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
                           </div>
                           <div class="col-md-3">
                               <h5 class="text-uppercase text-muted">Car Number</h5>
                               <base-input v-model="carForm.carNumber" addon-left-icon="ni ni-delivery-fast" placeholder="E.g GS 4098 - 20"></base-input>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Cost Of Purchase In USD</h5>
                             <base-input v-model="carForm.costOfAquiring" placeholder="Eg. $10,000" ></base-input>
                           </div>
                         </div>
                         <div class="row">
                           <div class="col-md-3">
                               <h5 class="text-uppercase text-muted">Cost Of Shipping In Usd</h5>
                               <base-input v-model="carForm.costOfShipping" addon-left-icon="ni ni-cart" placeholder="E.g $2,000"></base-input>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Cost Of Clearing In Ghc</h5>
                             <base-input v-model="carForm.costOfClearing" placeholder="Eg. GHC 15,000" ></base-input>
                           </div>
                           <div class="col-md-3">
                               <h5 class="text-uppercase text-muted">Cost Of Setting Up In ghc</h5>
                               <base-input v-model="carForm.costOfSettingUp" addon-left-icon="ni ni-settings-gear-65" placeholder="Eg. GHC 8,000"></base-input>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Car Image Link</h5>
                             <base-input v-model="carForm.imageUrl" placeholder="Put An Image Link Here" ></base-input>
                           </div>
                         </div>
                         <div class="row">
                           <div class="col">
                             <div class="text-center">
                                 <base-button @click.prevent="handleUpdateCar" block  type="primary" size="lg" class="my-4">Update Car Details</base-button>
                             </div>
                           </div>
                           <div class="col">
                           </div>
                           <div class="col">
                           </div>
                         </div>

                        </form>
                    </template>
                </card>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {

  beforeCreate(){
    if (this.$store.state.driver.drivers.length < 1) {
      this.$store.dispatch('driver/fetchDrivers').then(() =>{
          console.log(this.driver.drivers );
      });
    }

    if (this.$store.state.owner.owners.length < 1) {
      this.$store.dispatch('owner/fetchOwners').then(() =>{
          console.log(this.owner.owners );
      });
    }
  },

  data(){
    return {
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
      carServiceTypeList: [
        'UBER-SERVICES',
        'TAXI-SERVICES',
        'DUMP-TRACK-SEVICES',
      ],
      carTypeList: [
        'SALOON',
        'HUNCK BACK',
        'TRUCK'
      ],
    }// end of data
  },
  methods: {
    handleCreateOwner() {
      const noneIsEmpty = this.validateBody(this.model);
      if (noneIsEmpty) {
        console.log("noneIsEmpty", "Go Agead Create Owner");
        // CREATE OWNER
        console.log(JSON.stringify(this.model));
      } else {
        alert("Error!! Please Fill All Required Fields")
      }
    },

    handleUpdateCar() {


      const bodyToSend = {
        modelName: this.carForm.modelName,
        modelYear: this.carForm.modelYear,
        color: this.carForm.color,
        status: this.carForm.status,
        carStatus: this.carForm.carStatus,
        carType: this.carForm.carType,
        costOfAquiring: this.carForm.costOfAquiring,
        carWorkingCity: this.carForm.carWorkingCity, //ACCRA GHANA
        carOwnerId: this.carForm.owner.id,// OWNERID
        serviceType: this.carForm.serviceType, // UBER-SERVICES, TAXI-SERVICES, DUMP-TRACK-SEVICES
        dateRegistered: this.carForm.dateRegistered,// 22ND MARCH 2021
        carNumber: this.carForm.carNumber, // GS 4567 - 20
        costOfShipping: this.carForm.costOfShipping, // $890
        costOfClearing: this.carForm.costOfClearing, // GHC 39493
        costOfSettingUp: this.carForm.costOfSettingUp, // GHC 7,000
      }

      console.log(JSON.stringify(bodyToSend));

      this.$store.dispatch('car/editCar', {
        carId: this.$route.params.id,
        carDataToUpdate: bodyToSend,
      })
      .then(() =>{
        this.$notify({
          type: 'success',
          title: `Updated Successfully`,
        });
        this.$router.push({
          path: '/dashboard/car-list',
        })
      }).catch((error) => {
        this.$notify({
          type: 'danger',
          title: `Status Failed To Update: Error => ${error.message}`,
        });
      });

    },//handleUpdateCarStatus


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
  computed: {
    ...mapState(['car', 'driver', 'owner']),
    carForm(){
      return this.car.car;
    },
  },
}
</script>

<style lang="css" scoped>
</style>
