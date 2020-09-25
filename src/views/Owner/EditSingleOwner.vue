<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
        <span class="mask bg-info opacity-8"></span>
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                <div class="card card-profile shadow">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 order-lg-2">
                            <div class="card-profile-image">
                                <a href="#">
                                    <img src="/img/cars/dump-truck.jpg" class="rounded-circle">
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        <div class="d-flex justify-content-between">
                        </div>
                    </div>
                    <div class="card-body pt-0 pt-md-4">
                        <div class="row">
                            <div class="col">
                                <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                    <div>
                                        <span class="heading">3</span>
                                        <span class="description">Cars</span>
                                    </div>
                                    <div>
                                        <span class="heading">3</span>
                                        <span class="description">Drivers</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <h3>
                                Jessica Jones<span class="font-weight-light">, 27</span>
                            </h3>
                            <div class="h5 font-weight-300">
                                <i class="ni location_pin mr-2"></i>Bucharest, Romania
                            </div>
                            <div class="h5 mt-4">
                                <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-8 order-xl-1">
                <card shadow type="secondary">
                    <div slot="header" class="bg-white border-0">
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h3 class="mb-0">Edit Single Owner  <router-link to="/dashboard/owner-list" class="btn btn-primary">Back To All Owners</router-link></h3>
                            </div>
                        </div>
                    </div>
                    <template>
                        <form>
                            <h3 class="text-muted mb-4">User Information</h3>
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
                            <h3 class="text-muted mb-4">Address Information</h3>
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


export default {

  data(){
    return {
      createOwner: {
        username: '',
        email: '',
        phoneNumber: '',
        address: '',
        country: '',
        other: {},
      },
      model: {
        fullName: '',
        email: '',
        phoneNumber: '',
        alternatePhoneNumber: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        other: {},
      },

    }// end of data
  },
  methods: {
    handleCreateOwner() {
      const noneIsEmpty = this.validateBody(this.model);
      if (noneIsEmpty) {
        console.log("noneIsEmpty", "Go Agead Create Owner");
        // CREATE OWNER
        console.log(JSON.stringify(this.model));
      } else {
        alert("Error!! Please Fill All Required Fields")
      }
    },
    validateBody(payload){
      delete payload.other
      let meto = true
      for (var item in payload){
        if (!this.isNotEmpty(payload[`${item}`])) {
          meto = false
        }
      }
      return meto
    },
    isNotEmpty(value){
      return value !== '' && value !== undefined && value !== null
    },
  },
}
</script>

<style lang="css" scoped>
</style>
