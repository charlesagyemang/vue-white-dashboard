<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- <span class="mask bg-info opacity-8"></span> -->
      <!-- <h1 class="text-white" style="padding-left:70%; color:white">Total: GHC {{sumOfSales}}</h1> -->
    </base-header>
    <div v-if="items" class="container-fluid mt--7">
        <div class="row">
            <div class="col">
                <table-item
                  :fields = "fields"
                  :items = "items"
                ></table-item>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

// import SalesTable from '@/views/Tables/SalesTable'
import TableItem from '@/views/Tables/TableItem'
import {mapState} from 'vuex'

export default {
  beforeCreate(){
    this.$store.dispatch('sales/fetchSaless').then((resp) => {console.log("inside table item", resp);});
  },
  components: {
    // SalesTable,
    TableItem
  },
  computed: {
    ...mapState(['sales']),
    items () {
      return this.sales.saless
    },
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
