<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- <span class="mask bg-info opacity-8"></span> -->
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col">
                  <monthly-expenses-table-orbit title="Monthly Expenses"></monthly-expenses-table-orbit>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import MonthlyExpensesTableOrbit from '@/views/Tables/MonthlyExpensesTableOrbit'


export default {
  components: {
    MonthlyExpensesTableOrbit,
  },
  computed: {
    fields(){
      let keys =   [
          ["actions", "actions"],
          ["Date Received", "dateReceived"],
          ["Driver Details", "driver"],
          ["Status", "status"],
          ["Car Details", "car"],
          ["Amount Received", "amount"],
          ["Days Ticked", "daysSalesAmountCovers"],
          ["Payment Method", "paymentMethod"],
       ]
      const sendKeys = []
      keys.forEach((item) => {
        sendKeys.push({
          key: item[1],
          label: item[0],
          sortable: true,
          sortDirection: 'desc'
        })
      });
      return  sendKeys
    },
  },
}
</script>

<style lang="css" scoped>
</style>
