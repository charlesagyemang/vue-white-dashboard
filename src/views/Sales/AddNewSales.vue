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
                                <h3 class="mb-0">Fill The Form below To Add SALES <router-link class="btn btn-primary" to="/dashboard/sales-list">View All Sales</router-link></h3>
                            </div>
                        </div>
                    </div>
                    <template>
                        <form>

                            <div class="pl-lg-4">
                                <div class="row">
                                    <div class="col-lg-3">
                                      <h5 class="text-uppercase text-muted">Date Received</h5>
                                      <base-input addon-left-icon="ni ni-calendar-grid-58">
                                            <flat-pickr slot-scope="{focus, blur}"
                                                         @on-open="focus"
                                                         @on-close="blur"
                                                         :config="{allowInput: true}"
                                                         class="form-control datepicker"
                                                         v-model="salesForm.dateReceived"
                                                         >
                                            </flat-pickr>
                                        </base-input>
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
                                  <div class="col-lg-6">

                                    <h5>Status</h5>
                                    <multiselect v-model="salesForm.status" :options="salesStatus"></multiselect>
                                  </div>
                                  <div class="col-lg-6">

                                    <h5>Payment Method</h5>
                                    <multiselect v-model="salesForm.paymentMethod" :options="salesPaymentMethods"></multiselect>
                                  </div>
                                  <div class="col-lg-6">
                                    <br>
                                      <h5>Select Driver</h5>
                                      <multiselect v-model="salesForm.driver" label="fullName" :options="driver.drivers"></multiselect>
                                  </div>
                                  <div class="col-lg-6">
                                    <br>
                                    <h5>Select Car</h5>
                                    <multiselect v-model="salesForm.car" label="carNumber" :options="car.cars"></multiselect>

                                  </div>

                                    <div class="col-lg-12">
                                      <br>
                                        <base-input alternative=""
                                                    label="Details"
                                                    placeholder="Details Of Sales"
                                                    input-classes="form-control-alternative"
                                                    v-model="salesForm.details"
                                        />
                                    </div>
                                    <div class="container">
                                      <button @click.prevent="handleAddSales" class="btn btn-lg btn-primary">Add Sales</button>
                                    </div>
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
        dateReceived: '',
        daysSalesAmountCovers: '6',
        amountReceived: '450',
        amount: '450',
        paymentMethod: 'VODAFONE_CASH',
        car: '',
        driver: '',
        status: 'DRIVER_YET_TO_SEND',
        details: 'Week {Number} {Period} Sales',
      },
      salesStatus: [
        'DRIVER_YET_TO_SEND',
        'SENT_BY_DRIVER',
        'PENDING_RECEIPT',
        'RECEIVED_BY_KEHILLAH'
      ],
      salesPaymentMethods: [
        'MTN_MOBILE_MONEY',
        'VODAFONE_CASH',
        'AIRTEL_TIGO_MONEY',
        'GCB_BANK_DEPOSIT',
        'PHYSICAL_CASH',
      ],
    }// end of data
  },
  methods: {
    handleAddSales() {

      let salesBodyToSend = {
          dateReceived: this.salesForm.dateReceived,
          daysSalesAmountCovers: this.salesForm.daysSalesAmountCovers,
          amountReceived: this.salesForm.amountReceived,
          amount: this.salesForm.amount,
          paymentMethod: this.salesForm.paymentMethod,
          carId: "",
          driverId: "",
          status: this.salesForm.status,
      }

      if (this.salesForm.driver && this.salesForm.driver.id) {
        salesBodyToSend.driverId = this.salesForm.driver.id
      }

      if (this.salesForm.car && this.salesForm.car.id) {
        salesBodyToSend.carId = this.salesForm.car.id
      }

      console.log(JSON.stringify(salesBodyToSend));


      const noneIsEmpty = this.validateBody(salesBodyToSend);
      if (noneIsEmpty) {
        console.log("noneIsEmpty", "Go Agead Create Owner");
        // CREATE SALES
        salesBodyToSend = {...salesBodyToSend, details: this.salesForm.details}
        this.$store.dispatch('sales/createSales', salesBodyToSend).then((sales) =>{
          console.log("==== Created ====", sales);
          this.$router.push({
            path: '/dashboard/sales-list',
          });
          this.$notify({
            type: 'success',
            title: `Sales Created successfully`,
          });
        });
      } else {
          this.$notify({
            type: 'danger',
            title: `ERROR: Please Make Sure All Fields Are Filled`,
          });
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
