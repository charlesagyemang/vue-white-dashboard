<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- <span class="mask bg-info opacity-8"></span> -->
    </base-header>

    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col-xl-12 order-xl-1">
                <card shadow type="secondary">
                    <div slot="header" class="bg-white border-0">
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h3 class="mb-0">Fill The Form below To Add A New Car    <router-link to="/dashboard/car-list" class="btn btn-primary">VIEW ALL CARS</router-link></h3>
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
                             <multiselect v-model="carForm.carStatus" :options="carStatusList"></multiselect>
                           </div>
                         </div>
                         <div class="row">
                           <div class="col-md-3">
                               <h5 class="text-uppercase text-muted">Car Working City</h5>
                               <base-input v-model="carForm.carWorkingCity" addon-left-icon="ni ni-square-pin" placeholder="E.g Accra"></base-input>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Car Owner</h5>
                             <multiselect v-model="carForm.carOwnerId" label="fullName" :options="owner.owners"></multiselect>
                           </div>
                           <div class="col-md-3">
                               <h5 class="text-uppercase text-muted">Current Driver</h5>
                               <multiselect v-model="carForm.currentDriverId"  label="fullName" :options="driver.drivers"></multiselect>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Car Type</h5>
                             <multiselect v-model="carForm.carType" :options="carTypeList"></multiselect>
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
                                                v-model="carForm.dateResigtered"
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
                               <base-input  v-model="carForm.costOfShipping " addon-left-icon="ni ni-cart" placeholder="E.g $2,000"></base-input>
                           </div>
                           <div class="col-md-3">
                             <h5 class="text-uppercase text-muted">Cost Of Clearing In Ghc</h5>
                             <base-input v-model="carForm.costOfClearing " placeholder="Eg. GHC 15,000" ></base-input>
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
                                 <base-button @click.prevent="handleCreateCar" block  type="primary" size="lg" class="my-4">Add New Car</base-button>
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
import {mapState} from 'vuex'
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
  computed: {
    ...mapState(['driver', 'owner']),
  },
  data(){
    return {
      carForm: {
        modelName: '', //KIA PICANTO
        modelYear: '', //2008
        color: '', // RED || RED & YELLOW
        carStatus: '', // BOUGHT, SHIPPED, SETTING_UP, PROBATION, WORKING, SOLD, GIVEN_OUT
        carWorkingCity: '', //ACCRA GHANA
        carOwnerId: '', // OWNERID
        currentDriverId: '', // FULL DRIVER DETAILS
        carType: '', // UT-TYPE, TRUCK-SIZE
        serviceType: '', // UBER-SERVICES, TAXI-SERVICES, DUMP-TRACK-SEVICES
        dateRegistered: '', // 22ND MARCH 2021
        carNumber: '', // GS 4567 - 20
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
      carTypeList: [
        'SALOON',
        'HUNCK BACK',
        'TRUCK'
      ]
    }// end of data
  },
  methods: {
    handleCreateCar(e) {
      e.preventDefault();
      // required:
      const requiredBody = {
        modelName: this.carForm.modelName,
        modelYear: this.carForm.modelYear,
        color: this.carForm.color,
        carStatus: this.carForm.carStatus,
        carOwnerId: this.carForm.carOwnerId,
        carType: this.carForm.carType,
        costOfAquiring: this.carForm.costOfAquiring,
      }

      const noneIsEmpty = this.validateBody(requiredBody);

      if (noneIsEmpty) {
        console.log("noneIsEmpty", "Go Ahead Create A Car");
        // CREATE A Car

        const bodyToSend = {
          modelName: this.carForm.modelName,
          modelYear: this.carForm.modelYear,
          color: this.carForm.color,
          status: "active",
          carStatus: this.carForm.carStatus,
          carType: this.carForm.carType,
          costOfAquiring: this.carForm.costOfAquiring,
          carWorkingCity: this.carForm.carWorkingCity, //ACCRA GHANA
          carOwnerId: this.carForm.carOwnerId.id,// OWNERID
          currentDriverId: this.carForm.currentDriverId.id, // FULL DRIVER DETAILS
          serviceType: this.carForm.serviceType, // UBER-SERVICES, TAXI-SERVICES, DUMP-TRACK-SEVICES
          dateRegistered: this.carForm.dateRegistered, // 22ND MARCH 2021
          carNumber: this.carForm.carNumber, // GS 4567 - 20
          costOfShipping: this.carForm.costOfShipping, // $890
          costOfClearing: this.carForm.costOfClearing, // GHC 39493
          costOfSettingUp: this.carForm.costOfSettingUp, // GHC 7,000
        }

        //
        console.log(JSON.stringify(bodyToSend));
        this.$store.dispatch('car/createCar', bodyToSend)
        .then((car) => {
          console.log("Yess", car);
        }).catch((err) => {
          console.log(err.message);
        })
        // console.log(driverId, ownerId);
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
