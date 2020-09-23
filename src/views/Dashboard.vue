<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <span class="mask bg-info opacity-8"></span>
            <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Owners"
                                type="gradient-red"
                                sub-title="1"
                                icon="ni ni-circle-08"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                          <router-link to="/dashboard/owner-list" size="sm"  class="btn btn-danger" name="button">All</router-link>
                          <router-link to="/dashboard/add-an-owner" size="sm"  class="btn btn-danger" name="button">Create</router-link>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Cars"
                                type="gradient-orange"
                                sub-title="3"
                                icon="ni ni-delivery-fast"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                          <router-link to="/dashboard/car-list" size="sm"  class="btn btn-warning" name="button">All</router-link>
                          <router-link to="/dashboard/add-a-car" size="sm"   class="btn btn-warning" name="button">Create</router-link>
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
                          <router-link to="/dashboard/driver-list" size="sm"  class="btn btn-success" name="button">All</router-link>
                          <router-link to="/dashboard/add-a-driver" size="sm"   class="btn btn-success" name="button">Create</router-link>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Sales"
                                type="gradient-info"
                                sub-title="4"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                          <router-link to="/dashboard/driver-list" size="sm"  class="btn btn-info" name="button">All</router-link>
                          <router-link to="/dashboard/add-a-driver" size="sm"   class="btn btn-info" name="button">Create</router-link>
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
                    <page-visits-table></page-visits-table>
                </div>
                <div class="col-xl-4">
                    <social-traffic-table></social-traffic-table>
                </div>
            </div>
            <!--End tables-->
        </div>

    </div>
</template>
<script>
  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      PageVisitsTable,
      SocialTrafficTable,
    },
    methods: {
    },

  };
</script>
<style></style>
