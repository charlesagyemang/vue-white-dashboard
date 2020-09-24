<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <span class="mask bg-dark opacity-8"></span>
      <form class="">
      </form>
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col">
                <owners-cars-table title="All Owners Cars Table"></owners-cars-table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import OwnersCarsTable from '@/views/Tables/OwnersCarsTable'

export default {
  components: {
    OwnersCarsTable,
  },
}
</script>

<style lang="css" scoped>
</style>
