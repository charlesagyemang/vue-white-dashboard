<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <form class="">
        <a href="/dashboard/add-a-car" class="btn btn-primary">BACK TO ADD A NEW CAR</a><br><br>
      </form>
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
import CarsTable from './Tables/CarsTable'

export default {
  components: {
    CarsTable,
  },
}
</script>

<style lang="css" scoped>
</style>
