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
                                <h3 class="mb-0">Edit Single Driver  <router-link to="/dashboard/driver-list" class="btn btn-primary">Back To All Drivers</router-link></h3>
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
                                                    label="Address"
                                                    placeholder="18 Banana Street"
                                                    input-classes="form-control-alternative"
                                                    v-model="model.address"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4" />

                            <h3 class="text-muted mb-4">Guarantor Information</h3>
                            <div class="pl-lg-4">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <base-input alternative=""
                                                    label="Full Name"
                                                    placeholder="Full Name"
                                                    input-classes="form-control-alternative"
                                                    v-model="model.guarantorFullName"
                                        />
                                    </div>
                                    <div class="col-lg-6">
                                        <base-input alternative=""
                                                    label="Email address"
                                                    placeholder="jesse@example.com"
                                                    input-classes="form-control-alternative"
                                                    v-model="model.guarantorEmail"
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <base-input alternative=""
                                                    label="Phone Number"
                                                    placeholder="+1 354 88 77 22"
                                                    input-classes="form-control-alternative"
                                                    v-model="model.guarantorPhoneNumber"
                                        />
                                    </div>
                                    <div class="col-lg-6">
                                        <base-input alternative=""
                                                    label="Address"
                                                    placeholder="19 Banana Street"
                                                    input-classes="form-control-alternative"
                                                    v-model="model.guarantorAddress"
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4" />
                            <h3 class="text-muted mb-4">Former Employer Information</h3>
                            <div class="pl-lg-4">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <base-input alternative=""
                                                    label="Full Name"
                                                    placeholder="Full Name"
                                                    input-classes="form-control-alternative"
                                                    v-model="model.formerEmployerFullName"
                                        />
                                    </div>
                                    <div class="col-lg-6">
                                        <base-input alternative=""
                                                    :label="'Email address ' + model.formerEmployerEmail || '' "
                                                    placeholder="jesse@example.com"
                                                    input-classes="form-control-alternative"
                                                    v-model="newModel.formerEmployerEmail"
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <base-input alternative=""
                                                    :label="'Phone Number ' + model.formerEmployerPhoneNumber || '' "
                                                    placeholder="+1 354 88 77 22"
                                                    input-classes="form-control-alternative"
                                                    v-model="newModel.formerEmployerPhoneNumber"
                                        />
                                    </div>
                                    <div class="col-lg-6">
                                        <base-input alternative=""
                                                    label="Address"
                                                    placeholder="20 Banana Street"
                                                    input-classes="form-control-alternative"
                                                    v-model="model.formerEmployerAddress"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="pl-lg-4">
                              <button @click.prevent="handleEditOwner" class="btn btn-dark">Update Driver Details</button>
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
  computed: {
    ...mapState(['driver']),
    model(){
      return this.driver.driver;
    },
  },
  data () {
    return {
      newModel: {},
    }
  },
  methods: {
    handleEditOwner() {

      // const ownerDataToUpdate = {
      //   fullName: this.model.fullName,
      //   email: this.model.email,
      //   phoneNumber: this.model.phoneNumber,
      //   address: this.model.address,
      //   guarantorFullName: this.model.guarantorFullName || "",
      //   guarantorEmail: this.model.guarantorEmail  || "",
      //   guarantorPhoneNumber: this.model.guarantorPhoneNumber || "",
      //   guarantorAddress: this.model.guarantorAddress || "",
      //   formerEmployerFullName: this.model.formerEmployerFullName || "",
      //   formerEmployerEmail: this.model.formerEmployerEmail || "",
      //   formerEmployerPhoneNumber: this.model.formerEmployerPhoneNumber || "",
      //   formerEmployerAddress: this.model.formerEmployerAddress || "",
      // }

      console.log(this.newModel);

      //
      this.$store.dispatch('driver/editDriver', {
        driverId: this.model.id,
        ownerDataToUpdate: this.newModel,
      })
      .then((driver) =>{
        console.log("=====", driver);
        this.$notify({
          type: 'success',
          title: `Status Updated Successfully`,
        });
        this.$router.push({path: '/dashboard/driver-list'})
      }).catch((error) => {
        this.$notify({
          type: 'danger',
          title: `Status Failed To Update: Error => ${error.message}`,
        });
      });

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
