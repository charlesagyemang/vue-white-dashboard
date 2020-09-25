<template lang="html">
  <div class="">
    <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">
        <!-- <span class="mask bg-info opacity-8"></span> -->
    </base-header>

    <div class="container-fluid mt--7">
        <div class="row">
            <div class="col-xl-12 order-xl-1">
                <card shadow type="secondary">
                    <div slot="header" class="bg-white border-0">
                        <div class="row align-items-center">
                            <div class="col-8">
                              <h3 class="mb-0">Fill The Form below To Add A New Driver
                                <router-link class="btn btn-primary" to="/dashboard/driver-list">VIEW ALL DRIVERS</router-link>
                              </h3>
                            </div>
                        </div>
                    </div>
                    <template>
                      <form class="">
                         <div class="container">
                           <h3 class="text-muted mb-4">PERSONAL INFO</h3>
                           <div class="row">
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Full Name</h5>
                               <base-input
                                           v-model="createDriver.fullName"
                                           type="text"
                                           placeholder="Full Name"
                                           addon-left-icon="ni ni-single-02">
                               </base-input>
                             </div>
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Email</h5>
                               <base-input alternative
                                           v-model="createDriver.email"
                                           class="mb-3"
                                           type="email"
                                           placeholder="Email"
                                           addon-left-icon="ni ni-email-83">
                               </base-input>
                             </div>
                           </div>
                           <div class="row">
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Phone Number</h5>
                               <base-input alternative
                                           v-model="createDriver.phoneNumber"
                                           type="text"
                                           placeholder="Phone Number"
                                           addon-left-icon="ni ni-mobile-button">
                               </base-input>
                             </div>
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Address</h5>
                               <base-input alternative
                                           v-model="createDriver.address"
                                           type="text"
                                           placeholder="Address"
                                           addon-left-icon="ni ni-square-pin">
                               </base-input>
                             </div>
                           </div>
                           <hr class="my-4" />


                           <!-- GUARANTER INFO -->
                          <h3 class="text-muted mb-4">GUARANTOR INFORMATION</h3>
                           <div class="row">
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Guaranter Full Name</h5>
                               <base-input
                                           v-model="createDriver.guaranterFullName"
                                           type="text"
                                           placeholder="Guaranter Full Name"
                                           addon-left-icon="ni ni-single-02">
                               </base-input>
                             </div>
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Guaranter Email</h5>
                               <base-input alternative
                                           v-model="createDriver.guaranterEmail"
                                           class="mb-3"
                                           type="email"
                                           placeholder="Guaranter Email"
                                           addon-left-icon="ni ni-email-83">
                               </base-input>
                             </div>
                           </div>
                           <div class="row">
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Guaranter Phone Number</h5>
                               <base-input alternative
                                           v-model="createDriver.guaranterPhoneNumber"
                                           type="text"
                                           placeholder="Guaranter Phone Number"
                                           addon-left-icon="ni ni-mobile-button">
                               </base-input>
                             </div>
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Guaranter Address</h5>
                               <base-input alternative
                                           v-model="createDriver.guaranterAddress"
                                           type="text"
                                           placeholder="Guaranter Address"
                                           addon-left-icon="ni ni-square-pin">
                               </base-input>
                             </div>
                           </div>

                           <!-- GUARANTER INFO END -->
                           <hr class="my-4" />


                           <!-- FORMER EMPLOYER INFO -->
                           <h3 class="text-muted mb-4">FORMER EMPLOYER INFORMATION</h3>
                           <div class="row">
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Fomer Employer Full Name</h5>
                               <base-input
                                           v-model="createDriver.formerEmployerFullName"
                                           type="text"
                                           placeholder="Fomer Employer Full Name"
                                           addon-left-icon="ni ni-single-02">
                               </base-input>
                             </div>
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Fomer Employer Email</h5>
                               <base-input alternative
                                           v-model="createDriver.formerEmployerEmail"
                                           class="mb-3"
                                           type="email"
                                           placeholder="Fomer Employer Email"
                                           addon-left-icon="ni ni-email-83">
                               </base-input>
                             </div>
                           </div>
                           <div class="row">
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Fomer Employer Phone Number</h5>
                               <base-input alternative
                                           v-model="createDriver.formerEmployerPhoneNumber"
                                           type="text"
                                           placeholder="Fomer Employer Phone Number"
                                           addon-left-icon="ni ni-mobile-button">
                               </base-input>
                             </div>
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Fomer Employer Address</h5>
                               <base-input alternative
                                           v-model="createDriver.formerEmployerAddress"
                                           type="text"
                                           placeholder="Fomer Employer Address"
                                           addon-left-icon="ni ni-square-pin">
                               </base-input>
                             </div>
                           </div>

                           <!-- FORMER EMPLOYER INFO END -->
                           <div class="row">
                             <div class="col">
                               <div class="text-center">
                                   <base-button block @click="handlecreateDriver" type="warning" class="my-4">CREATE DRIVER</base-button>
                               </div>
                             </div>
                             <div class="col">
                             </div>
                             <div class="col">
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

  data(){
    return {
      createDriver: {
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        guaranterFullName: '',
        guaranterEmail: '',
        guaranterPhoneNumber: '',
        guaranterAddress: '',
        formerEmployerFullName: '',
        formerEmployerEmail: '',
        formerEmployerPhoneNumber: '',
        formerEmployerAddress: '',
        other: {},
      },

    }// end of data
  },
  methods: {
    handlecreateDriver() {
      const noneIsEmpty = this.validateBody(this.createDriver);
      if (noneIsEmpty) {
        console.log("noneIsEmpty", "Go Agead Create Owner");
        // CREATE OWNER
        console.log(JSON.stringify(this.createDriver));
      } else {
        console.log(JSON.stringify(this.createDriver))
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
