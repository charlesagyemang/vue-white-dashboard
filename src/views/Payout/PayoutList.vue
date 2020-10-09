<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- <span class="mask bg-info opacity-8"></span> -->
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col">
                  <payout-table title="Owner Payout"></payout-table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import PayoutTable from '@/views/Tables/PayoutTable'


export default {
  components: {
    PayoutTable,
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
