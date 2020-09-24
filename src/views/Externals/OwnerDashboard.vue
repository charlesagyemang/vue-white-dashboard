<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <span class="mask bg-dark opacity-8"></span>
            <div class="row">

                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Cars"
                                type="gradient-orange"
                                sub-title="3"
                                icon="ni ni-delivery-fast"
                                class="mb-4 mb-xl-0"
                    >
                        <template slot="footer">
                          <router-link to="/owner/dashboard/cars" size="sm"  class="btn btn-warning" name="button">View All My Cars</router-link>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Drivers"
                                type="gradient-green"
                                sub-title="3"
                                icon="ni ni-bus-front-12"
                                class="mb-4 mb-xl-0"
                    >
                        <template slot="footer">
                          <router-link to="/owner/dashboard/drivers" size="sm"  class="btn btn-success" name="button">All My Drivers</router-link>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Settings"
                                type="gradient-info"
                                sub-title="4"
                                icon="ni ni-settings-gear-65"
                                class="mb-4 mb-xl-0"
                    >
                        <template slot="footer">
                          <router-link to="/owner/dashboard/profile" size="sm"  class="btn btn-info" name="button">User Details</router-link>
                        </template>
                    </stats-card>
                </div>
            </div>
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--7">
            <!--Tables-->
            <div class="row mt-5">
                <div class="col-xl-8 mb-5 mb-xl-0">
                    <cars-table></cars-table>
                </div>
                <div class="col-xl-4">
                    <owners-table></owners-table>
                </div>
            </div>
            <!--End tables-->
        </div>

    </div>
</template>
<script>
  // Tables

  import CarsTable from '@/views/Tables/CarsTable'
  import OwnersTable from '@/views/Tables/OwnersTable'

  export default {
    components: {
      CarsTable,
      OwnersTable,
    },
    methods: {
    },

  };
</script>
<style></style>
