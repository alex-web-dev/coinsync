<template>
  <div class="analytics-item">
    <div class="analytics-item__main box">
      <div class="analytics-item__elems">
        <div class="analytics-item__elem" v-for="elem in elems">
          <h3 class="title5 title5--regular analytics-item__title" v-if="elem.title">
            {{ elem.title }}
          </h3>
          <div class="analytics-item__info">
            <img class="analytics-item__icon" v-if="elem.img" :src="getImage(elem.img)" alt="" />
            <span class="analytics-item__name" v-if="elem.name">{{ elem.name }}</span>
            <span
              class="analytics-item__value"
              :class="{ 'analytics-item__value--danger': elem.type === 'danger' }"
              v-if="elem.value"
            >
              {{ elem.value }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="analytics-item__footer">
      <AppButton link text-color="primary" text-size="sm">{{ linkText }}</AppButton>
    </div>
  </div>
</template>

<script setup>
import { useImage } from "@/hooks/img";
import AppButton from "@/components/AppButton.vue";

defineProps({
  elems: {
    type: Array,
    default: null,
  },
  linkText: {
    type: String,
    default: null,
  },
});

const { getImage } = useImage();
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.analytics-item
  display: flex
  flex-direction: column

  &__main
    padding: 30px
    flex: 1 1 auto

  &__elems
    height: 100%
    display: flex
    flex-direction: column

  &__elem
    &:not(:first-child)
      margin-top: 32px

  &__info
    min-height: 32px
    display: flex
    align-items: center

  &__icon
    margin-right: 10px
    flex: 0 0 auto
    width: 32px
    height: 32px
    object-fit: cover
    border-radius: 50%

  &__name
    margin-right: 10px
    color: #000

  &__value
    font-weight: 500
    color: $color-success
    white-space: nowrap

    &--danger
      color: $color-danger

  &__title
    margin-bottom: 7px

  &__footer
    margin-top: 20px
    text-align: center
</style>
