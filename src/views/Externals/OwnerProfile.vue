<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(/img/cars/morning2.jpg); background-size: cover; background-position: center top;">
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

                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">My Account</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form>
                                <h6 class="heading-small text-muted mb-4">User information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Full Name"
                                                        placeholder="Full Name"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.fullName"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email address"
                                                        placeholder="jesse@example.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.email"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Phone Number"
                                                        placeholder="+1 354 88 77 22"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.phoneNumber"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Alternate Phone Number"
                                                        placeholder="+233 277 11 99 19"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.alternatePhoneNumber"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="pl-lg-4">
                                  <a href="#" class="btn btn-dark">Edit Personal Details</a>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h6 class="heading-small text-muted mb-4">Address information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Address"
                                                        placeholder="Home Address"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.address"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="City"
                                                        placeholder="City"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.city"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Country"
                                                        placeholder="Country"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.country"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Postal/Zip Code"
                                                        placeholder="Postal code"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.zipCode"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="pl-lg-4">
                                  <a href="#" class="btn btn-dark">Edit Address Details</a>
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
    created() {
      this.$store.dispatch('owner/fetchOwnerByIdExternal')
      .then((resp) => {
        console.log(resp);
      })
      .catch(() => {
        console.log("Failed");
      })
    },
    computed: {
      ...mapState(['owner']),
      namer() {
        return localStorage.uberName
      },
      model(){
        return this.owner.owner;
      },
    },
  };
</script>
<style></style>
