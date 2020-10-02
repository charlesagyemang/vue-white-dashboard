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
                                <h3 class="mb-0">Fill The Form below To Add SALES <router-link class="btn btn-primary" to="/dashboard/owner-list">View All Owners</router-link></h3>
                            </div>
                        </div>
                    </div>
                    <template>
                        <form>

                            <div class="pl-lg-4">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <base-input alternative=""
                                                    label="Date Received"
                                                    placeholder="Date Received"
                                                    input-classes="form-control-alternative"
                                                    v-model="salesForm.dateReceived"
                                        />
                                    </div>
                                    <div class="col-lg-3">
                                        <base-input alternative=""
                                                    label="Days Sales Covers"
                                                    placeholder="10"
                                                    input-classes="form-control-alternative"
                                                    v-model="salesForm.daysSalesAmountCovers"
                                        />
                                    </div>
                                    <div class="col-lg-3">
                                        <base-input alternative=""
                                                    label="Amount Received"
                                                    placeholder="450"
                                                    input-classes="form-control-alternative"
                                                    v-model="salesForm.amountReceived"
                                        />
                                    </div>
                                    <div class="col-lg-3">
                                        <base-input alternative=""
                                                    label="Amount Expected"
                                                    placeholder="450"
                                                    input-classes="form-control-alternative"
                                                    v-model="salesForm.amount"
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                  <div class="col-lg-3">
                                    <h5>Status</h5>
                                    <multiselect v-model="salesForm.status" :options="salesStatus"></multiselect>
                                  </div>
                                  <div class="col-lg-3">
                                    <h5>Payment Method</h5>
                                    <multiselect v-model="salesForm.paymentMethod" :options="salesPaymentMethods"></multiselect>
                                  </div>
                                  <div class="col-lg-3">
                                      <h5>Select Driver</h5>
                                      <multiselect v-model="salesForm.driver" label="fullName" :options="driver.drivers"></multiselect>
                                  </div>
                                  <div class="col-lg-3">
                                    <h5>Select Car</h5>
                                    <multiselect v-model="salesForm.car" label="modelName" :options="car.cars"></multiselect>

                                  </div>

                                    <div class="col-lg-12">
                                        <base-input alternative=""
                                                    label="Details"
                                                    placeholder="Details Of Sales"
                                                    input-classes="form-control-alternative"
                                                    v-model="salesForm.details"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4" />
                            <div class="pl-lg-4">
                              <button @click.prevent="handleCreateOwner" class="btn btn-primary">Add Sales</button>
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

import {mapState} from 'vuex';

export default {
  beforeCreate(){
    if (this.$store.state.driver.drivers.length < 1) {
      this.$store.dispatch('driver/fetchDrivers').then(() =>{
          console.log("Driver", this.driver.drivers );
      });
    }

    if (this.$store.state.car.cars.length < 1) {
      this.$store.dispatch('car/fetchCars').then(() =>{
          console.log("Cars", this.car.cars );
      });
    }
  },
  computed: {
    ...mapState(['driver', 'car']),
  },
  data(){
    return {
      model: {
        fullName: '',
        email: '',
        phoneNumber: '',
        alternatePhoneNumber: '',
        imageUrl: '/img/cars/picanto2.jpg',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        other: {},
      },
      salesForm: {
        dateReceived: '12th March 2020',
        daysSalesAmountCovers: '10',
        amountReceived: '500',
        amount: '500',
        paymentMethod: 'VODAFONE_CASH',
        carId: '',
        driverId: '',
        status: 'SENT_BY_DRIVER',
        details: 'Sales for the week',
      },
      salesStatus: [
        'SENT_BY_DRIVER',
        'PENDING_RECEIPT',
        'RECEIVED_BY_OWNER'
      ],
      salesPaymentMethods: [
        'MTN_MOBILE_MONEY',
        'VODAFONE_CASH',
        'AIRTEL_TIGO_MONEY',
        'GCB_BANK_DEPOSIT',
      ],
    }// end of data
  },
  methods: {
    handleCreateOwner() {
      const noneIsEmpty = this.validateBody(this.model);
      if (noneIsEmpty) {
        console.log("noneIsEmpty", "Go Agead Create Owner");
        // CREATE OWNER
        this.$store.dispatch('owner/createOwner', this.model).then((owner) =>{
          console.log("==== Created ====", owner);
          this.$router.push({
            path: '/dashboard/owner-list',
          });
          this.$notify({
            type: 'success',
            title: `Owner Created successfully`,
          });

        });
        alert(JSON.stringify(this.model));
      } else {
        alert("Error!! Please Fill All Required Fields")
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
