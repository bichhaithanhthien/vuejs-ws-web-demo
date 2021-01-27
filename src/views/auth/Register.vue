<template>
  <div class="main-container">
    <div id="loginContainer" class="center-form-container">
      <form-register @toggle-modal="toggleModalSignUp"></form-register>
    </div>
    <modal-container :type="modalType" :message="successMsg" v-show="flagModal" @toggle-modal-container="closeModal"></modal-container>
  </div>
</template>

<script>
import FormRegister from '../../components/forms/FormRegister'
import ModalContainer from '../../components/modals/ModalContainer'
export default {
  name: 'Register',
  components: {
    FormRegister,
    ModalContainer
  },
  data: function () {
    return {
      modalType: 1,
      successMsg: '',
      flagModal: false
    }
  },
  methods: {
    toggleModalSignUp (type, msg) {
      this.modalType = type
      this.successMsg = msg
      this.flagModal = true
    },
    closeModal () {
      this.flagModal = false
    }
  }
}
</script>

<style scoped>

</style>
