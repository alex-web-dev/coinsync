<template>
  <button class="toggle-button" :class="className">
    <span class="toggle-button__lines"></span>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: null,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => [
  props.color ? `toggle-button--${props.color}` : "",
  props.size ? `toggle-button--${props.size}` : "",
  props.active ? `toggle-button--active` : `${props.active}`,
]);
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.toggle-button
  width: 32px
  height: 32px

  &__lines
    position: relative
    z-index: 6
    margin: auto

    &,
    &:before,
    &:after
      height: 2.4px
      border-radius: 3px
      background-color: #fff
      display: block
      transform: rotate(0)
      width: 27px
      transition: transform 0.4s, width 0.4s

    &:before,
    &:after
      content: ''
      position: absolute
      right: 0

    &:before
      transform: translateY(-8px)

    &:after
      transform: translateY(8px)

  &--light-gray &__lines
    &,
    &:before,
    &:after
      background-color: $color-light-gray

  &--sm &__lines
    &,
    &:before,
    &:after
      height: 2px
      width: 20px

    &:before
      transform: translateY(-6px)

    &:after
      transform: translateY(6px)

  &--active &__lines
    height: 0

  &--active &__lines:before
    transform: rotate(-45deg)

  &--active &__lines:after
    transform: rotate(45deg)
</style>
