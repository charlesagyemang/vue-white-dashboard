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
                              <router-link to="/dashboard/add-an-owner" class="btn btn-success">Add A New Owner</router-link><br>
                              <router-link to="/dashboard/owner-list" class="btn btn-danger float-right">View All Owners</router-link >
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
                                    <h3 class="mb-0">Single Owner Information</h3>
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
                                          <h4>Phone Number</h4>
                                          <p>{{model.phoneNumber}}</p>
                                        </div>
                                        <div class="col-lg-6">
                                          <h4>Alternate Phone Number</h4>
                                          <p>{{model.alternatePhoneNumber}}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h2 class=" text-muted mb-4">Address Details </h2>
                                <div class="pl-lg-4">
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <h4>Address</h4>
                                        <p>{{model.address}}</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>City</h4>
                                        <p>{{model.city}}</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <h4>Country</h4>
                                        <p>{{model.country}}</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Zip Code</h4>
                                        <p>{{model.zipCode}}</p>
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
    name: 'single-owner-view',
    beforeCreate () {
      //get id and make api call to single driver service
      console.log(this.$route.params.id);
      console.log("Before Create");
    },
    data() {
      return {
        model: {
          fullName: 'Kwame Michael',
          email: 'music@gmail.com',
          phoneNumber: '+233 722 11 99 90',
          alternatePhoneNumber: '+233 541 34 81 80',
          address: '19 Banana Street',
          city: 'Accra',
          country: 'Ghana',
          zipCode: '+233',
        },
      }
    },
    computed: {
      namer() {
        return localStorage.uberName
      },
      currentOwnerId(){
        return this.$route.params.id
      },
    },
  };
</script>
<style></style>
