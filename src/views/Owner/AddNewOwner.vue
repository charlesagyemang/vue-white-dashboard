<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
        <span class="mask bg-info opacity-8"></span>
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                <div class="card card-profile shadow">
                    <div class="card-body pt-0 pt-md-4">
                        <div class="text-center">
                            <h3>
                                Jessica Jones
                            </h3>
                            <div class="h5 font-weight-300">
                                <i class="ni location_pin mr-2"></i>Admin
                            </div>
                            <div class="h5 mt-4">
                                <router-link class="btn btn-primary" to="/dashboard/owner-list">View All Owners</router-link>
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
                                <h3 class="mb-0">Fill The Form below To Add A New Owner</h3>
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
                              <button @click.prevent="handleCreateOwner" class="btn btn-dark">Add Owner</button>
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
