<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 400px; background-image: url(/img/cars/morning2.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-dark opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Check Any Model</h1>
                        <p class="text-white mt-0 mb-5">Enter values in the various boxes and click on do the maths to get a detailed statistic of the kehillah model in itys glory and ascertain whether it makes sense to invest</p>
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">

                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Model Checker Form</h3>
                                </div>
                            </div>
                        </div>

                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Direct Details</h6>
                                <div class="pl-lg-4">
                                    <div class="row">

                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Name Of Asset"
                                                        placeholder="Motor Vehicle"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.assetName"
                                            />
                                        </div>

                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Asset Cost (Purchase + Shipping + Clearing)"
                                                        placeholder="20000"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.assetCost"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Cost Of Comprehensive Insurance"
                                                        placeholder="2200"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.insuranceCost"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Cost Of Asset Registration"
                                                        placeholder="Last name"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.assetRegistrationCost"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h6 class="heading-small text-muted mb-4">Indirect Details</h6>
                                <div class="pl-lg-4">

                                    <div class="row">
                                      <div class="col-md-6">
                                          <base-input alternative=""
                                                      label="Road Worthy Cost"
                                                      placeholder="120"
                                                      input-classes="form-control-alternative"
                                                      v-model="model.roadWorthyCost"
                                          />
                                      </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Cost Of Income Tax"
                                                        placeholder="12"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.incomeTaxCost"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Total Set Up Expenses"
                                                        placeholder="1000"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.setUpExpenses"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Recurring Expenses Not Mentioned"
                                                        placeholder="30"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.recurringUncoveredExpenses"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">Revenue And Expenses Details</h6>
                                <div class="pl-lg-4">

                                    <div class="row">
                                      <div class="col-md-6">
                                          <base-input alternative=""
                                                      label="Daily Sales"
                                                      placeholder="30"
                                                      input-classes="form-control-alternative"
                                                      v-model="model.dailySales"
                                          />
                                      </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Number Of Days Model Will Run"
                                                        placeholder="900"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.modelDays"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Salary Consideration (in number of days of work per month)"
                                                        placeholder="2"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.salaryDays"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Monthly Maintenance budget"
                                                        placeholder="200"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.monthlyMaintenance"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-4" />

                                <div class="pl-lg-4">
                                    <div class="form-group">
                                        <base-button @click.prevent="doTheMaths" class="btn btn-primary">
                                          DO THE MATH
                                        </base-button>
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
             <div class="col-md-4">
               <modal :show.sync="modals.showResults"
                      :gradient="getColor(currentResults.netProfitPercentage)"
                      modal-classes="modal-danger modal-dialog-centered">
                   <h6 slot="header" class="modal-title" id="modal-title-notification">{{attention(currentResults.netProfitPercentage)}}</h6>

                   <div class="py-3 text-center">
                       <i class="ni ni-money-coins ni-3x"></i>
                       <h1 class="text-white">{{model.assetName}}</h1>
                       <h2 class="text-white">Net Profit Percentage: {{currentResults.netProfitPercentage}} %</h2>
                       <h4 class="heading mt-4">Net Profit: GHC {{currentResults.netProfit}}</h4>
                       <h4 class="heading mt-4">Expected Revenue: {{currentResults.expectedRevenue}}</h4>
                       <h4 class="heading mt-4">Gross Profit: {{currentResults.grossProfit}}</h4>
                       <h4 class="heading mt-4">Total Other Expenses: {{currentResults.totalExpenses}}</h4>
                       <!-- <h4 class="heading mt-4">Gross Profit: {{currentResults.grossProfit}}</h4> -->

                   </div>

                   <template slot="footer">
                       <base-button @click="modals.showResults = false" type="white">Ok, Got it</base-button>
                       <base-button type="link"
                                    text-color="white"
                                    class="ml-auto"
                                    @click="modals.showResults = false">
                           Close
                       </base-button>
                   </template>
               </modal>
            </div>
           </div>
         </div>


    </div>
</template>
<script>
  export default {
    name: 'user-profile',
    data() {
      return {
        model: {
          assetName: 'Uber Sized Cars Model 1',
          assetCost: '31400',
          insuranceCost: '2200',
          assetRegistrationCost: '1000',
          roadWorthyCost: '50',
          incomeTaxCost: '12',
          setUpExpenses: '5800',
          recurringUncoveredExpenses: '0',
          dailySales: '72',
          modelDays: '900',
          salaryDays: '0',
          monthlyMaintenance: '0',
        },
        modals: {
          showResults: false
        },
        currentResults: {
          expectedRevenue: 0,
          grossProfit: 0,
          totalRecurringCost: 0,
          totalNonRecurring: 0,
          totalExpenses: 0,
          netProfit: 0,
          netProfitPercentage: 0,
        }
      }
    },
    computed: {
      namer() {
        return localStorage.uberName
      }
    },
    methods: {
      doTheMaths() {

        const data = this.model;

        // Expected Revenue Over the X days
        const expectedRevenue = parseInt(data.dailySales) * parseInt(data.modelDays);
        const grossProfit = expectedRevenue - parseInt(data.assetCost);

        // RECCURING EXP
        const incomeTaxValue = parseInt(data.incomeTaxCost) *   ( parseInt(data.modelDays) / (25 * 3) )
        const roadWorthyValue = parseInt(data.roadWorthyCost) * ( parseInt(data.modelDays) / (25 * 6) )
        const totalSalary = parseInt(data.salaryDays)  * parseInt(data.dailySales) * ( parseInt(data.modelDays) / 25 )
        const unfactoredRecuuring = parseInt(data.recurringUncoveredExpenses) * ( parseInt(data.modelDays) / 25 )
        const maintenanceCost =  parseInt(data.monthlyMaintenance) * ( parseInt(data.modelDays) / 25 )
        const insurance =  parseInt(data.insuranceCost) * ( parseInt(data.modelDays) / (25 * 12) )
        const totalRecurringCost = incomeTaxValue + roadWorthyValue + totalSalary + unfactoredRecuuring + maintenanceCost + insurance

        // NON ReCURRING
        const totalNonRecurring =  parseInt(data.assetRegistrationCost) + parseInt(data.setUpExpenses)


        // TOTAL EXPENSES
        const totalExpenses = totalNonRecurring + totalRecurringCost


        /// NET PROFIT
        const netProfit = grossProfit - totalExpenses;


        // NET PROFIT PERCENTAGE
        const netProfitPercentage = ( netProfit / parseInt(data.assetCost) ) * 100

        this.currentResults = {
          expectedRevenue: expectedRevenue.toString().split( /(?=(?:...)*$)/ ).join(","),
          grossProfit: grossProfit.toString().split( /(?=(?:...)*$)/ ).join(","),
          totalRecurringCost: totalRecurringCost.toString().split( /(?=(?:...)*$)/ ).join(","),
          totalNonRecurring: totalNonRecurring.toString().split( /(?=(?:...)*$)/ ).join(","),
          totalExpenses: totalExpenses.toString().split( /(?=(?:...)*$)/ ).join(","),
          netProfit: netProfit.toString().split( /(?=(?:...)*$)/ ).join(","),
          netProfitPercentage: parseFloat(netProfitPercentage.toFixed(1)),
        }

        this.modals.showResults = true;

        console.log(this.currentResults);

      },
      getColor(value){
        if (value < 40) {
          return 'danger'
        } else {
          return 'success'
        }
      },

      attention(value){
        if (value > 40) {
          return 'This is making you above 40% good idea'
        } else {
          return 'Bad Idea its making you less than 40%'
        }
      },
    },
  };
</script>
<style></style>
