<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
          {{title}}  <router-link to="/dashboard/add-a-car" class="btn btn-primary">ADD A NEW CAR</router-link>
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
          <th>Model</th>
          <th>Car Number</th>
          <th>Car Status</th>
          <th>Cost</th>
          <th>OP City</th>
          <th>Owner</th>
          <th>Driver</th>
          <th>Insurnace</th>
          <th>Road Worthy</th>
          <th>Income Taxes</th>
          <th>Monthly Expenses</th>
          <th>Document Links</th>


        </template>

        <template slot-scope="{row}">

          <td class="more-actions">
            <base-dropdown class="dropdown"
                           position="left">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <button @click.prevent="handleOwnerActions(row.id, `/dashboard/view-single-car/${row.id}`)" class="dropdown-item">View Full Details</button>
                <button @click.prevent="handleOwnerActions(row.id, `/dashboard/edit-single-car/${row.id}`)" class="dropdown-item">Edit Car</button>
                <button @click="handleModalOpenings(row, 'updateCarStatusModal')" class="dropdown-item">Update Car Status</button>
                <button @click="handleModalOpenings(row, 'addInsurance')" class="dropdown-item">Add Insurance</button>
                <button @click="handleModalOpenings(row, 'addRoadWorthy')" class="dropdown-item">Add Road Worthy</button>
                <button @click="handleModalOpenings(row, 'addIncomeTax')" class="dropdown-item">Add Income Tax</button>
                <button @click="handleModalOpenings(row, 'addMonthlyExpense')" class="dropdown-item">Add Monthly Expense</button>
                <button @click="handleModalOpenings(row, 'addDocumentLink')" class="dropdown-item">Add Document Links</button>
              </template>

            </base-dropdown>
          </td>

          <th scope="row">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Car Image" src="/img/cars/picanto2.jpg">
              </a>
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.modelName}} {{row.modelYear}}</span>
              </div>
            </div>
          </th>

          <td class="car-number">
            {{row.carNumber}}
          </td>


          <td class="status">
           <badge class="badge-dot mr-4" :type="getStatusColor(row.carStatus)">
             <i :class="`bg-${getStatusColor(row.carStatus)}`"></i>
             <span class="status">{{row.carStatus}}</span>
           </badge>
         </td>

          <td class="cost-of-aquiring">
            Aquiring: {{row.costOfAquiring || "NAN"}}<br>
            Shipping: {{row.costOfShipping || "NAN"}}<br>
          </td>

          <td class="op-city">
            {{row.carWorkingCity}}
          </td>

          <td  class="car">
            Name: {{row.owner.fullName}}<br>
            Email: {{row.owner.email}}<br>
            City: {{row.owner.phoneNumber}}<br>
          </td>

          <td v-if="row.driver" class="current-driver">
            Name: {{row.driver.fullName}}<br>
            Location: {{row.driver.email}}<br>
            City: {{row.driver.phoneNumber}}<br>
          </td>

          <td v-else class="current-driver">
            Driver Has Not Been Assigned
          </td>

          <td class="insurance">
            {{row.insurances.length}}
          </td>

          <td class="road-worthy">
            {{row.roadworthies.length}}
          </td>

          <td class="income-tax">
            {{row.incometaxes.length}}
          </td>

          <td class="monthly-expense">
            {{row.monthlyexpenses.length}}
          </td>

          <td class="document-links">
            {{row.documentlinks.length}}
          </td>

        </template>

      </base-table>
    </div>

    <div class="row">

      <div class="col-md-4">
          <modal :show.sync="modals.addInsurance"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Add Insurance For {{currentlySelectedCAr.modelName}}</h3>
                      </div>
                      <form role="form">
                        <h5 class="text-uppercase text-muted">Provider</h5>
                         <base-input
                            v-model="insuranceForm.provider"
                            addon-left-icon="ni ni-key-25"
                            placeholder="E.g SIC Insurance"
                            >
                          </base-input>
                          <h5 class="text-uppercase text-muted">Start Date</h5>
                          <base-input addon-left-icon="ni ni-calendar-grid-58">
                                <flat-pickr slot-scope="{focus, blur}"
                                             @on-open="focus"
                                             @on-close="blur"
                                             :config="{allowInput: true}"
                                             class="form-control datepicker"
                                             v-model="insuranceForm.startDate"
                                             >
                                </flat-pickr>
                            </base-input>

                            <h5 class="text-uppercase text-muted">End Date</h5>
                            <base-input addon-left-icon="ni ni-calendar-grid-58">
                                  <flat-pickr slot-scope="{focus, blur}"
                                               @on-open="focus"
                                               @on-close="blur"
                                               :config="{allowInput: true}"
                                               class="form-control datepicker"
                                               v-model="insuranceForm.endDate"
                                               >
                                  </flat-pickr>
                              </base-input>

                            <h5 class="text-uppercase text-muted">Amount</h5>
                            <base-input
                               v-model="insuranceForm.amount"
                               addon-left-icon="ni ni-money-coins"
                               placeholder="Eg. GHC 450"
                               >
                             </base-input>
                          <div class="text-center">
                              <base-button @click.prevent="handleAddInsuranceToCar" type="primary" class="my-4">Submit</base-button>
                          </div>
                      </form>
                  </template>
              </card>
          </modal>
      </div>

      <div class="col-md-4">
          <modal :show.sync="modals.addRoadWorthy"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Add Road Worthy For {{currentlySelectedCAr.modelName}}</h3>
                      </div>
                      <form role="form">
                          <h5 class="text-uppercase text-muted">Start Date</h5>
                          <base-input addon-left-icon="ni ni-calendar-grid-58">
                                <flat-pickr slot-scope="{focus, blur}"
                                             @on-open="focus"
                                             @on-close="blur"
                                             :config="{allowInput: true}"
                                             class="form-control datepicker"
                                             v-model="roadWorthyForm.startDate"
                                             >
                                </flat-pickr>
                            </base-input>

                            <h5 class="text-uppercase text-muted">End Date</h5>
                            <base-input addon-left-icon="ni ni-calendar-grid-58">
                                  <flat-pickr slot-scope="{focus, blur}"
                                               @on-open="focus"
                                               @on-close="blur"
                                               :config="{allowInput: true}"
                                               class="form-control datepicker"
                                               v-model="roadWorthyForm.endDate"
                                               >
                                  </flat-pickr>
                              </base-input>

                            <h5 class="text-uppercase text-muted">Amount</h5>
                            <base-input
                               v-model="roadWorthyForm.amount"
                               addon-left-icon="ni ni-money-coins"
                               placeholder="Eg. GHC 450"
                               >
                             </base-input>
                          <div class="text-center">
                              <base-button @click.prevent="handleAddRoadWorthyToCar" type="primary" class= "my-4">Submit</base-button>
                          </div>
                      </form>
                  </template>
              </card>
          </modal>
      </div>

      <div class="col-md-4">
          <modal :show.sync="modals.addIncomeTax"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Add Income Tax For {{currentlySelectedCAr.modelName}}</h3>
                      </div>
                      <form role="form">
                        <h5 class="text-uppercase text-muted">Quater</h5>
                         <base-input
                            v-model="incomeTaxForm.quarter"
                            addon-left-icon="ni ni-key-25"
                            placeholder="E.g First Quarter"
                            >
                          </base-input>
                          <h5 class="text-uppercase text-muted">Start Date</h5>
                          <base-input addon-left-icon="ni ni-calendar-grid-58">
                                <flat-pickr slot-scope="{focus, blur}"
                                             @on-open="focus"
                                             @on-close="blur"
                                             :config="{allowInput: true}"
                                             class="form-control datepicker"
                                             v-model="incomeTaxForm.startDate"
                                             >
                                </flat-pickr>
                            </base-input>

                            <h5 class="text-uppercase text-muted">End Date</h5>
                            <base-input addon-left-icon="ni ni-calendar-grid-58">
                                  <flat-pickr slot-scope="{focus, blur}"
                                               @on-open="focus"
                                               @on-close="blur"
                                               :config="{allowInput: true}"
                                               class="form-control datepicker"
                                               v-model="incomeTaxForm.endDate"
                                               >
                                  </flat-pickr>
                              </base-input>

                            <h5 class="text-uppercase text-muted">Amount</h5>
                            <base-input
                               v-model="incomeTaxForm.amount"
                               addon-left-icon="ni ni-money-coins"
                               placeholder="Eg. GHC 450"
                               >
                             </base-input>
                          <div class="text-center">
                              <base-button @click.prevent="handleAddIncomeTaxToCar" type="primary" class="my-4">Submit</base-button>
                          </div>
                      </form>
                  </template>
              </card>
          </modal>
      </div>

      <div class="col-md-4">
          <modal :show.sync="modals.addMonthlyExpense"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Add Monthly Expense For {{currentlySelectedCAr.modelName}}</h3>
                      </div>
                      <form role="form">
                        <h5 class="text-uppercase text-muted">Year</h5>
                         <base-input
                            v-model="monthlyExpenseForm.year"
                            addon-left-icon="ni ni-calendar-grid-58"
                            placeholder="E.g 2020"
                            >
                          </base-input>
                          <h5 class="text-uppercase text-muted">Month</h5>
                           <base-input
                              v-model="monthlyExpenseForm.month"
                              addon-left-icon="ni ni-calendar-grid-58"
                              placeholder="Eg. May"
                              >
                            </base-input>
                            <h5 class="text-uppercase text-muted">Amount</h5>
                            <base-input
                               v-model="monthlyExpenseForm.amount"
                               addon-left-icon="ni ni-money-coins"
                               placeholder="Eg. GHC 450"
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

      <div class="col-md-4">
          <modal :show.sync="modals.addDocumentLink"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Add Document Link For {{currentlySelectedCAr.modelName}}</h3>
                      </div>
                      <form role="form">
                        <h5 class="text-uppercase text-muted">Item Name</h5>
                         <base-input
                            v-model="documentLinksForm.itemName"
                            addon-left-icon="ni ni-single-copy-04"
                            placeholder="E.g Form A"
                            >
                          </base-input>
                          <h5 class="text-uppercase text-muted">Paste Document Link Here</h5>
                           <base-input
                              v-model="documentLinksForm.itemLink"
                              addon-left-icon="ni ni-briefcase-24"
                              placeholder="Eg. https://drive.google.com/738"
                              >
                            </base-input>
                          <div class="text-center">
                              <base-button @click.prevent="handleAddDocumentToCar" type="primary" class="my-4">Submit</base-button>
                          </div>
                      </form>
                  </template>
              </card>
          </modal>
      </div>

      <div class="col-md-4">
          <modal :show.sync="modals.updateCarStatusModal"
                 body-classes="p-0"
                 modal-classes="modal-dialog-centered modal-sm">
              <card type="secondary" shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0">
                  <template>
                      <div class="text-center text-muted mb-4">
                          <h3>Update {{currentlySelectedCAr.modelName}}'s Status</h3>
                      </div>
                      <form role="form">
                         <multiselect
                           v-model="selectedCarStatus"
                           :options="allCarStatusList">
                         </multiselect>
                          <div class="text-center">
                              <base-button @click.prevent="handleUpdateCarStatus" type="success" class="my-4">Update Status</base-button>
                          </div>
                      </form>
                  </template>
              </card>
          </modal>
      </div>

    </div>

  </div>
