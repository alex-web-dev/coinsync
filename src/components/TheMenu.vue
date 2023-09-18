<template>
  <nav class="menu" :class="{ 'menu--active': isActive }">
    <ul class="menu__list">
      <li class="menu__item" v-for="item in list" :key="item.text">
        <RouterLink class="link menu__link" :to="item.routerLink" @click="close">
          {{ item.text }}
        </RouterLink>
      </li>
    </ul>
    <button class="menu__toggle" @click="toggle">
      <span class="menu__lines"></span>
    </button>
    <div class="menu__backdrop" @click="close"></div>
  </nav>
</template>

<script setup>
import { ref, reactive } from "vue";

const list = reactive([
  {
    text: "Assets Overview",
    routerLink: { name: "overview" },
  },
  {
    text: "Portfolio  Analitics",
    routerLink: "#",
  },
  {
    text: "Reporting",
    routerLink: "#",
  },
  {
    text: "User Guide",
    routerLink: "#",
  },
]);
const isActive = ref(false);

function toggle() {
  isActive.value = !isActive.value;
}

function close() {
  isActive.value = false;
}
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.menu
  &__list
    margin: -10px -30px 0
    display: flex
    align-items: center
    flex-wrap: wrap

  &__item
    position: relative
    margin: 10px 30px 0

  &__link
    position: relative
    font-size: 20px
    font-weight: 500
    color: #fff
    transition: color 0.3s

    &:before
      content: ''
      position: absolute
      left: 0
      bottom: -8px
      height: 2.5px
      width: 100%
      background: #fff
      opacity: 0
      visibility: hidden
      transition: visibility 0.3s, opacity 0.3s
      pointer-events: none

    &:hover
      &:before
        opacity: 1
        visibility: visible

  &__toggle
    height: 27px
    display: none

  &__lines
    position: relative
    z-index: 6

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

  &__backdrop
    position: fixed
    left: 0
    top: 0
    display: none
    width: 100%
    height: 100%
    background: rgba($color-black, 0.5)
    visibility: hidden
    opacity: 0
    transition: visibility .3s, opacity .3s

  @media (max-width: 1280px)
    &__list
      margin-left: -20px
      margin-right: -20px

    &__item
      margin-left: 20px
      margin-right: 20px

  @media (max-width: 991px)
    position: relative

    &__toggle
      position: relative
      z-index: 3
      display: block

    &__list
      position: fixed
      left: 0
      top: 0
      z-index: 3
      margin: 0
      padding: 74px 25px 25px
      justify-content: flex-start
      align-items: flex-start
      flex-direction: column
      width: 100%
      max-width: 260px
      height: 100%
      background: $color-primary
      transform: translateX(-100%)
      opacity: 0
      visibility: hidden
      overflow-y: auto
      transition: opacity 0.4s, visibility 0.4s, transform 0.4s

    &__item
      margin: 0

      &:not(:first-child)
        margin-top: 20px
        margin-left: 0

    &__backdrop
      display: block

    &--active &__list
      visibility: visible
      opacity: 1
      transform: translateX(0)

    &--active &__lines
      height: 0

    &--active &__lines:before
      transform: rotate(-45deg)

    &--active &__lines:after
      transform: rotate(45deg)

    &--active &__backdrop
        visibility: visible
        opacity: 1
</style>
