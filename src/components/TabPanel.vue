<template>
  <div class="tab-panel" :class="{ 'tab-panel--active': active }">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.tab-panel
  display: none

  &--active
    display: block
</style>
