<template>
  <component :is="type" :to="to" class="btn" :class="btnClass">
    <i class="btn__left-icon" v-if="slots.leftIcon">
      <slot name="leftIcon"></slot>
    </i>
    <i class="btn__icon" v-if="slots.icon">
      <slot name="icon"></slot>
    </i>
    <span class="btn__label">
      <slot></slot>
    </span>
    <i class="btn__right-icon" v-if="slots.rightIcon">
      <slot name="rightIcon"></slot>
    </i>
  </component>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useSlots } from "vue";

const slots = useSlots();
const props = defineProps({
  color: {
    type: String,
    default: null,
  },
  hoverColor: {
    type: String,
    default: null,
  },
  to: {
    type: [String, Object],
    default: null,
  },
  size: {
    type: String,
    default: null,
  },
  textSize: {
    type: String,
    default: null,
  },
  textColor: {
    type: String,
    default: null,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: false,
  },
  hideText: {
    type: String,
    default: null,
  },
});
const type = ref(props.to ? "router-link" : "button");
const btnClass = reactive([
  props.color ? `btn--${props.color}` : "",
  props.textColor ? `btn--text-${props.textColor}` : "",
  props.hoverColor ? `btn--hover-${props.hoverColor}` : "",
  props.size ? `btn--${props.size}` : "",
  props.textSize ? `btn--text-${props.textSize}` : "",
  props.hideText ? `btn--text-hide-${props.hideText}` : "",
  props.icon ? "btn--icon" : "",
  props.link ? "btn--link" : "",
]);
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.btn
  padding: 22px 31px
  display: inline-flex
  align-items: center
  justify-content: center
  background-color: $color-primary
  border-radius: 50px
  box-shadow: 0px 4px 25px 0px rgba(31, 67, 255, 0.30)
  font-size: 18px
  line-height: 1.167
  text-align: center
  cursor: pointer
  color: #fff
  font-weight: 500
  transition: color 0.3s, background 0.3s

  &:hover
    background-color: #5c76ff

  &:hover
    i
      :deep(svg)
        fill: #fff

  &__left-icon
    margin-right: 10px

  &__right-icon
    margin-left: 10px

  &__left-icon,
  &__right-icon,
  &__icon
    transition: opacity .3s
    flex: 0 0 auto

    :deep(svg)
      transition: fill .3s

  &--link
    padding: 0
    background-color: transparent
    box-shadow: none
    color: $color-black
    font-weight: 400

    &:hover
      background-color: transparent
      color: $color-primary
      box-shadow: none

  &--link#{&}--text-primary
    &:hover
      color: rgba($color-primary, 0.45)

  &--link#{&}--text-primary:hover &__left-icon
    opacity: 0.45

  &--white
    background: #fff
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.07)
    color: $color-primary

    &:hover
      background: #fff
      color: #a9b6ff

  &--hover-primary
    &:hover
      background: $color-primary
      color: #fff
      box-shadow: 0px 4px 25px 0px rgba(31, 67, 255, 0.30)

  &--sm
    padding-top: 15px
    padding-bottom: 15px

  &--text-primary
    color: $color-primary

  &--text-gray
    color: $color-gray

  &--text-xs
    font-size: 14px

  &--text-sm
    font-size: 16px

  &--text-lg
    font-size: 20px

  &--text-xl
    font-size: 22px

  &--icon
    padding: 0
    height: 65px

  @media (max-width: 991px)
    &--text-xl
      font-size: 20px

  @media (max-width: 767px)
    &--text-xl
      font-size: 18px

    &--text-hide-sm &__label
      display: none

    &--text-hide-sm &__left-icon
      margin-right: 0

    &--text-hide-sm &__right-icon
      margin-left: 0
</style>
