<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="background-size: cover; background-position: center top;">
            <span class="mask bg-info opacity-8"></span>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <div class="card card-profile shadow">
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                          <div class="d-flex justify-content-between">
                              <router-link to="/dashboard/add-a-driver" class="btn btn-success">Add A New Driver</router-link><br>
                              <router-link to="/dashboard/driver-list" class="btn btn-danger float-right">View All Drivers</router-link >
                          </div>
                        </div>
                    </div>
                    <br><br>
                </div>

                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Single Driver Information</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                              <h2 class=" text-muted mb-4">Personal Details</h2>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                          <h4>Full Name</h4>
                                          <p>{{model.fullName}}</p>
                                        </div>
                                        <div class="col-lg-6">
                                          <h4>Email</h4>
                                          <p>{{model.email}}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                          <h4>Address</h4>
                                          <p>{{model.address}}</p>
                                        </div>
                                        <div class="col-lg-6">
                                          <h4>Phone Number</h4>
                                          <p>{{model.phoneNumber}}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h2 class=" text-muted mb-4">Guarantor Details </h2>
                                <div class="pl-lg-4">
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <h4>Full Name</h4>
                                        <p>{{model.guarantorFullName}}</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Email</h4>
                                        <p>{{model.guarantorEmail}}</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <h4>Address</h4>
                                        <p>{{model.guarantorAddress}}</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Phone Number</h4>
                                        <p>{{model.guarantorPhoneNumber}}</p>
                                      </div>
                                  </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Description -->
                                <h2 class=" text-muted mb-4">Former Employer Details </h2>
                                <div class="pl-lg-4">
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <h4>Full Name</h4>
                                        <p>{{model.formerEmployerFullName}}</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Email</h4>
                                        <p>{{model.formerEmployerEmail}}</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <h4>Address</h4>
                                        <p>{{model.formerEmployerAddress}}</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Phone Number</h4>
                                        <p>{{model.formerEmployerPhoneNumber}}</p>
                                      </div>
                                  </div>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

  export default {
    name: 'user-profile',
    beforeCreate () {
      //get id and make api call to single driver service
      console.log(this.$route.params.id);
    },
    computed: {
      ...mapState(['driver']),
      namer() {
        return localStorage.uberName
      },
      model(){
        return this.driver.driver
      },
    },
  };
</script>
<style></style>
