<template>
    <div class="modal-content-container">
      <div class="modal-content-body" v-html="message"></div>
      <div class="modal-container-footer">
        <button class="btn btn-primary" @click="toggleModal">OK</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ModalMessageOnly',
  props: {
    message: { require: true, type: String, default: 'Successfully' }
  },
  methods: {
    toggleModal () {
      this.$emit('toggle-modal-msg-only', false)
    }
  }
}
</script>

<style scoped>

</style>
