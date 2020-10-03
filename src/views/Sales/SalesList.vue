<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- <span class="mask bg-info opacity-8"></span> -->
      <!-- <h1 class="text-white" style="padding-left:70%; color:white">Total: GHC {{sumOfSales}}</h1> -->
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col">
                <sales-table title="All Sales List"></sales-table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import SalesTable from '@/views/Tables/SalesTable'

export default {
  components: {
    SalesTable,
  },
}
</script>

<style lang="css" scoped>
</style>
