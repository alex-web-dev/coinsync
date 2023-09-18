<template>
  <div class="chart-section">
    <div class="chart-section__header">
      <h2 class="title4 chart-section__title" v-if="title">{{ title }}</h2>
      <AppButton
        class="chart-section__header-link"
        link
        text-color="primary"
        text-size="sm"
        hide-text="sm"
      >
        <template #leftIcon>
          <img src="@/assets/img/icons/refresh.svg" alt="" />
        </template>
        Recalculate
      </AppButton>
      <AppButton class="chart-section__header-link" link text-color="primary" text-size="sm">
        Go to deep Analytics →
      </AppButton>
    </div>
    <ChartDoughnut v-if="type === 'doughnut'" />
    <ChartLine v-else />
  </div>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import ChartLine from "@/components/ChartLine.vue";
import ChartDoughnut from "@/components/ChartDoughnut.vue";

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: "line",
  },
});
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.chart-section
  &__header
    display: flex
    align-items: center
    margin-bottom: 20px

    &-link
      margin-left: 30px

      &:nth-child(3)
        margin-left: auto

  &__main
    padding: 38px 50px
    display: flex

  @media (max-width: 767px)
    &__header
      &-link
        margin-left: 15px

  @media (max-width: 340px)
    &__header
      &-link
        font-size: 14px
</style>
