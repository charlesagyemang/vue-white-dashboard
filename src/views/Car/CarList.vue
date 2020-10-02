<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <span class="mask bg-info opacity-8"></span>
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col">
                <cars-table title="All Cars Table"></cars-table>
            </div>
        </div>
    </div>
    <br><br>

    <div class="container-fluid">
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
import CarsTable from '@/views/Tables/CarsTable'
import InsuranceTable from '@/views/Tables/InsuranceTable'
import RoadWorthyTable from '@/views/Tables/RoadWorthyTable'
import IncomeTaxTable from '@/views/Tables/IncomeTaxTable'
import MonthlyExpensesTable from '@/views/Tables/MonthlyExpensesTable'
import DocumentLinksTable from '@/views/Tables/DocumentLinksTable'

export default {
  components: {
    CarsTable,
    InsuranceTable,
    RoadWorthyTable,
    IncomeTaxTable,
    MonthlyExpensesTable,
    DocumentLinksTable,
  },
}
</script>

<style lang="css" scoped>
</style>
