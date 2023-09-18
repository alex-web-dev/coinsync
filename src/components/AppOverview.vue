<template>
  <div class="overview">
    <div class="container">
      <div class="overview__content">
        <div class="overview__header">
          <h1 class="title2 overview__title">My assets overview</h1>
          <ToggleButton
            class="overview__sidebar-open"
            color="light-gray"
            size="sm"
            @click="sidebarActive = true"
          />
        </div>
        <div class="overview__body">
          <div class="overview__main">
            <ChartSection
              class="overview__section"
              v-for="chartSection in chartSections"
              :title="chartSection.title"
              :type="chartSection.type"
            />
          </div>
          <OverviewSidebar
            class="overview__sidebar"
            :active="sidebarActive"
            @close="sidebarActive = false"
          >
            <ConnectItem
              class="overview__sidebar-item"
              v-for="connectItem in connectItems"
              :key="connectItem.title"
              :title="connectItem.title"
              :list="connectItem.list"
              :button-text="connectItem.buttonText"
            />
          </OverviewSidebar>
        </div>
        <AppAnalytics class="overview__section" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import ChartSection from "@/components/ChartSection.vue";
import ConnectItem from "@/components/ConnectItem.vue";
import OverviewSidebar from "@/components/OverviewSidebar.vue";
import ToggleButton from "@/components/ToggleButton.vue";
import AppAnalytics from "@/components/AppAnalytics.vue";

const connectItems = reactive([
  {
    title: "Connected Crypto Exchanges:",
    list: ["Binance", "Bybit", "Kracken", "Kucoin"],
    buttonText: "+ Connect new Exchange",
  },
  {
    title: "Connected Crypto Wallets:",
    list: ["Trust Wallet", "Metamask", "Aptos Wallet"],
    buttonText: "+ Connect new Exchange",
  },
]);
const chartSections = reactive([
  {
    title: "Chart",
    type: "line",
  },
  {
    title: "Allocation",
    type: "doughnut",
  },
]);
const sidebarActive = ref(false);
</script>

<style lang="sass" scoped>
@import @/assets/sass/vars.sass

.overview
  &__header
    margin-bottom: 50px

  &__body
    display: flex

  &__header
    display: flex
    align-items: center
    justify-content: space-between

  &__main
    flex: 1 1 auto
    min-width: 0

  &__section
    &:not(:first-child)
      margin-top: 90px

  &__sidebar
    margin-top: 50px
    margin-left: 122px
    flex: 0 0 285px

    &-open
      margin-left: 20px
      display: none

    &-item
      &:not(:first-child)
        margin-top: 40px

  @media (max-width: 1240px)
    &__sidebar
      margin-left: 60px

  @media (max-width: 991px)
    &__sidebar
      margin-top: 0

      &-open
        display: block

      &-item
        &:not(:first-child)
          margin-top: 25px

    &__section
      &:not(:first-child)
        margin-top: 75px

  @media (max-width: 767px)
    padding-top: 10px

    &__header
      margin-bottom: 45px

    &__section
      &:not(:first-child)
        margin-top: 60px
</style>
