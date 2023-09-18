<template>
  <div class="overview-sidebar" :class="{ 'overview-sidebar--active': active }">
    <div class="overview-sidebar__content">
      <slot></slot>
    </div>
    <div class="overview-sidebar__backdrop" @click="emit('close')"></div>
  </div>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.overview-sidebar
  position: relative
  flex: 0 0 285px

  &__backdrop
    display: none

  &__item
    &:not(:first-child)
      margin-top: 40px

  @media (max-width: 991px)
    position: fixed
    right: 0
    top: 0
    z-index: 8
    width: 100%
    height: 100%
    visibility: hidden
    opacity: 0
    transition: opacity 0.4s, visibility 0.4s, transform 0.4s

    &__backdrop
      position: fixed
      right: 0
      top: 0
      display: block
      width: 100%
      height: 100%
      background: rgba(#131313, 0.5)

    &__content
      position: relative
      z-index: 1
      margin-left: auto
      padding: 20px 25px 20px 20px
      height: 100%
      width: 335px
      background-color: #fbfbfb
      transform: translateX(100%)
      box-shadow: 0px 4px 31px 0px rgba(0, 0, 0, 0.29)
      transition: transform 0.3s

    &--active
      opacity: 1
      visibility: visible
      transform: translateX(0)

    &--active &__content
      transform: translateX(0)
</style>
