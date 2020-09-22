<template lang="html">
  <div class="">
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <!-- Card stats -->
        <div class="row">
            <div class="col-xl-3 col-lg-6">
                <stats-card title="Total traffic"
                            type="gradient-red"
                            sub-title="350,897"
                            icon="ni ni-active-40"
                            class="mb-4 mb-xl-0">

                    <template slot="footer">
                        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                        <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>
            </div>
            <div class="col-xl-3 col-lg-6">
                <stats-card title="Total traffic"
                            type="gradient-orange"
                            sub-title="2,356"
                            icon="ni ni-chart-pie-35"
                            class="mb-4 mb-xl-0">

                    <template slot="footer">
                        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
                        <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>
            </div>
            <div class="col-xl-3 col-lg-6">
                <stats-card title="Sales"
                            type="gradient-green"
                            sub-title="924"
                            icon="ni ni-money-coins"
                            class="mb-4 mb-xl-0">

                    <template slot="footer">
                        <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
                        <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>

            </div>
            <div class="col-xl-3 col-lg-6">
                <stats-card title="Performance"
                            type="gradient-info"
                            sub-title="49,65%"
                            icon="ni ni-chart-bar-32"
                            class="mb-4 mb-xl-0">

                    <template slot="footer">
                        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
                        <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>
            </div>
        </div>
    </base-header>
    <div class="row">
  <div class="col-md-4">
      <base-button block type="primary" class=" mb-3" @click="modals.modal1 = true">
          Default
      </base-button>
      <modal :show.sync="modals.modal1">
          <h6 slot="header" class="modal-title" id="modal-title-default">Type your modal title</h6>

          <p>Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.</p>
          <p>A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.</p>

          <template slot="footer">
              <base-button type="primary">Save changes</base-button>
              <base-button type="link" class="ml-auto" @click="modals.modal1 = false">Close
              </base-button>
          </template>
      </modal>
  </div>
  <div class="col-md-4">
      <base-button block type="warning" class=" mb-3" @click="modals.modal2 = true">
          Notification
      </base-button>

      <modal :show.sync="modals.modal2"
             gradient="danger"
             modal-classes="modal-danger modal-dialog-centered">
          <h6 slot="header" class="modal-title" id="modal-title-notification">Your attention is required</h6>

          <div class="py-3 text-center">
              <i class="ni ni-bell-55 ni-3x"></i>
              <h4 class="heading mt-4">You should read this!</h4>
              <p>A small river named Duden flows by their place and supplies it with the
                  necessary regelialia.</p>
          </div>

          <template slot="footer">
              <base-button type="white">Ok, Got it</base-button>
              <base-button type="link"
                           text-color="white"
                           class="ml-auto"
                           @click="modals.modal2 = false">
                  Close
              </base-button>
          </template>
      </modal>
  </div>
  <div class="col-md-4">
      <base-button block type="default" class=" mb-3" @click="modals.modal3 = true">
          Form
      </base-button>

      <modal :show.sync="modals.modal3"
             body-classes="p-0"
             modal-classes="modal-dialog-centered modal-sm">
          <card type="secondary" shadow
                header-classes="bg-white pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0">
              <template>
                  <div class="text-muted text-center mb-3">
                      <small>Sign in with</small>
                  </div>
                  <div class="btn-wrapper text-center">
                      <base-button type="neutral">
                          <img slot="icon" src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/github.svg">
                          Github
                      </base-button>

                      <base-button type="neutral">
                          <img slot="icon" src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/common/google.svg">
                          Google
                      </base-button>
                  </div>
              </template>
              <template>
                  <div class="text-center text-muted mb-4">
                      <small>Or sign in with credentials</small>
                  </div>
                  <form role="form">
                      <base-input alternative
                                  class="mb-3"
                                  placeholder="Email"
                                  addon-left-icon="ni ni-email-83">
                      </base-input>
                      <base-input alternative
                                  type="password"
                                  placeholder="Password"
                                  addon-left-icon="ni ni-lock-circle-open">
                      </base-input>
                      <base-checkbox>
                          Remember me
                      </base-checkbox>
                      <div class="text-center">
                          <base-button type="primary" class="my-4">Sign In</base-button>
                      </div>
                  </form>
              </template>
          </card>
      </modal>
  </div>
</div>

  </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  components: {
    Modal,
  },
  data(){
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false,
      }
    }
  },
}
</script>

<style lang="css" scoped>
</style>
