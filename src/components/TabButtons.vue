<template>
  <div class="tab-buttons">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.tab-buttons
  padding: 4px 8px
  display: inline-flex
  align-items: center
  overflow-x: auto
  background-color: #f1f0f0
  border-radius: 6px

  :deep(.tab-button)
    &:not(:first-child)
      margin-left: 16px
</style>
