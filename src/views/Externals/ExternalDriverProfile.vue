<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 500px; background-image: url(/img/cars/morning2.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-dark opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Hello!</h1>
                        <h1 class="display-2 text-white">{{namer}}</h1>
                        <p class="text-white mt-0 mb-5">Welcome To Your Personal Portal On Kehillah Transport Services. You Can Find Your Details Below</p>
                    </div>
                </div>
            </div>
        </base-header>

        <div v-if="driver.driver" class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img src="/img/cars/picanto.jpg" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="card-body pt-0 pt-md-4">
                            <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                        <div>
                                            <span class="heading">{{salesCount}}</span>
                                            <span class="description">Days Done</span>
                                        </div>
                                        <div>
                                            <span class="heading">{{24 - salesCount}}</span>
                                            <span class="description">Days Left</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <base-progress type="success" :height="8" :value="parseInt(salesCount/24 * 100)" :label="salesCount + ' out of 24 days done in ' + driver.driver.driverStatus  "></base-progress>
                              </div>
                            </div>
                            <div class="text-center">
                                <h3>
                                    {{driver.driver.fullName}}<span class="font-weight-light"></span>
                                </h3>
                                <div class="h5 font-weight-300">
                                    <i class="ni location_pin mr-2"></i>{{driver.driver.address}}
                                </div>
                                <div class="h5 mt-4">
                                    <i class="ni business_briefcase-24 mr-2"></i>Driver Of {{driver.driver.currentCar.carNumber}}
                                </div>
                                <div>
                                    <i class="ni education_hat mr-2"></i>{{driver.driver.currentCar.modelName}}({{driver.driver.currentCar.modelYear}})
                                </div>
                                <hr class="my-4" />
                                <pre>{{driver.driver.driverStatus}}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">More Information</h3>
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
                                          <p>{{driver.driver.fullName}}</p>
                                        </div>
                                        <div class="col-lg-6">
                                          <h4>Email</h4>
                                          <p>{{driver.driver.email}}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                          <h4>Address</h4>
                                          <p>{{driver.driver.address}}</p>
                                        </div>
                                        <div class="col-lg-6">
                                          <h4>Phone Number</h4>
                                          <p>{{driver.driver.phoneNumber}}</p>
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
                                        <p>{{driver.driver.guarantorFullName}}</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Email</h4>
                                        <p>{{driver.driver.guarantorEmail}}</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <h4>Address</h4>
                                        <p>{{driver.driver.guarantorAddress}}</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Phone Number</h4>
                                        <p>{{driver.driver.guarantorPhoneNumber}}</p>
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
                                        <p>{{driver.driver.formerEmployerFullName}}</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Email</h4>
                                        <p>{{driver.driver.formerEmployerEmail}}</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <h4>Address</h4>
                                        <p>{{driver.driver.formerEmployerAddress}}</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Phone Number {{salesCount}}</h4>
                                        <p>{{driver.driver.formerEmployerPhoneNumber}}</p>
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
import {mapState} from 'vuex';
  export default {
    name: 'user-profile',
    beforeCreate () {
      this.$store.dispatch('driver/fetchDriverByIdExternal')
      .then((resp) => {
        console.log("Driver", resp.sales);
      })
      .catch(() => {
        console.log("Couldnt Fetch");
      })

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
      ...mapState(['driver']),
      namer() {
        return localStorage.uberName
      },
      salesCount(){
        if (this.driver.driver) {
          const sales = this.driver.driver.sales;
          return sales.length * 6
        }
        return 0
      },
    },
  };
</script>
<style></style>
