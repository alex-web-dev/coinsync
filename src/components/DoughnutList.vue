<template>
  <ul v-if="labels && dataset" class="doughnut-list">
    <li class="doughnut-list__item" v-for="item in legend">
      <span
        class="doughnut-list__item-color"
        :style="{ backgroundColor: item.backgroundColor }"
      ></span>
      <span class="doughnut-list__item-name">{{ item.label }}</span>
      <span class="doughnut-list__item-value">{{ item.value }}%</span>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  labels: {
    type: Array,
    default: null
  },
  dataset: {
    type: Object,
    default: null
  },
});

const legend = computed(() => {
  return props.dataset.data.map((value, index) => {
    return {
      label: props.labels[index],
      value,
      backgroundColor: props.dataset?.backgroundColor[index],
    };
  });
});
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.doughnut-list
  &__item
    display: flex
    align-items: center
    font-size: 12px
    color: #000

    &:not(:first-child)
      margin-top: 12px

    &-color
      margin-right: 15px
      flex: 0 0 auto
      width: 20px
      height: 20px
      border-radius: 50%
      background-color: #ccc

    &-name
      display: flex
      line-height: 1

      &:not(:last-child)
        margin-right: 15px

    &-value
      margin-left: auto
</style>