</template>
<script>

import Modal from '@/components/Modal'
import { mapState } from 'vuex'
import store from '@/store/store'

  export default {
    created() {
      if (store.state.car.cars.length < 1) {
        store.dispatch('car/fetchCars').then(() =>{
            console.log(this.car.cars );
          });
      }
    },
    computed: {
      ...mapState(['car']),
      tableData(){
        return this.car.cars
      },
    },
    components: {
        Modal,
    },
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        selectedCarStatus: '',
        selectedCar: {},
        currentlySelectedCAr: {},
        carForm: {
          driver: '',
          dateRegistered: '',
        },
        allCarStatusList: [
          'BOUGHT',
          'SHIPPED',
          'SETTING_UP',
          'PROBATION',
          'WORKING',
          'SOLD',
          'GIVEN_OUT'
        ],
        modals:{
          updateCarStatusModal: false,
          addDocumentLink: false,
          addMonthlyExpense: false,
          addIncomeTax: false,
          addRoadWorthy: false,
          addInsurance: false,
          modal1: false,
          modal2: false,
          modal3: false,
        },
        total: 30,

        insuranceForm: {
          provider: '',
          startDate: '',
          endDate: '',
          amount: '',
        },// end of insurance form

        roadWorthyForm: {
          startDate: '',
          endDate: '',
          amount: '',
        }, // roadWorhtyEnd

        incomeTaxForm: {
          quarter: '',
          startDate: '',
          endDate: '',
          amount: '',
        },//incomeTax

        monthlyExpenseForm: {
          year: '',
          month: '',
          amount: '',
        },// monthly expenses

        documentLinksForm: {
          itemName: '',
          itemLink: '',
        },// documentLinks Form

      }// end of return
    },
    methods: {
      getStatusColor(status) {
        const statusColors = {
          'BOUGHT': 'dark',
          'SHIPPED': 'danger',
          'SETTING_UP': 'info',
          'PROBATION': 'primary',
          'WORKING': 'success',
          'SOLD': 'danger',
          'GIVEN_OUT': 'success'
        }
        return statusColors[`${status}`]
      },//getStatusColor


      handleModalOpenings(row, modalReference){
        this.modals[modalReference] = true;
        this.currentlySelectedCAr = row;
        this.selectedCarStatus = row;
        this.selectedCarStatus = row.status;
        console.log(JSON.stringify(this.currentlySelectedCAr));
      },//handleModalOpenings

      handleOwnerActions(id, route){
        store.dispatch('car/fetchCarById', id).then((car) =>{
          console.log("==== fetched ====", car);
          this.$notify({
            type: 'success',
            title: `Full Details For ${car.modelName}`,
          });
          this.$router.push({
            path: route,
          });
        });
      },//handleOwnerActions

      handleUpdateCarStatus() {

        let currentCar = {
          carStatus: this.selectedCarStatus,
        };

        store.dispatch('car/editCar', {
          carId: this.currentlySelectedCAr.id,
          carDataToUpdate: currentCar
        })
        .then((car) =>{
          this.modals.updateCarStatusModal = false;
          this.$notify({
            type: 'success',
            title: `Status Updated Successfully. Changed To ${car.status}`,
          });
        }).catch((error) => {
          this.modals.updateCarStatusModal = false;
          this.$notify({
            type: 'danger',
            title: `Status Failed To Update: Error => ${error.message}`,
          });
        });
      },//handleUpdateCarStatus

      handleAddInsuranceToCar(){
        const isNotEmpty = this.validateBody(this.insuranceForm)
        if (isNotEmpty) {
          //alert(JSON.stringify(this.insuranceForm));
          // Create insurance
          store.dispatch('car/addInsurance', {
            insuranceDetails: {...this.insuranceForm, carId: this.currentlySelectedCAr.id}
          })
          .then((car) =>{
            this.modals.addInsurance = false;
            this.$notify({
              type: 'success',
              title: `Insurance Successfully Added To ${car.status}`,
            });
          }).catch((error) => {
            this.modals.addInsurance = false;
            this.$notify({
              type: 'danger',
              title: `Status Failed To Update: Error => ${error.message}`,
            });
          });

        } else {
          console.log(isNotEmpty);
          this.$notify({
            type: 'danger',
            title: `Error => Please Fill All Fields`,
          });
        }
      },//handleAddInsuranceToCar

      handleAddRoadWorthyToCar(){
        const isNotEmpty = this.validateBody(this.roadWorthyForm)
        if (isNotEmpty) {
          //alert(JSON.stringify({...this.roadWorthyForm, carId: this.currentlySelectedCAr.id}));
          // Create roadWorthy
            store.dispatch('car/addRoadworthy', {
              roadworthyDetails: {...this.roadWorthyForm, carId: this.currentlySelectedCAr.id}
            })
            .then((car) =>{
              this.modals.addRoadWorthy = false;
              this.$notify({
                type: 'success',
                title: `Roadworthy Successfully Added To ${car.status}`,
              });
            }).catch((error) => {
              this.modals.addRoadWorthy = false;
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
      },//handleAddRoadWorthyToCar

      handleAddIncomeTaxToCar(){
        const isNotEmpty = this.validateBody(this.incomeTaxForm)
        if (isNotEmpty) {
          //alert(JSON.stringify(this.incomeTaxForm));
          // Create incomeTax

          store.dispatch('car/addIncometax', {
            incometaxDetails: {...this.incomeTaxForm, carId: this.currentlySelectedCAr.id}
          })
          .then((car) =>{
            this.modals.addIncomeTax = false;
            this.$notify({
              type: 'success',
              title: `Income Tax Successfully Added To ${car.modelName}`,
            });
          }).catch((error) => {
            this.modals.addIncomeTax = false;
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
      },//handleAddIncomeTaxToCar

      handleAddMonthlyExpenseToCar(){
        const isNotEmpty = this.validateBody(this.monthlyExpenseForm)
        if (isNotEmpty) {
          //alert(JSON.stringify(this.monthlyExpenseForm));
          // Create incomeTax
          store.dispatch('car/addMonthlyexpense', {
            monthlyexpenseDetails: {...this.monthlyExpenseForm, carId: this.currentlySelectedCAr.id}
          })
          .then((car) =>{
            this.modals.addMonthlyExpense = false;
            this.$notify({
              type: 'success',
              title: `Monthly Expense Successfully Added To ${car.modelName}`,
            });
          }).catch((error) => {
            this.modals.addMonthlyExpense = false;
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

      handleAddDocumentToCar(){
        const isNotEmpty = this.validateBody(this.documentLinksForm)
        if (isNotEmpty) {
          //alert(JSON.stringify(this.documentLinksForm));
          // Create incomeTax
          store.dispatch('car/addDocumentlink', {
            documentlinkDetails: {...this.documentLinksForm, carId: this.currentlySelectedCAr.id}
          })
          .then((car) =>{
            this.modals.addDocumentLink = false;
            this.$notify({
              type: 'success',
              title: `Monthly Expense Successfully Added To ${car.modelName}`,
            });
          }).catch((error) => {
            this.modals.addDocumentLink = false;
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
      },//handleAddDocumentToCar


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

    },
  }
</script>
<style>
</style>
