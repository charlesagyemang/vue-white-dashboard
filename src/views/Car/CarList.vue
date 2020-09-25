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


  </div>
</template>

<script>
import CarsTable from '@/views/Tables/CarsTable'

export default {
  components: {
    CarsTable,
  },
}
</script>

<style lang="css" scoped>
</style>
