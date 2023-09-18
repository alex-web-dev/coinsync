<template>
  <div class="analytics">
    <div class="analytics__header">
      <h2 class="title2 analytics__title">Assets Analytics</h2>
      <AppButton
        class="analytics__header-link"
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
    </div>
    <div class="analytics__list">
      <AnalyticsItem
        class="analytics__item"
        v-for="item in list"
        :elems="item.elems"
        :link-text="item.linkText"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import AppButton from "@/components/AppButton.vue";
import AnalyticsItem from "@/components/AnalyticsItem.vue";

const list = reactive([
  {
    elems: [
      {
        title: "All Time Profit",
        value: "+520 EUR (13%)",
      },
      {
        img: "coins/near.png",
        title: "Best Performer",
        name: "NEAR",
        value: "+60 EUR (+45%)",
      },
      {
        img: "coins/litecoin.png",
        title: "Worst Performer",
        name: "Litecoin",
        value: "-13 EUR (-6%)",
        type: "danger",
      },
    ],
    linkText: "Go to deep Analytics →",
  },
  {
    elems: [
      {
        title: "Total deposits",
        value: "+50.000 EUR",
      },
      {
        title: "Total withdrow",
        value: "-60.000 EUR",
        type: "danger",
      },
      {
        title: "Total free paid",
        value: "-300 EUR",
        type: "danger",
      },
    ],
    linkText: "Go to deep Analytics →",
  },
  {
    elems: [
      {
        title: "Lorem Ipsum",
        value: "+345 EUR",
      },
      {
        title: "Lorem Ipsum",
        value: "-60 EUR",
        type: "danger",
      },
      {
        title: "Lorem Ipsum",
        value: "+300 EUR",
      },
    ],
    linkText: "Go to deep Analytics →",
  },
  {
    elems: [
      {
        title: "Lorem Ipsum",
        value: "+345 EUR",
      },
      {
        title: "Lorem Ipsum",
        value: "-60 EUR",
        type: "danger",
      },
      {
        title: "Lorem Ipsum",
        value: "+300 EUR",
      },
    ],
    linkText: "Go to deep Analytics →",
  },
]);
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.analytics
  &__header
    margin-bottom: 20px
    display: flex

    &-link
      &:not(:first-child)
        margin-left: 30px

      &:nth-child(3)
        margin-left: auto

  &__list
    margin: -40px -10px 0
    display: flex
    flex-wrap: wrap

  &__item
    margin: 40px 10px 0
    width: calc(25% - 20px)

  @media (max-width: 1240px)
    &__item
      width: calc(50% - 20px)

  @media (max-width: 767px)
    &__header
      &-link
        &:not(:first-child)
          margin-left: 15px

    &__title
      font-size: 18px

    &__item
      width: calc(100% - 20px)
</style>
