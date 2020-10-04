<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>

        </div>
        <div class="col">

          <h1 class="mb-0" style="padding-left:40%;">{{sumOfShit}}</h1 >
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
          <th>Date</th>
          <th>Driver</th>
          <th>Car</th>
          <th>Amount Received</th>
          <th>Days Ticked</th>
          <th>Status</th>
          <th>Payment Method</th>
          <th>Details</th>

        </template>

        <template slot-scope="{row}">
          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>
              <template>
                <button class="dropdown-item"  @click.prevent="handleEditSalesModal(row)">Edit</button>
                <button class="dropdown-item" @click.prevent="handleDeleteSales(row.id)">Delete</button>
              </template>
            </base-dropdown>
          </td>

          <td scope="dateReceived">
            {{row.dateReceived}}
          </td>

          <td class="driver">
            {{row.driver.fullName}}
          </td>


          <td class="car">
            {{row.car.modelName}}({{row.car.modelYear}})
          </td>


          <td class="amountReceived">
            {{row.amountReceived}}
          </td>

          <td scope="daysTicked">
            {{row.daysSalesAmountCovers}}
          </td>

          <td class="status">
            {{row.status}}
          </td>

          <td class="paymentMethod">
            {{row.paymentMethod}}
          </td>

          <td class="car">
            {{row.details}}
          </td>

        </template>

      </base-table>
    </div>


    <div class="col-md-12">
        <modal :show.sync="modals.editSalesModal"
               body-classes="p-0"
               modal-classes="modal-dialog-centered modal-sm">
            <card type="secondary" shadow
                  header-classes="bg-white pb-5"
                  body-classes="px-lg-5 py-lg-5"
                  class="border-0">
                <template>
                    <div class="text-center text-muted mb-4">
                        <h3>Edit Sales</h3>
                    </div>
                    <form>
                        <div class="pl-lg-4">
                            <div class="row">
                                <div class="col-lg-12">
                                  <h5>Date Received</h5>
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
                                <div class="col-lg-6">
                                    <base-input alternative=""
                                                label="Days Covered"
                                                placeholder="10"
                                                input-classes="form-control-alternative"
                                                v-model="salesForm.daysSalesAmountCovers"
                                    />
                                </div>
                                <div class="col-lg-6">
                                    <base-input alternative=""
                                                label="Amount Rec"
                                                placeholder="450"
                                                input-classes="form-control-alternative"
                                                v-model="salesForm.amountReceived"
                                    />
                                </div>
                            </div>
                            <div class="row">
                              <div class="col-lg-12">

                                <h5>Status</h5>
                                <multiselect v-model="salesForm.status" :options="salesStatus"></multiselect>
                              </div>
                              <div class="col-lg-12">
                                <br>
                                <h5>Payment Method</h5>
                                <multiselect v-model="salesForm.paymentMethod" :options="salesPaymentMethods"></multiselect>
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
                                  <button @click.prevent="handleUpdateSales" class="btn btn-lg btn-primary">Edit Sales Record</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </template>
            </card>
        </modal>
    </div>

  </div>
</template>
<script>
import {mapState} from 'vuex';

  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    beforeCreate (){
      this.$store.dispatch('sales/fetchSaless').then(() =>{
          console.log(this.sales.saless );
      });

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
    data() {
      return {
        total: 30,
        salesForm: {},
        modals: {
          editSalesModal: false
        },

        selectedSalesToEdit: {},

        salesStatus: [
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
      }
    },
    computed: {
      ...mapState(['sales', 'car', 'driver']),
      tableData(){
        return this.sales.saless
      },
      sumOfShit(){
        let count = 0
        if (this.sales.saless) {
          this.sales.saless.forEach((item) => {
            count += parseInt(item.amountReceived)
          });
          return `Total: GHC ${count.toString().split( /(?=(?:...)*$)/ )}`;
        }
        return "Loading......"
      },
    },
    methods: {
      getLatestData() {
        this.$store.dispatch('sales/fetchSaless').then(() =>{
            console.log(this.car.carIncometaxes );
        });
      },
      handleDeleteSales(id){
        console.log("ID: " + id);
        const areYouSure = confirm("Are You Sure You Want To Delete ? ")
        if (areYouSure) {
          this.$store.dispatch('sales/deleteSales', id).then(() =>{
            console.log("Deleted");
            this.$notify({
              type: 'success',
              title: `Sales Deleted successfully`,
            });
          })
          .catch(() => {
            this.$notify({
              type: 'danger',
              title: `Sales Could Not Delete`,
            });
          });
        } else {
          this.$notify({
            type: 'warning',
            title: `Mission Aborted`,
          });
        }
      },

      handleEditSalesModal(row){
        this.salesForm = row;
        this.modals.editSalesModal = true;
      },

      handleUpdateSales(){

        const salesBodyToSend = {
          dateReceived: this.salesForm.dateReceived,
          daysSalesAmountCovers: this.salesForm.daysSalesAmountCovers,
          amountReceived: this.salesForm.amountReceived,
          paymentMethod: this.salesForm.paymentMethod,
          status: this.salesForm.status,
          details: this.salesForm.details,
        }

        console.log(JSON.stringify(salesBodyToSend));

        this.$store.dispatch('sales/editSales', {
          salesId: this.salesForm.id,
          salesDataToUpdate: salesBodyToSend,
        }).then(() =>{
          this.modals.editSalesModal = false
          console.log("Deleted");
          this.$notify({
            type: 'success',
            title: `Sales Updated successfully`,
          });
        })
        .catch((err) => {
          this.modals.editSalesModal = false
          this.$notify({
            type: 'danger',
            title: `Sales Failed To Update Because: ${err}`,
          });
        });

      },


    },
  }
</script>
<style>
</style>
