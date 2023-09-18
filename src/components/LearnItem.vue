<template>
  <div class="learn-item">
    <div class="title5 title5--regular title5--center learn-item__title">
      <slot name="title"></slot>
    </div>
    <div class="learn-item__main box">
      <div class="text text--gray">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.learn-item
  &__title
    margin-bottom: 20px

  &__main
    padding: 30px 50px

  @media (max-width: 991px)
    &__main
      padding-left: 35px
      padding-right: 35px

  @media (max-width: 767px)
    &__main
      padding-left: 25px
      padding-right: 25px
</style>
