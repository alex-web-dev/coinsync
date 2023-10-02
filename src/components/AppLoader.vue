<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass
@import @/assets/sass/animation.sass

.loader
  width: 35px
  height: 35px

  &__spinner
    width: 100%
    height: 100%
    border-radius: 50%
    border: 9px solid $color-primary
    border-style: solid
    border-width: 3px
    border-bottom-color: transparent
    animation: rotate 0.7s linear infinite
</style>
