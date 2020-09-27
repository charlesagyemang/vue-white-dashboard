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
                                          <p>{{model.modelName}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Model Year</h4>
                                          <p>{{model.modelYear}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Color</h4>
                                          <p>{{model.color}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Car Status</h4>
                                          <p>{{model.status}}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3">
                                          <h4>Car Working City</h4>
                                          <p>{{model.carWorkingCity}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Car Owner</h4>
                                          <p>{{model.carOwner.name}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Current Driver</h4>
                                          <p>{{model.currentDriver.name}}</p>
                                        </div>
                                        <div class="col-lg-3">
                                          <h4>Car Type</h4>
                                          <p>{{model.carType}}</p>
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
                                        <p>{{model.serviceType}}</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Date Registered</h4>
                                        <p>{{model.dateRegistered}}</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Car Number</h4>
                                        <p>{{model.carNumber}}</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Cost Of Purchase In USD</h4>
                                        <p>{{model.costOfAquiring}}</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-3">
                                        <h4>Cost Of Shipping In USD</h4>
                                        <p>{{model.costOfShipping}}</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Cost Of Clearing In GHC</h4>
                                        <p>{{model.costOfClearing}}</p>
                                      </div>
                                      <div class="col-lg-3">
                                        <h4>Cost Of Setting Up</h4>
                                        <p>{{model.costOfSettingUp}}</p>
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
import { mapState } from 'vuex'
  export default {
    name: 'user-profile',
    beforeCreate () {
      //get id and make api call to single driver service
      console.log(this.$route.params.id);
      console.log("Before Create");
    },
    computed: {
      ...mapState(['car']),
      namer() {
        return localStorage.uberName
      },
      model(){
        return this.car.car
      },
    },
  };
</script>
<style></style>
