<template>
  <div class="chart-doughnut box">
    <TabPanels v-if="chartTabss">
      <TabPanel
        v-for="chartTab in chartTabss"
        :active="chartTab.name === activeTab"
        :key="chartTab"
      >
        <div class="chart-doughnut__main">
          <div class="chart-doughnut__canvas-box">
            <Doughnut
              width="400"
              height="400"
              class="chart-doughnut__canvas"
              :data="chartTab.data"
              :options="options"
            />
          </div>
          <div class="chart-doughnut__info">
            <TabButtons class="chart-doughnut__tab-buttons">
              <TabButton
                v-for="chartTabInner in chartTabss"
                :active="chartTabInner.name === activeTab"
                @click="activeTab = chartTabInner.name"
              >
                {{ chartTabInner.name }}
              </TabButton>
            </TabButtons>
            <DoughnutList
              class="chart-doughnut__list"
              :labels="chartTab.data.labels"
              :dataset="chartTab.data.datasets[0]"
            />
          </div>
        </div>
      </TabPanel>
    </TabPanels>
    <div v-else class="text text--gray text--center text--sm">Not found</div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed, ref } from "vue";
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
import DoughnutList from "@/components/DoughnutList.vue";
import { useProfile } from "@/stores/profile";

const storeProfile = useProfile();
const exchanges = ref(null);
const activeTab = ref(null);

onMounted(async () => {
  const allocation = await storeProfile.getAllocation();
  if (!allocation || !allocation.exchanges) {
    return;
  }

  exchanges.value = allocation.exchanges;
  activeTab.value = exchanges.value[0].name;
});

ChartJS.register(LineElement, LinearScale, ArcElement, CategoryScale, PointElement);

const backgroundColor = reactive([
  "#2dbd21",
  "#1cf1f1",
  "#1653c9",
  "#EF3D3D",
  "#FC9333",
  "#D939D2",
  "#F7FC00",
  "#CCCCCC",
]);
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

const chartTabss = computed(() => {
  if (!exchanges.value) {
    return;
  }

  const tabs = exchanges.value.map((exchange) => {
    const sortedCurrencies = exchange.currencies.sort((a, b) => {
      return parseFloat(b.value || 0) - parseFloat(a.value || 0);
    });

    return {
      name: exchange.name,
      data: {
        labels: sortedCurrencies.map((currencyItem) => currencyItem.currency),
        datasets: [
          {
            data: sortedCurrencies.map((currencyItem) => currencyItem.value || 0),
            backgroundColor,
            offset: 2,
          },
        ],
      },
    };
  });

  return tabs;
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
      height: 307px

  &__info
    margin-left: auto
    flex: 0 0 245px

  &__list
    margin-top: 32px

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
