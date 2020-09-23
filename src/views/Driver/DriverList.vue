<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <form class="">
        <router-link class="btn btn-primary" to="/dashboard/add-a-driver">BACK TO ADD A NEW DRIVER</router-link>
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
