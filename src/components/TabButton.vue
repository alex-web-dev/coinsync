<template>
  <button class="tab-button" :class="className" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  textTransform: {
    type: String,
    default: null,
  },
});
const emit = defineEmits(["click"]);
const className = computed(() => [
  props.active ? "tab-button--active" : "",
  props.textTransform ? `tab-button--text-${props.textTransform}` : "",
]);
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.tab-button
  padding: 4px
  border-radius: 4px
  font-size: 14px
  color: #506d8e
  font-weight: 500
  flex: 0 0 auto

  &--active
    background-color: #fff
    cursor: default

  &--text-uppercase
    text-transform: uppercase
</style>
