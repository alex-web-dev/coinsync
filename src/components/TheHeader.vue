<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <AppLogo class="header__logo" />
        <template v-if="storeAuth.isAuth">
          <AppMenu class="header__menu" :list="menuList" />
          <UserPanel class="header__user-panel" />
        </template>
        <AppMenu v-else class="header__menu" :list="menuListNotAuth" />
      </div>
    </div>
  </header>
</template>

<script setup>
import AppMenu from "@/components/AppMenu.vue";
import UserPanel from "@/components/UserPanel.vue";
import AppLogo from "@/components/AppLogo.vue";
import { reactive } from 'vue';
import { useAuth } from "@/stores/auth";

const storeAuth = useAuth();
const menuList = reactive([
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
const menuListNotAuth = reactive([
  {
    text: "Log in",
    routerLink: { name: "login" },
  },
  {
    text: "Register",
    routerLink: { name: "registration" },
  },
]);
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
