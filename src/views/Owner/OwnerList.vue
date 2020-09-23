<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <span class="mask bg-info opacity-8"></span>
      <form class="">
        <router-link to="/dashboard/add-an-owner" class="btn btn-primary">ADD A NEW OWNER</router-link><br><br>
      </form>
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col">
                <owners-table title="All Owners List"></owners-table>
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
