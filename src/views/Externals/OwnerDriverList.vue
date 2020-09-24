<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <form class="">
        <span class="mask bg-dark opacity-8"></span>
      </form>
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col">
                <owners-drivers-table title="All Owners Drivers List"></owners-drivers-table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import OwnersDriversTable from '@/views/Tables/OwnersDriversTable'

export default {
  components: {
    OwnersDriversTable,
  },
}
</script>

<style lang="css" scoped>
</style>
