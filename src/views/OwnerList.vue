<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
      <form class="">
        <a href="/dashboard/add-a-car" class="btn btn-primary">BACK TO ADD A NEW OWNER</a><br><br>
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
import OwnersTable from './Tables/OwnersTable'

export default {
  components: {
    OwnersTable,
  },
}
</script>

<style lang="css" scoped>
</style>
