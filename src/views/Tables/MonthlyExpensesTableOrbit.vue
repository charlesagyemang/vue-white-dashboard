<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}} <button @click.prevent="handleOpenAddExpenseModal" class="btn btn-warning">Add New Expense</button>
          </h3>
        </div>
        <div class="col-sm-2">

        </div>
        <div class="col">
            <h1>{{getTotalExpenses}}</h1>
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
          <th>Year</th>
          <th>Month</th>
          <th>Amount</th>
          <th>Car</th>
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
                <button @click.prevent="handleOpenEditExpenseModal(row)" class="dropdown-item">Edit</button>
                <button @click.prevent="handleDeleteExpense(row.id)" class="dropdown-item">Delete</button>
              </template>
            </base-dropdown>
          </td>

          <td scope="year">
            {{row.year}}
          </td>

          <td scope="month">
            {{row.month}}
          </td>

          <td class="amount">
            {{row.amount}}
          </td>

          <td class="car">
            {{row.car.modelName}}<br>
            {{row.car.modelYear}}<br>
            {{row.car.driver.fullName}}<br>
          </td>

          <td v-if="row.other" class="details">
            {{row.other.details}}
          </td>

          <td v-else class="details">
          </td>
        </template>

      </base-table>
    </div>

      <div class="container">
        <div class="row">
            <div class="col-md-4">
                <modal :show.sync="modals.addMonthlyExpenseModal"
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
                                <multiselect v-model="monthlyExpenseForm.year" :options="years"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Month</h5>
                                <multiselect v-model="monthlyExpenseForm.month" :options="months"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Select A Car</h5>
                                <multiselect :custom-label="driverCarNumber" label="carNumber" v-model="selectedCar" :options="car.cars"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Amount</h5>
                                <base-input
                                   v-model="monthlyExpenseForm.amount"
                                   addon-left-icon="ni ni-money-coins"
                                   placeholder="Eg. GHC 450"
                                   >
                                 </base-input>


                                 <h5 class="text-uppercase text-muted">Details</h5>
                                 <base-input
                                    v-model="details"
                                    placeholder="Details"
                                    >
                                  </base-input>

                                <div class="text-center">
                                    <base-button
                                      @click.prevent="handleAddMonthlyExpenseToCar"
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
                <modal :show.sync="modals.editMonthlyExpenseModal"
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
                                <multiselect v-model="editMonthlyExpenseForm.year" :options="years"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Month</h5>
                                <multiselect v-model="editMonthlyExpenseForm.month" :options="months"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Select A Car</h5>
                                <multiselect :custom-label="driverCarNumber" label="carNumber" v-model="selectedCar" :options="car.cars"></multiselect>

                                <br>
                                <h5 class="text-uppercase text-muted">Amount</h5>
                                <base-input
                                   v-model="editMonthlyExpenseForm.amount"
                                   addon-left-icon="ni ni-money-coins"
                                   placeholder="Eg. GHC 450"
                                   >
                                 </base-input>


                                 <h5 class="text-uppercase text-muted">Details</h5>
                                 <base-input
                                    v-model="editMonthlyExpenseForm.other.details"
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
    },
    data() {
      return {
        total: 30,

        selectedCar: { driver: {fullName: ''}, carNumber: 'Selecet A Car' },
        details: '',

        monthlyExpenseForm: {
          year: '',
          month: '',
          amount: '',
        },// monthly expenses

        modals:{
          addMonthlyExpenseModal: false,
          editMonthlyExpenseModal: false,
        },//modals end

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

        editMonthlyExpenseForm: { other: {details: ''} },

      }
    },
    computed: {
      ...mapState(['car']),
      tableData(){
        return this.car.carMonthlyexpenses
      },
      getTotalExpenses(){
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

      handleOpenAddExpenseModal(){
        this.modals.addMonthlyExpenseModal = true;
      },

      handleOpenEditExpenseModal(row){
        this.modals.editMonthlyExpenseModal = true;
        this.editMonthlyExpenseForm = row;
        this.selectedCar = row.car;
      },

      handleAddMonthlyExpenseToCar(){

        let finalBody  = {...this.monthlyExpenseForm, carId: this.selectedCar.id}
        const isNotEmpty = this.validateBody(finalBody)

        if (isNotEmpty) {

          finalBody = { ...finalBody, other:{ details: this.details } }

          this.$store.dispatch('car/addMonthlyexpense', {
            monthlyexpenseDetails: finalBody,
          })
          .then(() => {
            this.modals.addMonthlyExpenseModal = false;
            this.$notify({
              type: 'success',
              title: `Monthly Expense Successfully Added`,
            });
          }).catch((error) => {
            this.modals.addMonthlyExpenseModal = false;
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


      },//handleAddMonthlyExpenseToCar

      handleEditMonthlyExpense(){
        //EDIT STUFF
        const monthlyExpenseDataToUpdate = {
          year: this.editMonthlyExpenseForm.year,
          month: this.editMonthlyExpenseForm.month,
          amount: this.editMonthlyExpenseForm.amount,
          other: this.editMonthlyExpenseForm.other,
          carId: this.selectedCar.id
        }
        const monthlyExpenseId = this.editMonthlyExpenseForm.id;

        this.$store.dispatch('car/editMonthlyExpense', {
          monthlyExpenseId, monthlyExpenseDataToUpdate
        })
        .then(() => {
          this.modals.editMonthlyExpenseModal = false;
          this.$notify({
            type: 'success',
            title: `Monthly Expense Successfully Added`,
          });
        }).catch((error) => {
          this.modals.editMonthlyExpenseModal = false;
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
            this.modals.editMonthlyExpenseModal = false;
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
