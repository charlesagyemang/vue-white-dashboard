<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="background-size: cover; background-position: center top;">
            <span class="mask bg-info opacity-8"></span>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">
                                      Single Car Information <br>
                                    </h3>
                                </div>
                                <router-link to="/dashboard/add-a-car" class="btn btn-success">Add A New Car</router-link>
                                <router-link to="/dashboard/car-list" class="btn btn-danger float-right">View All Cars</router-link>

                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                              <h2 class=" text-muted mb-4">Personal Details</h2>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-3">
                                          <h4>Model Name</h4>
                                          <p>{{model.modelName}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Model Year</h4>
                                          <p>{{model.modelYear}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Color</h4>
                                          <p>{{model.color}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Car Status</h4>
                                          <p>{{model.status}}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3">
                                          <h4>Car Working City</h4>
                                          <p>{{model.carWorkingCity}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Car Owner</h4>
                                          <p>{{model.owner.fullName}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Current Driver</h4>
                                          <p>{{model.driver.fullName}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Car Type</h4>
                                          <p>{{model.carType}}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h2 class=" text-muted mb-4">Guarantor Details </h2>
                                <div class="pl-lg-4">
                                  <div class="row">
                                      <div class="col-lg-3">
                                        <h4>Service Type</h4>
                                        <p>{{model.serviceType}}</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Date Registered</h4>
                                        <p>{{model.dateRegistered}}</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Car Number</h4>
                                        <p>{{model.carNumber}}</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Cost Of Purchase In USD</h4>
                                        <p>{{model.costOfAquiring}}</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-3">
                                        <h4>Cost Of Shipping In USD</h4>
                                        <p>{{model.costOfShipping}}</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Cost Of Clearing In GHC</h4>
                                        <p>{{model.costOfClearing}}</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Cost Of Setting Up</h4>
                                        <p>{{model.costOfSettingUp}}</p>
                                      </div>

                                  </div>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                      <tabs fill class="flex-column flex-md-row">
                      <card shadow>
                          <tab-pane>
                              <span slot="title">
                                  Insurnace
                              </span>
                              <insurance-table-single
                                  v-if="localInsurances.length > 0"
                                  :title="'Insurnaces For  ' + model.modelName"
                                  :tableData ="localInsurances"
                                  :carname = "model.modelName"
                                >
                              </insurance-table-single>
                          </tab-pane>

                          <tab-pane title="Profile">
                              <span slot="title">
                                  Road Worthy
                              </span>
                              <road-worthy-table-single
                                  v-if="localRoadWorthies.length > 0"
                                  :title="'Road Worthy For  ' + model.modelName"
                                  :tableData ="localRoadWorthies"
                                  :carname = "model.modelName"
                                >
                              </road-worthy-table-single>
                          </tab-pane>

                          <tab-pane>
                               <span slot="title">
                                  Income Tax
                                </span>
                                <income-tax-table-single
                                    v-if="localIncomeTaxes.length > 0"
                                    :title="'Income Taxes For  ' + model.modelName"
                                    :tableData ="localIncomeTaxes"
                                    :carname = "model.modelName"
                                  >
                                </income-tax-table-single>
                          </tab-pane>

                          <tab-pane>
                               <span slot="title">

                                  Monthly Expense
                                </span>
                                <monthly-expenses-table-single
                                  v-if="localMonthlyExpenses.length > 0"
                                  :title="'Monthly Expenses For  ' + model.modelName"
                                  :tableData ="localMonthlyExpenses"
                                  :carname = "model.modelName"
                                  >
                                </monthly-expenses-table-single>
                          </tab-pane>

                          <tab-pane>
                               <span slot="title">
                                  <!-- <i class="ni ni-calendar-grid-58"/> -->
                                  Document Links
                                </span>
                              <document-links-table-single
                                v-if="localDocumentLinks.length > 0"
                                :title="'Document Links For  ' + model.modelName"
                                :tableData ="localDocumentLinks"
                                :carname = "model.modelName"
                                >
                              </document-links-table-single>
                          </tab-pane>

                          <tab-pane>
                               <span slot="title">
                                  <!-- <i class="ni ni-calendar-grid-58"/> -->
                                  Owner Details
                                </span>
                                <div class="row">
                                    <div class="col-lg-3">
                                      <h4>Name</h4>
                                      <p>{{model.owner.fullName}}</p>
                                    </div>
                                    <div class="col-lg-3">
                                      <h4>Email</h4>
                                      <p>{{model.owner.email}}</p>
                                    </div>
                                    <div class="col-lg-3">
                                      <h4>Phone</h4>
                                      <p>{{model.owner.phoneNumber}}</p>
                                    </div>
                                </div>
                          </tab-pane>

                          <tab-pane>
                               <span slot="title">
                                  <!-- <i class="ni ni-calendar-grid-58"/> -->
                                  Driver Details
                                </span>
                                <div class="row">
                                    <div class="col-lg-3">
                                      <h4>Name</h4>
                                      <p>{{model.driver.fullName}}</p>
                                    </div>
                                    <div class="col-lg-3">
                                      <h4>Email</h4>
                                      <p>{{model.driver.email}}</p>
                                    </div>
                                    <div class="col-lg-3">
                                      <h4>Phone</h4>
                                      <p>{{model.driver.phoneNumber}}</p>
                                    </div>
                                </div>
                          </tab-pane>

                      </card>
                  </tabs>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>

import InsuranceTableSingle from '@/views/Tables/Single/InsuranceTableSingle'
import RoadWorthyTableSingle from '@/views/Tables/Single/RoadWorthyTableSingle'
import IncomeTaxTableSingle from '@/views/Tables/Single/IncomeTaxTableSingle'
import MonthlyExpensesTableSingle from '@/views/Tables/Single/MonthlyExpensesTableSingle'
import DocumentLinksTableSingle from '@/views/Tables/Single/DocumentLinksTableSingle'

import { mapState } from 'vuex'
  export default {
    created() {
      this.$store.dispatch('car/fetCarByIdExternal', {carId: this.$route.params.id})
      .then((resp) => {
        console.log(resp.monthlyexpenses);
        this.localDocumentLinks = resp.documentlinks;
        this.localRoadWorthies = resp.roadworthies;
        this.localIncomeTaxes = resp.incometaxes;
        this.localMonthlyExpenses = resp.monthlyexpenses;
        this.localInsurances = resp.insurances;
      })
      .catch((err) => {
        console.log(err);
      })
    },
    components: {
      InsuranceTableSingle,
      RoadWorthyTableSingle,
      IncomeTaxTableSingle,
      MonthlyExpensesTableSingle,
      DocumentLinksTableSingle,
    },
    data () {
      return {
        localDocumentLinks: [],
        localRoadWorthies: [],
        localInsurances: [],
        localMonthlyExpenses: [],
        localIncomeTaxes: [],
      }
    },
    computed: {
      ...mapState(['car']),
      namer() {
        return localStorage.uberName
      },
      model(){
        return this.car.car
      },
    },
  };
</script>
<style></style>
