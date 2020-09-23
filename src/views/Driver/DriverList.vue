<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <form class="">
        <span class="mask bg-info opacity-8"></span>
        <router-link class="btn btn-primary" to="/dashboard/add-a-driver">ADD A NEW DRIVER</router-link>
      </form>
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col">
                <drivers-table title="All Drivers List"></drivers-table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import DriversTable from '@/views/Tables/DriversTable'

export default {
  components: {
    DriversTable,
  },
}
</script>

<style lang="css" scoped>
</style>
