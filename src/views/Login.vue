<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">

                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <h1>Sign In </h1>
                        </div>
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Password"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            <div class="text-center">
                                <base-button @click="handleLogin" type="primary" class="my-4">Sign in</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div class="col-6 text-right">
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        model: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      handleLogin() {
        const nonthingIsEmpty = this.validateBody(this.model);
        if (nonthingIsEmpty) {

          //========== LOGIN ===========//
              this.$store
              .dispatch("user/login", this.model)
              .then((resp) => {
                console.log(resp);
                if (resp.role === "ADMIN") {
                  this.$router.push({
                    name: "dashboard",
                  });
                } else if (resp.role === "OWNER") {
                  this.$router.push({
                    path: `/owner/dashboard/${resp.owner.id}`,
                  });
                } else {
                  this.$router.push({
                    path: `/driver/details/loobi${resp.driver.id}`,
                  });
                }
                console.log("logssss",resp.role);

              })
              .catch(() => {
                alert("Wrong Username And Password")
              });
            // console.log(dataToSend);
          //========= LOGIN ===========//
        } else {
          alert('Error!! Please Fill All required Fields')
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
<style>
</style>
