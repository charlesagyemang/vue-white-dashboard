<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="background-size: cover; background-position: center top;">
            <span class="mask bg-info opacity-8"></span>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">
                                      Single Car Information <br>
                                    </h3>
                                </div>
                                <router-link to="/dashboard/add-a-car" class="btn btn-success">Add A New Car</router-link>
                                <router-link to="/dashboard/car-list" class="btn btn-danger float-right">View All Cars</router-link>

                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                              <h2 class=" text-muted mb-4">Personal Details</h2>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-3">
                                          <h4>Model Name</h4>
                                          <p>KIA Morning Lx</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Model Year</h4>
                                          <p>2009</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Color</h4>
                                          <p>Red And Yellow</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Car Status</h4>
                                          <p>SHIPPED</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3">
                                          <h4>Car Working City</h4>
                                          <p>Accra Ghana</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Car Owner</h4>
                                          <p>Micheal Afari Yeboah</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Current Driver</h4>
                                          <p>Kwabena Boateng</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Car Type</h4>
                                          <p>Saloon</p>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h2 class=" text-muted mb-4">Guarantor Details </h2>
                                <div class="pl-lg-4">
                                  <div class="row">
                                      <div class="col-lg-3">
                                        <h4>Service Type</h4>
                                        <p>UBER-SERVICES</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Date Registered</h4>
                                        <p>Aug 19 2020</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Car Number</h4>
                                        <p>GS 1982 - 20</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Cost Of Purchase In USD</h4>
                                        <p>$10,000</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-3">
                                        <h4>Cost Of Shipping In USD</h4>
                                        <p>$2,000</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Cost Of Clearing In GHC</h4>
                                        <p>GHC 15,000</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Cost Of Setting Up</h4>
                                        <p>GHC 8,000</p>
                                      </div>

                                  </div>
                                </div>
                                <hr class="my-4" />
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'user-profile',
    beforeCreate () {
      //get id and make api call to single driver service
      console.log(this.$route.params.id);
      console.log("Before Create");
    },
    data() {
      return {
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        }
      }
    },
    computed: {
      namer() {
        return localStorage.uberName
      }
    },
  };
</script>
<style></style>
