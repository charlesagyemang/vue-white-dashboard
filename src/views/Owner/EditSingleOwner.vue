<template lang="html">
  <div v-if="model" class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
        <span class="mask bg-info opacity-8"></span>
    </base-header>
    <div class="container-fluid mt--7">
        <div class="row">

            <div class="col-xl-12 order-xl-1">
                <card shadow type="secondary">
                    <div slot="header" class="bg-white border-0">
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h3 class="mb-0">Edit Details Of {{model.fullName}}  <router-link to="/dashboard/owner-list" class="btn btn-primary">Back To All Owners</router-link></h3>
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
                              <button @click.prevent="handleEditOwner" class="btn btn-dark">Update Owner Details</button>
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
  methods: {
    handleEditOwner() {
      let ownerId = this.model.id;
      let ownerDataToUpdate = this.model;

      delete ownerDataToUpdate.id
      delete ownerDataToUpdate.createdAt
      delete ownerDataToUpdate.updatedAt
      delete ownerDataToUpdate.cars
      delete ownerDataToUpdate.userId
      delete ownerDataToUpdate.other
      delete ownerDataToUpdate.imageUrl
      delete ownerDataToUpdate.status

      console.log(JSON.stringify(ownerId))
      console.log(JSON.stringify(ownerDataToUpdate))

      this.$store.dispatch('owner/editOwner', {
        ownerId,
        ownerDataToUpdate,
      })
      .then((owner) =>{
        // notify
        this.$notify({
          type: 'success',
          title: `Status Updated Successfully. Changed To ${owner.status}`,
        });
        this.$router.push({path: '/dashboard/owner-list'})
      }).catch((error) => {
        // this.owner.status = currentOwner.status;
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
  computed: {
    ...mapState(['owner']),
    model(){
      return this.owner.owner
    },
  },
}
</script>

<style lang="css" scoped>
</style>
