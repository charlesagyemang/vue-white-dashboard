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
                <owners-table title="All Drivers List"></owners-table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import OwnersTable from '@/views/Tables/OwnersTable'

export default {
  components: {
    OwnersTable,
  },
}
</script>

<style lang="css" scoped>
</style>
