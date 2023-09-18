<template>
  <div class="user">
    <a class="user__avatar" href="#">
      <img src="@/assets/img/avatar.jpg" alt="" />
    </a>
    <div class="user__info">
      <RouterLink class="user__name" to="#">Hi, John Doe!</RouterLink>
      <div class="user__email">johndoe@gmail.com</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.user
  display: flex
  align-items: center

  &__avatar
    margin-right: 15px
    flex: 0 0 auto
    width: 60px
    height: 60px
    border-radius: 50%
    overflow: hidden

    img
      width: 100%
      height: 100%
      object-fit: cover

  &__name
    color: #000

  &__email
    margin-top: 2px
    font-size: 14px
    color: #a4a4a4
</style>
