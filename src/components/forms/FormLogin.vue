<template>
    <transition name="fade">
      <div class="login-form">
        <span class="title-center-form-container margin-bottom-10">Welcome back!</span>
        <span class="description-center-form-container">Sign in with your email</span>
        <div class="form-group-container">
          <span class="form-error-msg" v-text="formErrorMsg" v-if="!isFormValid"></span>
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
          <button class="btn btn-primary btn-full-width margin-bottom-20" @click="signIn">Sign In</button>
          <span class="form-group-plain-text margin-bottom-20">Or</span>
        </div>
        <button class="btn btn-facebook btn-full-width margin-bottom-20" @click="signInByFB">Facebook</button>
        <button class="btn btn-gmail btn-full-width margin-bottom-20" @click="signInByGmail">Gmail</button>
        <button class="btn btn-cyan btn-full-width margin-bottom-20" @click="signInByPhone">Phone</button>
        <div class="bottom-link-container">
          <router-link :to="{ name: 'register-user'}" class="sign-up">Sign up</router-link>
          <a href="javascript:;" class="forget-password" @click="toggleFlagLogin">Forget password?</a>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'FormLogin',
  data: function () {
    return {
      isFormValid: true,
      formErrorMsg: '',
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
    signIn () {
      if (this.email !== '' && this.isEmailValid && this.password !== '') {
        this.$emit('toggle-modal', 1, 'You sign in successfully with email ' + this.email + '.')
      } else {
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
    signInByFB () {
      this.$emit('toggle-modal', 1, 'You choose sign in by Facebook.')
    },
    signInByGmail () {
      this.$emit('toggle-modal', 1, 'You choose sign in by Gmail.')
    },
    signInByPhone () {
      this.$emit('toggle-modal', 1, 'You choose sign in by phone.')
    },
    toggleFlagLogin () {
      this.$emit('toggle-flag-login', false)
    }
  }
}
</script>

<style scoped>

</style>
