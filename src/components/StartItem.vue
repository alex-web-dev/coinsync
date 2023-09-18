<template>
  <div class="start-item">
    <div v-if="slots.text" class="text text--xl start-item__text">
      <slot name="text"></slot>
    </div>
    <div v-if="slots.buttons" class="start-item__btns">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script setup>
import { useSlots } from "vue";

const slots = useSlots();
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.start-item
  padding: 45px 90px
  border-radius: 12px
  background: #FFF
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.07)
  text-align: center

  &__btns
    margin: -12px -12px 0
    display: flex
    justify-content: center
    flex-wrap: wrap

    &:not(:first-child)
      padding-top: 30px

    & > :slotted(a),
    & > :slotted(button)
      margin: 12px 12px 0
      min-width: 183px

  @media (max-width: 991px)
    padding: 40px 50px

  @media (max-width: 767px)
    padding: 30px 16px

    &__btns
      margin-top: -20px

      & > :slotted(a),
      & > :slotted(button)
        margin-top: 20px
        width: 100%
</style>
