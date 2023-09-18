<template>
  <div class="chart-doughnut box">
    <TabPanels>
      <TabPanel v-if="activeTab === 'wallet'" :active="true">
        <div class="chart-doughnut__main">
          <div class="chart-doughnut__canvas-box">
            <Doughnut
              width="400"
              height="400"
              class="chart-doughnut__canvas"
              ref="canvas1"
              :data="dataWallet"
              :options="options"
            />
          </div>
          <div class="chart-doughnut__info">
            <TabButtons class="chart-doughnut__tab-buttons">
              <TabButton :active="activeTab === 'wallet'" @click="activeTab = 'wallet'">
                Crypto Wallet
              </TabButton>
              <TabButton :active="activeTab === 'exchange'" @click="activeTab = 'exchange'">
                Crypto Exchange
              </TabButton>
            </TabButtons>
            <ul v-if="legendWallet.length" class="chart-doughnut__list">
              <li class="chart-doughnut__item" v-for="item in legendWallet">
                <span
                  class="chart-doughnut__item-color"
                  :style="{ backgroundColor: item.backgroundColor }"
                ></span>
                <span class="chart-doughnut__item-name">{{ item.label }}</span>
                <span class="chart-doughnut__item-value">{{ item.value }}%</span>
              </li>
            </ul>
          </div>
        </div>
      </TabPanel>
      <TabPanel v-if="activeTab === 'exchange'" :active="true">
        <div class="chart-doughnut__main">
          <div class="chart-doughnut__canvas-box">
            <Doughnut
              width="400"
              height="400"
              class="chart-doughnut__canvas"
              ref="canvas"
              :data="dataExchange"
              :options="options"
            />
          </div>
          <div class="chart-doughnut__info">
            <TabButtons class="chart-doughnut__tab-buttons">
              <TabButton :active="activeTab === 'wallet'" @click="activeTab = 'wallet'">
                Crypto Wallet
              </TabButton>
              <TabButton :active="activeTab === 'exchange'" @click="activeTab = 'exchange'">
                Crypto Exchange
              </TabButton>
            </TabButtons>
            <ul v-if="legendExchange.length" class="chart-doughnut__list">
              <li class="chart-doughnut__item" v-for="item in legendExchange">
                <span
                  class="chart-doughnut__item-color"
                  :style="{ backgroundColor: item.backgroundColor }"
                ></span>
                <span class="chart-doughnut__item-name">{{ item.label }}</span>
                <span class="chart-doughnut__item-value">{{ item.value }}%</span>
              </li>
            </ul>
          </div>
        </div>
      </TabPanel>
    </TabPanels>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  ArcElement,
  CategoryScale,
  PointElement,
} from "chart.js";
import { Doughnut } from "vue-chartjs";
import TabButtons from "@/components/TabButtons.vue";
import TabButton from "@/components/TabButton.vue";
import TabPanels from "@/components/TabPanels.vue";
import TabPanel from "@/components/TabPanel.vue";

ChartJS.register(LineElement, LinearScale, ArcElement, CategoryScale, PointElement);

const canvas1 = ref(null);
const activeTab = ref("wallet");
const dataWallet = reactive({
  labels: [
    "NEAR Protocol",
    "Litecoin",
    "dYdX",
    "Bitcoin",
    "Avalanche",
    "Cosmos",
    "Polkadot",
    "Others",
  ],
  datasets: [
    {
      data: [28.71, 26.48, 23.17, 8.77, 3.68, 2.98, 2.71, 3.5],
      backgroundColor: [
        "#2dbd21",
        "#1cf1f1",
        "#1653c9",
        "#EF3D3D",
        "#FC9333",
        "#D939D2",
        "#F7FC00",
        "#CCCCCC",
      ],
      offset: 2,
    },
  ],
});
const dataExchange = reactive({
  labels: [
    "NEAR Protocol",
    "Litecoin",
    "dYdX",
    "Bitcoin",
    "Avalanche",
    "Cosmos",
    "Polkadot",
    "Others",
  ],
  datasets: [
    {
      data: [34.71, 20.48, 17.17, 14.77, 2.68, 3.98, 1.71, 4.5],
      backgroundColor: [
        "#2dbd21",
        "#1cf1f1",
        "#1653c9",
        "#EF3D3D",
        "#FC9333",
        "#D939D2",
        "#F7FC00",
        "#CCCCCC",
      ],
      offset: 1,
    },
  ],
});
const options = reactive({
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      boxPadding: 5,
    },
    title: {
      display: false,
    },
  },
  cutout: 118,
  animation: false,
  responsive: true,
});

const legendWallet = computed(() => {
  return dataWallet.datasets[0].data.map((value, index) => {
    return {
      label: dataWallet.labels[index],
      value,
      backgroundColor: dataWallet.datasets[0]?.backgroundColor[index],
    };
  });
});

const legendExchange = computed(() => {
  return dataExchange.datasets[0].data.map((value, index) => {
    return {
      label: dataExchange.labels[index],
      value,
      backgroundColor: dataExchange.datasets[0]?.backgroundColor[index],
    };
  });
});
</script>

<style lang="sass">
.chart-doughnut
  display: flex
  flex-direction: column
  padding: 40px 75px 50px

  &__tab-buttons
    margin-left: auto

  &__main
    position: relative
    display: flex

  &__canvas
    &-box
      width: 307px

  &__info
    margin-left: auto
    flex: 0 0 245px

  &__list
    margin-top: 32px

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

    &-name
      display: flex
      line-height: 1

      &:not(:last-child)
        margin-right: 15px

    &-value
      margin-left: auto

  @media (max-width: 991px)
    padding: 35px 50px 45px

  @media (max-width: 767px)
    padding: 25px 20px

    &__main
      flex-direction: column
      align-items: center

    &__info
      margin-top: 30px
      margin-right: auto

    &__canvas
      transform: scale(0.95, 0.95)

  @media (max-width: 360px)
    &__canvas
      transform: scale(0.8, 0.8)
</style>
