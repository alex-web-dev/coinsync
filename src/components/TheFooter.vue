<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__main">
          <AppLogo class="footer__logo" :description="true" />
          <div class="footer__menu">
            <ul class="footer__menu-list">
              <li class="footer__menu-item" v-for="menuItem in menuList" :key="menuItem">
                <RouterLink class="footer__menu-link" :to="menuItem.routerLink">
                  {{ menuItem.text }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__copyright">Coinsync © 2023</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { reactive } from "vue";
import AppLogo from "@/components/AppLogo.vue";

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
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.footer
  padding: 44px 0 37px
  background-color: #22284a

  &__main
    display: flex
    align-items: center

  &__logo
    margin-right: 70px
    flex: 0 0 auto

  &__menu
    overflow: hidden

    &-list
      margin: -10px -30px
      display: flex
      align-items: center
      flex-wrap: wrap

    &-item
      margin: 10px 30px

    &-link
      font-size: 20px
      font-weight: 500
      color: #fff

  &__copyright
    text-align: center
    font-size: 17px
    line-height: 1.88

    color: rgba(#fff, 0.5)

    &:not(:first-child)
      margin-top: 50px

  @media (max-width: 1280px)
    &__logo
      margin-right: 40px

    &__menu
      &-list
        margin-left: -20px
        margin-right: -20px

      &-item
        margin-left: 20px
        margin-right: 20px

  @media (max-width: 991px)
    &__main
      flex-direction: column

    &__logo
      margin-bottom: 54px
      margin-right: 0

  @media (max-width: 767px)
    padding: 40px 0 74px

    &__logo
      margin-bottom: 62px

    &__menu
      &-list
        margin-top: -25px
        flex-direction: column

      &-item
        margin-top: 25px

    &__copyright
      &:not(:first-child)
        margin-top: 97px
</style>
