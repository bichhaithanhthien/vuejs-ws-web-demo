<template>
  <transition name="fade">
    <div class="forget-password">
      <span class="title-center-form-container margin-bottom-10">:(</span>
      <span class="description-center-form-container margin-bottom-20">Please input your email to get new password</span>
      <div class="form-group-container">
        <span class="form-error-msg" v-text="formErrorMsg" v-if="!isFormValid"></span>
        <div class="form-group" :class="{'invalid': !isEmailValid}">
          <input id="email" name="email" type="text" v-model="email"
                 class="form-input-text" placeholder="Email" />
          <span class="error-msg" v-text="emailErrorMsg"></span>
        </div>
        <button class="btn btn-primary btn-full-width margin-bottom-20" @click="getPassword">SEND</button>
      </div>
      <div class="bottom-link-container">
        <router-link :to="{ name: 'register-user'}" class="sign-up">Sign up</router-link>
        <a href="javascript:;" class="login" @click="toggleFlagPlugin">Sign in</a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'formForgetPassword',
  data: function () {
    return {
      isFormValid: true,
      formErrorMsg: '',
      email: '',
      isEmailValid: true,
      emailErrorMsg: '',
      // eslint-disable-next-line no-useless-escape
      emailReg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  watch: {
    'email' (newValue, oldValue) {
      if (this.email !== '') {
        if (this.emailReg.test(this.email)) {
          this.isEmailValid = true
        } else {
          this.isEmailValid = false
          this.emailErrorMsg = 'Email is wrong format.'
        }
      } else {
        this.isEmailValid = true
        this.emailErrorMsg = ''
      }
    }
  },
  methods: {
    getPassword () {
      if (this.email === '') {
        this.isEmailValid = false
        this.emailErrorMsg = 'Email is empty.'
      } else if (this.email !== '' && this.isEmailValid) {
        this.$emit('toggle-modal', 1, 'New password was sent to your email ' + this.email + '.')
      }
    },
    toggleFlagPlugin () {
      this.$emit('toggle-flag-login', true)
    }
  }
}
</script>

<style scoped>

</style>
