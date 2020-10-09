<template lang="html">
  <div class="">
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
                              <h3 class="mb-0">Send SMS</h3>
                            </div>
                        </div>
                    </div>
                    <template>
                      <form class="">
                         <div class="container">
                             <div class="row">
                              <div class="col">
                                <h5 class="text-muted text-uppercase">Select Receiver</h5>
                                <multiselect :custom-label="phoneNumberWithName" label="phoneNumber" v-model="smsBody.driver" :options="driver.drivers"></multiselect>
                              </div>
                              <div class="col">
                                <h5 class="text-muted text-uppercase">Receivers Phone Number</h5>
                                <base-input alternative
                                            v-model="smsBody.driver.phoneNumber"
                                            class="mb-3"
                                            type="phoneNumber"
                                            placeholder="Fomer Employer Email"
                                            addon-left-icon="ni ni-mobile-button">
                                </base-input>
                              </div>

                            </div>

                           <br>
                           <div class="row">
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Select Template</h5>
                               <multiselect label="key" v-model="selectedTempList" :options="tempList"></multiselect>
                             </div>
                             <div class="col">
                               <h5 class="text-muted text-uppercase">Message Content</h5>

                               <textarea
                                 class="form-control form-control-alternative"
                                 v-model="selectedTempList.msg"
                                 rows="3"
                                 placeholder="Content Of The Message Goes Here">
                               </textarea>
                             </div>
                           </div>

                           <div class="row">
                             <div class="col">
                               <div class="text-center">
                                   <base-button block @click.prevent="handleSendSms" type="warning" class="my-4">SEND SMS</base-button>
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

import { WFClient } from 'witty-flow-sms';
import { mapState } from 'vuex';

export default {
  beforeCreate() {
    this.$store.dispatch('driver/fetchDrivers')
    .then(() => {
      console.log("drivers Fetched");
    })
  },

  data () {
    return {
      smsBody: {
        driver: {phoneNumber: '0277119919', fullName: 'Charles Agyemang'},
        message: 'Hey Test'
      },
      selectedTempList: {key: 'probation-passed', msg: 'Hi Charles Agyemang'},
    }
  },
  methods: {

    phoneNumberWithName ({ phoneNumber, fullName }) {
      return `${phoneNumber} — [${fullName}]`
    },

    handleSendSms (){
      const wittySmsClient = new WFClient('1f41908b-a9d7-4408-a0bf-4ee4665b3276', 'CvAILbsSdfjGAVVZr6RG0zgBv5jHUioh88vCuHu914');
      const phoneNumber = this.smsBody.driver.phoneNumber
      const messageToSend = this.selectedTempList.msg
      wittySmsClient.sendSms('Kehillah', phoneNumber, messageToSend)
      .then((resp) => {
        console.log(resp);
        wittySmsClient.sendSms('Kehillah', '0541348180', messageToSend)
        this.$notify({
          type: 'success',
          title: `Sms Sent Successfully`,
        });
      }).catch((error) => {
        console.log(error);
        this.$notify({
          type: 'danger',
          title: `Sms Failed To Send: ${error.message}`,
        });
      })

    },
  },

  computed: {
    ...mapState(['driver']),
    tempList() {

      const driverName = this.smsBody.driver.fullName;

      return [
          {
            key: 'contract-signed',
            msg: `Hi ${driverName}, we have received a digital copy of your signed contract. Your contract says you will start work today (9th Oct 2020). Congrats on passing the probation test and coming this far. We are looking forward to an exciting 900 days with you. Be safe out there ${driverName.split(" ")[0]} and all the best,`
          },
          {
            key: 'probation-passed',
            msg: "Hi " + driverName + ", we have gone through your reports from the mechanic and our general manager. " +
                  "We are pleased to inform you that you passed. We will like to enter a 900 day contractual " +
                  "agreement with you. Please make yourself available today and pass by the office. Thank You And Congratulations!!!!"
          },
          {
            key: 'happy',
            msg: `Hi ${driverName},`
          },
        ]
      }
  },
}
</script>

<style lang="css" scoped>
</style>
