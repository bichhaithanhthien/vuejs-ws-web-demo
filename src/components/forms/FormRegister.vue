<template>
  <transition name="fade">
    <div class="register-form">
      <span class="title-center-form-container margin-bottom-10">Welcome to our website</span>
      <span class="description-center-form-container">Please fill in these fields with your information</span>
      <div class="form-group-container">
        <span class="form-error-msg" v-text="formErrorMsg" v-if="!isFormValid"></span>
        <div class="form-group" :class="{'invalid': !isNameValid}">
          <input id="name" name="name" type="text" v-model="name" class="form-input-text"
                 placeholder="Name" />
          <span class="error-msg" v-text="nameErrorMsg"></span>
        </div>
        <div class="form-group" :class="{'invalid': !isEmailValid}">
          <input id="email" name="email" type="text" v-model="email" class="form-input-text"
                 placeholder="Email" />
          <span class="error-msg" v-text="emailErrorMsg"></span>
        </div>
        <div class="form-group" :class="{'invalid': !isPasswordValid}">
          <input id="password" name="password" type="password" v-model="password"
                 class="form-input-text" placeholder="Password" />
          <span class="error-msg" v-text="passwordErrorMsg"></span>
        </div>
        <button class="btn btn-primary btn-full-width margin-bottom-20" @click="signUp">Sign Up</button>
        <span class="form-group-plain-text margin-bottom-20">Or</span>
      </div>
      <button class="btn btn-facebook btn-full-width margin-bottom-20" @click="signUpByFB">Facebook</button>
      <button class="btn btn-gmail btn-full-width margin-bottom-20" @click="signUpByGmail">Gmail</button>
      <button class="btn btn-cyan btn-full-width margin-bottom-20" @click="signUpByPhone">Phone</button>
      <div class="bottom-link-container">
        <router-link :to="{ name: 'login'}" class="sign-up">You already have a account? Sign in here.</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FormRegister',
  data: function () {
    return {
      isFormValid: true,
      formErrorMsg: '',
      name: '',
      isNameValid: true,
      nameErrorMsg: '',
      password: '',
      isPasswordValid: true,
      passwordErrorMsg: '',
      email: '',
      isEmailValid: true,
      emailErrorMsg: '',
      // eslint-disable-next-line no-useless-escape
      emailReg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      successMsg: ''
    }
  },
  watch: {
    'name' (newValue, oldValue) {
      if (this.name !== '') {
        this.isNameValid = true
      }
    },
    'password' (newValue, oldValue) {
      if (this.password !== '') {
        this.isPasswordValid = true
      }
    },
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
    signUp () {
      if (this.email !== '' && this.isEmailValid && this.password !== '' && this.name !== '') {
        this.$emit('toggle-modal', 1, 'Hello ' + this.name + ', you have registered successfully with email ' + this.email + '.')
      } else {
        if (this.name === '') {
          this.isNameValid = false
          this.nameErrorMsg = 'Name is empty.'
        }
        if (this.email === '') {
          this.isEmailValid = false
          this.emailErrorMsg = 'Email is empty.'
        }
        if (this.password === '') {
          this.isPasswordValid = false
          this.passwordErrorMsg = 'Password is empty.'
        }
      }
    },
    signUpByFB () {
      this.$emit('toggle-modal', 1, 'You choose sign up by Facebook.')
    },
    signUpByGmail () {
      this.$emit('toggle-modal', 1, 'You choose sign up by Gmail.')
    },
    signUpByPhone () {
      this.$emit('toggle-modal', 1, 'You choose sign up by phone.')
    }
  }
}
</script>

<style scoped>

</style>
