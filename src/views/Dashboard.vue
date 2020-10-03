<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <span class="mask bg-info opacity-8"></span>
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Owners"
                                type="gradient-red"
                                sub-title="1"
                                icon="ni ni-circle-08"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                          <router-link to="/dashboard/owner-list" size="sm"  class="btn btn-danger" name="button">All</router-link>
                          <router-link to="/dashboard/add-an-owner" size="sm"  class="btn btn-danger" name="button">Create</router-link>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Cars"
                                type="gradient-orange"
                                sub-title="3"
                                icon="ni ni-delivery-fast"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                          <router-link to="/dashboard/car-list" size="sm"  class="btn btn-warning" name="button">All</router-link>
                          <router-link to="/dashboard/add-a-car" size="sm"   class="btn btn-warning" name="button">Create</router-link>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Drivers"
                                type="gradient-green"
                                sub-title="3"
                                icon="ni ni-bus-front-12"
                                class="mb-4 mb-xl-0"
                    >
                        <template slot="footer">
                          <router-link to="/dashboard/driver-list" size="sm"  class="btn btn-success" name="button">All</router-link>
                          <router-link to="/dashboard/add-a-driver" size="sm"   class="btn btn-success" name="button">Create</router-link>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Sales"
                                type="gradient-info"
                                sub-title="4"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                          <router-link to="/dashboard/sales-list" size="sm"  class="btn btn-info" name="button">All</router-link>
                          <router-link to="/dashboard/add-a-sales" size="sm"   class="btn btn-info" name="button">Create</router-link>
                        </template>
                    </stats-card>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                  <tabs fill class="flex-column flex-md-row">
                  <card shadow>
                      <tab-pane>
                          <span slot="title">
                              Insurnace
                          </span>
                          <insurance-table title="Insurance"></insurance-table>
                      </tab-pane>

                      <tab-pane title="Profile">
                          <span slot="title">

                              Road Worthy
                          </span>
                          <road-worthy-table title="Road Worthy"></road-worthy-table>
                      </tab-pane>

                      <tab-pane>
                           <span slot="title">
                              Income Tax
                            </span>
                            <income-tax-table title="Income Tax"></income-tax-table>
                      </tab-pane>

                      <tab-pane>
                           <span slot="title">

                              Monthly Expense
                            </span>
                          <monthly-expenses-table title="Monthly Expenses"></monthly-expenses-table>
                      </tab-pane>

                      <tab-pane>
                           <span slot="title">
                              <!-- <i class="ni ni-calendar-grid-58"/> -->
                              Document Links
                            </span>
                          <document-links-table title="Income Tax"></document-links-table>
                      </tab-pane>

                  </card>
              </tabs>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

  import InsuranceTable from '@/views/Tables/InsuranceTable'
  import RoadWorthyTable from '@/views/Tables/RoadWorthyTable'
  import IncomeTaxTable from '@/views/Tables/IncomeTaxTable'
  import MonthlyExpensesTable from '@/views/Tables/MonthlyExpensesTable'
  import DocumentLinksTable from '@/views/Tables/DocumentLinksTable'

  export default {
    components: {
      InsuranceTable,
      RoadWorthyTable,
      IncomeTaxTable,
      MonthlyExpensesTable,
      DocumentLinksTable,
    },
  };
</script>
<style></style>
