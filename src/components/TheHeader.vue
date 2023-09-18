<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <AppLogo class="header__logo" />
        <TheMenu class="header__menu" />
        <UserPanel class="header__user-panel" />
      </div>
    </div>
  </header>
</template>

<script setup>
import TheMenu from "@/components/TheMenu.vue";
import UserPanel from "@/components/UserPanel.vue";
import AppLogo from "@/components/AppLogo.vue";
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.header
  position: fixed
  z-index: 8
  width: 100%
  padding: 16px 0
  background-color: $color-primary

  &__content
    display: flex
    align-items: center

  &__logo
    margin-right: 70px
    flex: 0 0 auto

  &__menu
    margin-right: 30px

    &:last-child
      margin-left: auto
      margin-right: 0

  &__user-panel
    margin-left: auto
    flex: 0 0 auto

  @media (max-width: 1280px)
    &__logo
      margin-right: 40px

  @media (max-width: 991px)
    padding: 14px 0

    &__content
      justify-content: space-between

    &__menu
      position: relative
      z-index: 3
      margin-right: 0
      order: -1

    &__logo
      margin-left: 8px
      margin-right: 0

    &__user-panel
      margin-left: 0
</style>
