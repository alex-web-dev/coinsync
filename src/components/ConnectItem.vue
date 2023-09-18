<template>
  <div class="connect-item box">
    <h4 class="text text--sm text--medium connect-item__title" v-if="title">{{ title }}</h4>
    <ul class="connect-item__elems" v-if="list">
      <li class="connect-item__elem" v-for="(item, index) in list" :key="item">
        {{ index + 1 }}. {{ item }}
      </li>
    </ul>
    <AppButton class="connect-item__btn" v-if="buttonText" link text-color="primary" text-size="sm">
      {{ buttonText }}
    </AppButton>
  </div>
</template>

<script setup>
import AppButton from "./AppButton.vue";

defineProps({
  title: {
    type: String,
    default: null,
  },
  list: {
    type: Array,
    default: null,
  },
  buttonText: {
    type: String,
    default: null,
  },
});
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.connect-item
  padding: 25px 28px

  &__title
    margin-bottom: 20px

  &__elem
    color: $color-gray

    &:not(:first-child)
      margin-top: 10px

  &__btn
    margin-top: 20px
</style>
