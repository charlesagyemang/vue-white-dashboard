<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
           <form class="">
              <div class="container">
                <h1 class="text-white text-uppercase">Fill Form Below To Add New A Driver Or
                  <router-link class="btn btn-primary" to="/dashboard/driver-list">BACK TO ADD A NEW DRIVER</router-link>
                </h1><br>
                <div class="row">
                  <div class="col">
                    <base-input
                                v-model="createOwner.username"
                                type="text"
                                placeholder="Full Name"
                                addon-left-icon="ni ni-single-02">
                    </base-input>
                  </div>
                  <div class="col">
                    <base-input alternative
                                v-model="createOwner.email"
                                class="mb-3"
                                type="email"
                                placeholder="Email"
                                addon-left-icon="ni ni-email-83">
                    </base-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <base-input alternative
                                v-model="createOwner.phoneNumber"
                                type="text"
                                placeholder="Phone Number"
                                addon-left-icon="ni ni-mobile-button">
                    </base-input>
                  </div>
                  <div class="col">
                    <base-input alternative
                                v-model="createOwner.address"
                                type="text"
                                placeholder="Address"
                                addon-left-icon="ni ni-square-pin">
                    </base-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <base-input alternative
                                v-model="createOwner.country"
                                type="text"
                                placeholder="Country Of Origin"
                                addon-left-icon="ni ni-world-2">
                    </base-input>
                  </div>
                  <div class="col">
                    <base-input alternative
                                v-model="createOwner.country"
                                type="text"
                                placeholder="Owner Type"
                                addon-left-icon="ni ni-world-2">
                    </base-input>
                  </div>
                </div>
                <div class="text-center">
                    <base-button block @click="handleCreateOwner" type="warning" class="my-4">Submit</base-button>
                </div>
              </div>
             </form>
             <br>
             <br>
             <br>

    </base-header>


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

    }// end of data
  },
  methods: {
    handleCreateOwner() {
      const noneIsEmpty = this.validateBody(this.createOwner);
      if (noneIsEmpty) {
        console.log("noneIsEmpty", "Go Agead Create Owner");
        // CREATE OWNER
        console.log(JSON.stringify(this.createOwner));
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
