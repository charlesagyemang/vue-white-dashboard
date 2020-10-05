<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <span class="mask bg-info opacity-8"></span>
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col">
                <cars-table title="All Cars Table"></cars-table>

                <!-- <table-item
                :fields ="['koobi', 'muche']"
                :
                >
                </table-item> -->
            </div>
        </div>
    </div>
    <br><br>



  </div>
</template>

<script>
import CarsTable from '@/views/Tables/CarsTable'
// import TableItem from '@/views/Tables/TableItem'



export default {
  components: {
    CarsTable,
    // TableItem,
  },
}
</script>

<style lang="css" scoped>
</style>
