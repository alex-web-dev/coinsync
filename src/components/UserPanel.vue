<template>
  <div class="user-panel" v-click-outside="close">
    <button class="user-panel__btn" @click="toggle">
      <img src="@/assets/img/icons/user.svg" alt="" />
    </button>
    <div class="user-panel__main" v-if="isActive">
      <AppUser class="user-panel__user" />
      <ul class="user-panel__list">
        <li class="user-panel__item" v-for="menuItem in menu" :key="menuItem.text">
          <a
            class="link link--lg user-panel__link"
            :class="[menuItem.type ? `link--${menuItem.type}` : '']"
            href="#"
          >
            {{ menuItem.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import AppUser from "./AppUser.vue";
import { ref, reactive } from "vue";

const isActive = ref(false);
const menu = reactive([
  {
    text: "Account settings",
    link: "#",
  },
  {
    text: "My crypto goals",
    link: "#",
  },
  {
    text: "My crypto diary",
    link: "#",
  },
  {
    text: "My crypto exchanges",
    link: "#",
  },
  {
    text: "Log out",
    link: "#",
    type: "danger",
  },
]);

function toggle() {
  isActive.value = !isActive.value;
}

function close() {
  isActive.value = false;
}
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.user-panel
  position: relative

  &__btn
    img
      display: block

  &__main
    position: absolute
    right: 0
    top: 100%
    margin-top: 10px
    padding: 20px 65px 25px 25px
    width: 300px
    border-radius: 18px
    background-color: #fff
    box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.18)

  &__user
    &:not(:last-child)
      margin-bottom: 30px

  &__item
    &:not(:first-child)
      margin-top: 20px

  @media (max-width: 767px)
    &__btn
      img
        max-width: 48px

    &__main
      margin-top: 8px
      padding-bottom: 37px

    &__item
      &:not(:first-child)
        margin-top: 35px
</style>
