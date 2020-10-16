<template>
  <!-- eslint-disable -->
  <div>
    <div class="card shadow">
      <div class="card-header border-0">
        <div class="row align-items-center">


          <b-container fluid>
            <div class="row">
              <div class="col">
                <h3 class="mb-0">
                  {{title}} <router-link class="btn btn-primary" to="/dashboard/add-a-sales">ADD A NEW SALES RECORD..</router-link>
                </h3>
              </div>

              <div class="col">
                <h1   style="margin-left: 35%" class="mb-0">{{sumOfShit}}</h1 >
              </div>
            </div>
              <br>
              <div class="row">
                <div class="col-sm-6">
                  <b-form-group>
                    Filter
                    <b-input-group >
                      <b-input
                        v-model="filter"
                        type="search"
                        id="filterInput"
                        placeholder="Type to Search"
                      >
                    </b-input>
                      <b-input-group-append>
                        <base-button :disabled="!filter" @click="filter = ''">Clear</base-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </div>
                <div class="col-sm-2">
                  <b-form-group
                    style="margin-top: 12%"
                  >

                    Per Page <br>
                    <b-form-select

                      v-model="perPage"
                      id="perPageSelect"
                      size="sm"
                      :options="pageOptions"
                    ></b-form-select>
                  </b-form-group>
                </div>
                <div   style="margin-top: 4%" class="col-sm-4">

                  <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    size="sm"
                    class="my-0"
                    variant="secondary"
                  ></b-pagination>
                </div>
              </div>



          <div class="table-responsive dark">
            <b-table
              class="table align-items-center table-flush"
              :items="items"
              :fields="fields"
              caption-top
              show-empty
              small
              id="printableTable"
              stacked="md"
              :current-page="currentPage"
              :per-page="perPage"
              :filter="filter"
              :filterIncludedFields="filterOn"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              @filtered="onFiltered"
              >

              <template v-slot:cell(actions)="data">
                  <base-dropdown class="dropdown"
                                 position="left">
                    <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <template>
                      <button class="dropdown-item"  @click.prevent="handleEditSalesModal(data.item)">Edit</button>
                      <button class="dropdown-item" @click.prevent="handleDeleteSales(data.item.id)">Delete</button>
                      <button class="dropdown-item" @click.prevent="handleSendSmsToDriver(data.item)">Send Driver Sms</button>
                    </template>
                  </base-dropdown>
              </template>

              <template v-slot:cell(dateReceived)="data">
                {{ data.item.dateReceived }}
              </template>

              <template v-slot:cell(driver)="data">
                {{ data.item.driver.fullName }}
              </template>

              <template v-slot:cell(car)="data">
                {{ data.item.car.modelName }}<br>
                {{ data.item.car.modelYear }}<br>
                {{ data.item.car.carNumber }}<br>
              </template>

              <template v-slot:cell(amount)="data">
                GHC {{ data.item.amountReceived }}
              </template>

              <template v-slot:cell(daysSalesAmountCovers)="data">
                 {{ data.item.daysSalesAmountCovers }}
              </template>

              <template v-slot:cell(status)="data">
                <badge class="badge-dot mr-4" :type="getStatusColor(data.item.status)">
                  <i :class="`bg-${getStatusColor(data.item.status)}`"></i>
                  <span class="status">{{data.item.status}}</span>
                </badge>
              </template>

            </b-table>
          </div>
          </b-container>

        </div>
      </div>
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
import { WFClient } from 'witty-flow-sms';
import {mapState} from 'vuex';

  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
      fields: {
        type: Array,
        required: true,
      },
    },
    data () {
      return {
        title: 'All Sales Table',
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
        editModal: {
          modalId: 'edit-modal',
          name: '',
          description: '',
          editId: '',
          title: ''
        },
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, 20],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],

        total: 30,
        salesForm: {},
        modals: {
          editSalesModal: false
        },
        selectedSalesToEdit: {},
        filterData: "",
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

      };
    },
    methods: {
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      getStatusColor(status) {
        const statusColors = {
          'DRIVER_YET_TO_SEND': 'danger',
          'SENT_BY_DRIVER': 'info',
          'PENDING_RECEIPT': 'primary',
          'RECEIVED_BY_KEHILLAH': 'success',
        }
        return statusColors[`${status}`]
      },//getStatusColor

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

      getNumberOfDaysFromSales(sales, period){
        const periodData = {
          'PROBATION' : 24 + 24,
          'WORKING': 900 + 24,
        }
        let count = 0;
        sales.forEach((item) => {
          if (item.status === 'RECEIVED_BY_KEHILLAH') {
            count += parseInt(item.daysSalesAmountCovers);
          }
        });

        let daysLeft = periodData[`${period}`] - count;

        if (daysLeft === 0) {
          daysLeft = `You Have Completed The ${period} Period. Congrats!!`
        } else {
          daysLeft = `You Have ${daysLeft} out of ${periodData[`${period}`] - 24} days left to complete the ${period} period.`
        }
        return {
          daysDone: count,
          daysLeft,
        };
      },

      handleSendSmsToDriver(data){
        const wittySmsClient = new WFClient('1f41908b-a9d7-4408-a0bf-4ee4665b3276', 'CvAILbsSdfjGAVVZr6RG0zgBv5jHUioh88vCuHu914');
        const record = this.getNumberOfDaysFromSales(data.driver.sales, data.driver.driverStatus)
        const message = `Hi, ${data.driver.fullName}. We have received an amount of GHC ${data.amountReceived} via ${data.paymentMethod}. This covers ${data.daysSalesAmountCovers} days of expected sales. This Means ${record.daysLeft} Good Job!`
        // data.driver.phoneNumber
        wittySmsClient.sendSms('Kehillah', data.driver.phoneNumber, message)
        .then((resp) => {
          console.log(resp);
          wittySmsClient.sendSms('Kehillah', '0277119919', message)
          this.$notify({
            type: 'success',
            title: `Sms Sent Successfully`,
          });
        }).catch((error) => {
          console.log(error);
          this.$notify({
            type: 'danger',
            title: `Sms Failed To Send: ${error.message}`,
          });
        })
      },

    },
    mounted() {
      this.totalRows = this.items.length
      console.log(this.totalRows);
    },
    computed: {
      ...mapState(['sales', 'car', 'driver']),
      sortOptions() {
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
      sumOfShit(){
        let count = 0
        if (this.sales.saless) {
          this.sales.saless.forEach((item) => {
            if (item.status === 'RECEIVED_BY_KEHILLAH') {
              count += parseInt(item.amountReceived)
            }
          });
          return `Total: GHC ${count.toString().split( /(?=(?:...)*$)/ )}`;
        }
        return "Loading......"
      },
    },
}
</script>

<style media="screen" scoped>
.page-item.active .page-link {
  background-color: red !important;
  border-color: red !important;
}
</style>
