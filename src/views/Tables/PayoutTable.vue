<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}} <button @click.prevent="handleOpenAddPayoutModal" class="btn btn-warning">Add New Payout</button>
          </h3>
        </div>
        <div class="col-sm-2">

        </div>
        <div class="col">
            <h1>{{getTotalPayouts}}</h1>
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
          <th>Date Paid</th>
          <th>Owner Details</th>
          <th>Amount</th>
          <th>Payment Status</th>
          <th>Next Payout Date</th>
          <th>Payment Method</th>
          <th>Days Remaining</th>
          <th>Amount Remaining</th>
        </template>
        <!--
        owner: { fullName: 'Koomson Fredrick', id: 'ududuud' },
        amount: "400",
        paymentMethod: "VODAFONE_CASH",
        paymentStatus: "SENT_BY_KEHILLAH",
        payoutDate: new Date(),
        periodPayoutCovers: "6",
        periodLeft: "800",
        remainingExpectedPayout: "40000",
        nextExpectedPayoutDate: new Date(),
       -->

        <template slot-scope="{row}">
          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>
              <template>
                <button @click.prevent="handleOpenEditExpenseModal(row)" class="dropdown-item">Edit</button>
                <button @click.prevent="handleDeleteExpense(row.id)" class="dropdown-item">Delete</button>
              </template>
            </base-dropdown>
          </td>

          <td scope="owner-details">
            {{row.payoutDate.split("T")[0]}}
          </td>

          <td scope="owner-details">
            {{row.owner.fullName}}
          </td>

          <td scope="amount">
            GHC {{row.amount}}
          </td>


          <td class="payment-status">
            {{row.paymentStatus}}
          </td>

          <td scope="amount">
            {{row.nextExpectedPayoutDate.split("T")[0]}}
          </td>


          <td class="payment-methods">
            {{row.paymentMethod}}<br>
          </td>

          <td class="days-remaining">
            {{row.periodLeft}} days
          </td>

          <td class="remaining-amounbt">
            GHC {{row.remainingExpectedPayout}}
          </td>

        </template>

      </base-table>
    </div>

      <div class="container">
        <div class="row">
            <div class="col-md-4">
                <modal :show.sync="modals.addPayoutModal"
                       body-classes="p-0"
                       modal-classes="modal-dialog-centered modal-sm">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h3>Add Owner Payout</h3>
                            </div>
                            <form role="form">
                                <h5 class="text-uppercase text-muted">Owner</h5>
                                <multiselect label="fullName" v-model="payoutForm.owner" :options="owner.owners"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Payment Method</h5>
                                <multiselect v-model="payoutForm.paymentMethod" :options="paymentMethods"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Payment Status</h5>
                                <multiselect  v-model="payoutForm.paymentStatus" :options="paymentStatuss"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Amount</h5>
                                <base-input
                                   v-model="payoutForm.amount"
                                   addon-left-icon="ni ni-money-coins"
                                   placeholder="Eg. GHC 450">
                                 </base-input>


                                  <h5 class="text-uppercase text-muted">Payout Date</h5>
                                   <base-input addon-left-icon="ni ni-calendar-grid-58">
                                         <flat-pickr slot-scope="{focus, blur}"
                                                      @on-open="focus"
                                                      @on-close="blur"
                                                      :config="{allowInput: true}"
                                                      class="form-control datepicker"
                                                      v-model="payoutForm.payoutDate"
                                                      >
                                         </flat-pickr>
                                     </base-input>

                                   <h5 class="text-uppercase text-muted">Days Payout Covers</h5>
                                   <base-input
                                      v-model="payoutForm.periodPayoutCovers"
                                      placeholder="Payout Period"
                                      >
                                    </base-input>

                                    <h5 class="text-uppercase text-muted">Days Left</h5>
                                    <base-input
                                       v-model="payoutForm.periodLeft"
                                       placeholder="Period Left"
                                       >
                                     </base-input>

                                     <h5 class="text-uppercase text-muted">Remaining Expected Amount</h5>
                                     <base-input
                                        v-model="payoutForm.remainingExpectedPayout"
                                        placeholder="Amount Left"
                                        >
                                      </base-input>

                                      <h5 class="text-uppercase text-muted">Next Payment Date</h5>
                                       <base-input addon-left-icon="ni ni-calendar-grid-58">
                                             <flat-pickr slot-scope="{focus, blur}"
                                                          @on-open="focus"
                                                          @on-close="blur"
                                                          :config="{allowInput: true}"
                                                          class="form-control datepicker"
                                                          v-model="payoutForm.nextExpectedPayoutDate"
                                                          >
                                             </flat-pickr>
                                         </base-input>

                                <div class="text-center">
                                    <base-button
                                      @click.prevent="handleAddOwnerPayout"
                                      type="primary"
                                      class="my-4">
                                      Add Expense
                                    </base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </modal>
            </div>
        </div>


        <div class="row">
            <div class="col-md-4">
                <modal :show.sync="modals.editPayoutModal"
                       body-classes="p-0"
                       modal-classes="modal-dialog-centered modal-sm">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h3>Add Car Expense</h3>
                            </div>
                            <form role="form">
                                <h5 class="text-uppercase text-muted">Year</h5>
                                <multiselect v-model="editPayoutForm.year" :options="years"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Month</h5>
                                <multiselect v-model="editPayoutForm.month" :options="months"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Select A Car</h5>
                                <multiselect :custom-label="driverCarNumber" label="carNumber" v-model="selectedCar" :options="car.cars"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Amount</h5>
                                <base-input
                                   v-model="editPayoutForm.amount"
                                   addon-left-icon="ni ni-money-coins"
                                   placeholder="Eg. GHC 450"
                                   >
                                 </base-input>


                                 <h5 class="text-uppercase text-muted">Details</h5>
                                 <base-input
                                    v-model="editPayoutForm.other.details"
                                    placeholder="Details"
                                    >
                                  </base-input>

                                <div class="text-center">
                                    <base-button
                                      @click.prevent="handleEditMonthlyExpense"
                                      type="primary"
                                      class="my-4">
                                      Edit Expense
                                    </base-button>
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
import {mapState} from 'vuex';

  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    created (){
      // fetch all insurance
      if (this.$store.state.car.carMonthlyexpenses.length < 1) {
        this.$store.dispatch('car/fetchCarMonthlyexpenses').then(() =>{
          console.log(this.car.carMonthlyexpenses );
        });
      }

      if (this.$store.state.car.cars.length < 1) {
        this.$store.dispatch('car/fetchCars').then(() =>{
          console.log(this.car.cars );
        });
      }

      if (this.$store.state.owner.owners.length < 1) {
        this.$store.dispatch('owner/fetchOwners').then(() =>{
          console.log(this.owner.owners );
        });
      }

      if (this.$store.state.payout.payouts.length < 1) {
        this.$store.dispatch('payout/fetchPayouts').then(() =>{
          console.log("PAYOUT======", this.payout.payouts );
        });
      }
    },
    data() {
      return {
        total: 30,
        selectedCar: { driver: {fullName: ''}, carNumber: 'Selecet A Car' },
        details: '',
        payoutForm: {
          owner: { fullName: 'Koomson Fredrick', id: 'ududuud' },
          amount: "400",
          paymentMethod: "VODAFONE_CASH",
          paymentStatus: "SENT_BY_KEHILLAH",
          payoutDate: new Date(),
          periodPayoutCovers: "6",
          periodLeft: "800",
          remainingExpectedPayout: "40000",
          nextExpectedPayoutDate: new Date(),
        },// monthly expenses

        modals:{
          addPayoutModal: false,
          editPayoutModal: false,
        },//modals end

        paymentMethods: [
          'VODAFONE_CASH',
          'BANK_TRANSFER',
          'PHYSICAL_CASH',
        ],

        paymentStatuss: [
          'SENT_BY_KEHILLAH',
          'RECEIVED_BY_OWNER',
          'TRANSACTION_FAILED',
        ],

        years: [
          '2020',
          '2021',
          '2022',
          '2023',
          '2024',
          '2025',
          '2026',
          '2027',
          '2028',
          '2029',
          '2030'
        ],

        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'Septmeber',
          'October',
          'Novemeber',
          'December',
        ],

        editPayoutForm: { other: {details: ''} },

      }
    },
    computed: {
      ...mapState(['car', 'payout', 'owner']),
      tableData(){
        return this.payout.payouts
      },
      getTotalPayouts(){
        let count = 0
        this.car.carMonthlyexpenses.forEach((item) => {
          count += parseInt(item.amount)
        });
        return `Total: GHC ${count.toString().split( /(?=(?:...)*$)/ )}`
      },
    },
    methods: {
      getLatestData() {
        this.$store.dispatch('car/fetchCarMonthlyexpenses').then(() =>{
            console.log(this.car.carMonthlyexpenses );
        });
      },

      handleOpenAddPayoutModal(){
        this.modals.addPayoutModal = true;
      },

      handleOpenEditExpenseModal(row){
        this.modals.editPayoutModal = true;
        this.editPayoutForm = row;
        this.selectedCar = row.car;
      },

      handleAddOwnerPayout(){

        let finalBody   = { ...this.payoutForm };
        const ownerId   = finalBody.owner.id;
        delete finalBody.owner
        finalBody = { ownerId, ...finalBody }

        const isNotEmpty = this.validateBody(finalBody)

        if (isNotEmpty) {

          console.log(finalBody);
          //
          this.$store.dispatch('payout/createPayout', finalBody)
          .then(() => {
            this.modals.addPayoutModal = false;
            this.$notify({
              type: 'success',
              title: `Payout Successfully Added`,
            });
          }).catch((error) => {
            this.modals.addPayoutModal = false;
            this.$notify({
              type: 'danger',
              title: `Status Failed To Add: Error => ${error.message}`,
            });
          });

        } else {
          console.log(isNotEmpty);
          this.$notify({
            type: 'danger',
            title: `Error => Please Fill All Fields`,
          });
        }


      },//handleAddOwnerPayout

      handleEditMonthlyExpense(){
        //EDIT STUFF
        const monthlyExpenseDataToUpdate = {
          year: this.editPayoutForm.year,
          month: this.editPayoutForm.month,
          amount: this.editPayoutForm.amount,
          other: this.editPayoutForm.other,
          carId: this.selectedCar.id
        }
        const monthlyExpenseId = this.editPayoutForm.id;

        this.$store.dispatch('car/editMonthlyExpense', {
          monthlyExpenseId, monthlyExpenseDataToUpdate
        })
        .then(() => {
          this.modals.editPayoutModal = false;
          this.$notify({
            type: 'success',
            title: `Monthly Expense Successfully Added`,
          });
        }).catch((error) => {
          this.modals.editPayoutModal = false;
          this.$notify({
            type: 'danger',
            title: `Status Failed To Add: Error => ${error.message}`,
          });
        });
      },

      handleDeleteExpense(id){
        const sureYouWantToDelete = confirm("Are You Sure You Want To delete? ")

        if (sureYouWantToDelete) {
          this.$store.dispatch('car/deleteMonthlyExpense', id)
          .then(() => {
            this.$notify({
              type: 'success',
              title: `Monthly Expense Successfully Deleted`,
            });
          }).catch((error) => {
            this.modals.editPayoutModal = false;
            this.$notify({
              type: 'danger',
              title: `Status Failed To Delete: Error => ${error.message}`,
            });
          });
        } else {
          console.log("do nothing");
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
      },//validateBody

      isNotEmpty(value){
        return value !== '' && value !== undefined && value !== null
      },//isNotEmpty

      driverCarNumber({driver, carNumber}){
        return `${driver.fullName} [${carNumber}]`
      },


    },
  }
</script>
<style>
</style>
