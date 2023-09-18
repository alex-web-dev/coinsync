<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script setup></script>

<style lang="sass" scoped>
.main
  padding: calc(60px + 84px) 0 110px
  flex: 1 1 auto

  @media (max-width: 991px)
    padding: calc(50px + 80px) 0 72px

  @media (max-width: 767px)
    padding: calc(30px + 80px) 0 52px
</style>
