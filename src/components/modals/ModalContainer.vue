<template>
    <div class="modal-container">
      <modal-message-only v-show="type === 1" :message="message"
                          @toggle-modal-msg-only="toggleModalContainer"></modal-message-only>
      <div class="modal-bg-conatiner" @click="toggleModalContainer"></div>
    </div>
</template>

<script>
import ModalMessageOnly from './ModalMessageOnly'
export default {
  name: 'ModalConatiner',
  components: { ModalMessageOnly },
  props: {
    // List of type:
    // 1: Modal Message Only
    type: { require: true, type: Number, default: 0 },
    message: { type: String, default: 'Successfully' }
  },
  methods: {
    toggleModalContainer (status) {
      this.$emit('toggle-modal-container', false)
    }
  }
}
</script>

<style scoped>

</style>
