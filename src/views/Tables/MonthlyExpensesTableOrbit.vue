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
        </template>

        <template slot-scope="{row}">
          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>
              <template>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
              </template>
            </base-dropdown>
          </td>

          <td scope="year">
            <pre>{{row.year}}</pre>
          </td>

          <td scope="month">
            {{row.month}}
          </td>

          <td class="amount">
            {{row.amount}}
          </td>

          <td class="car">
            {{row.car.modelName}}
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
                                    <base-button @click.prevent="handleAddMonthlyExpenseToCar" type="primary" class="my-4">Submit</base-button>
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

      }
    },
    computed: {
      ...mapState(['car']),
      tableData(){
        return this.car.carMonthlyexpenses
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

      handleAddMonthlyExpenseToCar(){
        let finalBody  = {...this.monthlyExpenseForm, carId: this.selectedCar.id}
        const isNotEmpty = this.validateBody(finalBody)
        if (isNotEmpty) {
          finalBody = {...finalBody, others:{details: this.details}}
          alert(JSON.stringify(finalBody));
        //   store.dispatch('car/addMonthlyexpense', {
        //     monthlyexpenseDetails: {...this.monthlyExpenseForm, carId: this.currentlySelectedCAr.id}
        //   })
        //   .then((car) =>{
        //     this.modals.addMonthlyExpense = false;
        //     this.$notify({
        //       type: 'success',
        //       title: `Monthly Expense Successfully Added To ${car.modelName}`,
        //     });
        //   }).catch((error) => {
        //     this.modals.addMonthlyExpense = false;
        //     this.$notify({
        //       type: 'danger',
        //       title: `Status Failed To Add: Error => ${error.message}`,
        //     });
        //   });
        } else {
          console.log(isNotEmpty);
          this.$notify({
            type: 'danger',
            title: `Error => Please Fill All Fields`,
          });
        }


      },//handleAddMonthlyExpenseToCar


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
