<template>
  <div class="main-container">
    <div id="loginContainer" class="center-form-container" v-if="flagLogin">
      <form-login @toggle-flag-login="toggleFlagLoginStatus" @toggle-modal="toggleModalSignIn"></form-login>
    </div>
    <div class="center-form-container" v-else>
      <form-forget-password @toggle-flag-login="toggleFlagLoginStatus" @toggle-modal="toggleModalForgetPassword"></form-forget-password>
    </div>
    <modal-container :type="modalType" :message="successMsg" v-show="flagModal" @toggle-modal-container="closeModal"></modal-container>
  </div>
</template>

<script>
import FormLogin from '../../components/forms/FormLogin'
import FormForgetPassword from '../../components/forms/FormForgetPassword'
import ModalContainer from '../../components/modals/ModalContainer'
export default {
  name: 'Login',
  components: {
    FormLogin,
    FormForgetPassword,
    ModalContainer
  },
  data: function () {
    return {
      flagLogin: true,
      modalType: 1,
      successMsg: '',
      flagModal: false
    }
  },
  methods: {
    toggleModalSignIn (type, msg) {
      this.modalType = type
      this.successMsg = msg
      this.flagModal = true
    },
    toggleModalForgetPassword (type, msg) {
      this.modalType = type
      this.successMsg = msg
      this.flagModal = true
    },
    closeModal () {
      this.flagModal = false
    },
    toggleFlagLoginStatus (status) {
      this.flagLogin = status
    }
  }
}
</script>
