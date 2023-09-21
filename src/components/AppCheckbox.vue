<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      :type="type"
      :checked="checked"
      @change="emit('update:checked', $event.target.checked)"
    />
    <span class="checkbox__switch"></span>
    <span class="text checkbox__text" v-if="slots.default">
      <slot></slot>  
    </span>
  </label>
</template>

<script setup>
import { useSlots } from "vue";

const slots = useSlots();

defineProps({
  type: {
    type: String,
    default: "checkbox",
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:checked"]);
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass
@import @/assets/sass/mixins.sass

.checkbox
  display: inline-flex
  align-items: flex-start
  user-select: none

  &__input
    display: none

  &__switch
    margin-top: 1px
    position: relative
    flex: 0 0 auto
    width: 16px
    height: 16px
    display: flex
    align-items: center
    justify-content: center
    border: 1px solid $color-light-gray
    border-radius: 3px
    cursor: pointer

    &:before
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      content: ''
      @include pseudo-icon('../assets/img/icons/check-white.svg', 12px, 9px)
      visibility: hidden
      opacity: 0


  &__input:checked ~ &__switch
    background: $color-primary
    border-color: $color-primary

    &:before
      visibility: visible
      opacity: 1

  &__text
    margin-left: 10px
    font-size: 12px
    line-height: 1.4
    user-select: none
    color: $color-gray
</style>
