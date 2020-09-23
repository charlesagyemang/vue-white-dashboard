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
                        <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                    </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img src="/img/theme/team-4-800x800.jpg" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                          <div class="d-flex justify-content-between">
                              <base-button size="sm" type="success" class="mr-4">Add Sales</base-button>
                              <base-button size="sm" type="danger" class="float-right">Report Fault</base-button>
                          </div>
                        </div>
                        <div class="card-body pt-0 pt-md-4">
                            <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                        <div>
                                            <span class="heading">22</span>
                                            <span class="description">Weeks Done</span>
                                        </div>
                                        <div>
                                            <span class="heading">{{150 - 22}}</span>
                                            <span class="description">Weeks Left</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                              <div class="col">
                                <base-progress type="success" :height="8" :value="parseInt(22/150 * 100)" label="22 out of 150 weeks"></base-progress>
                              </div>
                            </div>
                            <div class="text-center">
                                <h3>
                                    {{namer}}<span class="font-weight-light"></span>
                                </h3>
                                <div class="h5 font-weight-300">
                                    <i class="ni location_pin mr-2"></i>Bucharest, Romania
                                </div>
                                <div class="h5 mt-4">
                                    <i class="ni business_briefcase-24 mr-2"></i>Driver Of GS 2898 - 20
                                </div>
                                <div>
                                    <i class="ni education_hat mr-2"></i>Kia Morning Lx 2010
                                </div>
                                <hr class="my-4" />
                                <p>Currently On Main Contract Model 3</p>
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
                                          <p>Kwabena Boateng Amoah Joseph</p>
                                        </div>
                                        <div class="col-lg-6">
                                          <h4>Email</h4>
                                          <p>beastlkyquist@mm.com</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                          <h4>Address</h4>
                                          <p>19 Banana Street East Legon, Accra</p>
                                        </div>
                                        <div class="col-lg-6">
                                          <h4>Phone Number</h4>
                                          <p>+233 288 77 22 77</p>
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
                                        <p>Kwabena Boateng Amoah Joseph</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Email</h4>
                                        <p>beastlkyquist@mm.com</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <h4>Address</h4>
                                        <p>19 Banana Street East Legon, Accra</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Phone Number</h4>
                                        <p>+233 288 77 22 77</p>
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
                                        <p>Kwabena Boateng Amoah Joseph</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Email</h4>
                                        <p>beastlkyquist@mm.com</p>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-lg-6">
                                        <h4>Address</h4>
                                        <p>19 Banana Street East Legon, Accra</p>
                                      </div>
                                      <div class="col-lg-6">
                                        <h4>Phone Number</h4>
                                        <p>+233 288 77 22 77</p>
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
