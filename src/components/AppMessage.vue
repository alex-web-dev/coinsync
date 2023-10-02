<template>
  <div class="message" :class="message.type ? 'message--' + message.type : ''">
    <p class="message__text">{{ message.text }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/sass/vars.sass'

.message
  padding: 12px 15px
  border-radius: 6px
  background: #3c3939
  font-size: 14px
  color: #fff

  &--success
    background-color: $color-success

  &--error
    background-color: $color-danger

  @media (max-width: 991px)
    padding: 11px 14px

  @media (max-width: 767px)
    padding: 10px 12px

</style>
