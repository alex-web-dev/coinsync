<template>
  <div class="chart-line box">
    <div class="chart-line__header">
      <div class="text text--medium chart-line__title">Portfolio value</div>
      <TabButtons class="chart-line__tab-buttons">
        <TabButton
          v-for="item in dataItems"
          :key="item.name"
          :active="item.name === activeDataItem"
          @click="activeDataItem = item.name"
          text-transform="uppercase"
        >
          {{ item.name }}
        </TabButton>
      </TabButtons>
    </div>
    <div class="chart-line__canvas-box">
      <Line class="chart-line__canvas" ref="$chart" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, nextTick, computed } from "vue";
import { Chart as ChartJS, LineElement, Filler } from "chart.js";
import { Line } from "vue-chartjs";
import TabButtons from "@/components/TabButtons.vue";
import TabButton from "@/components/TabButton.vue";

ChartJS.register(LineElement, Filler);

const backgroundColor = ref(null);
const activeDataItem = ref("1h");
const dataItems = reactive([
  {
    name: "1h",
    data: [
      0, 44, 94, 81, 103, 137, 165, 272, 263, 313, 306, 356, 450, 493, 506, 500, 572, 647, 700,
    ],
  },
  {
    name: "24h",
    data: [
      0, 700, 520, 640, 750, 670, 820, 790, 640, 680, 745, 800, 750, 655, 730, 745, 780, 820, 830,
    ],
  },
  {
    name: "1w",
    data: [
      0, 850, 870, 940, 750, 740, 650, 630, 625, 660, 745, 810, 820, 815, 790, 835, 820, 810, 840,
    ],
  },
  {
    name: "1m",
    data: [
      0, 840, 770, 860, 870, 900, 880, 920, 930, 990, 900, 870, 850, 845, 880, 890, 920, 950, 960,
    ],
  },
  {
    name: "1y",
    data: [
      0, 980, 970, 950, 965, 1020, 1040, 1045, 1055, 1230, 1225, 1220, 1210, 1040, 960, 890, 920,
      950, 980,
    ],
  },
  {
    name: "all",
    data: [
      0, 840, 980, 760, 500, 700, 450, 670, 860, 990, 900, 700, 680, 670, 900, 840, 1020, 1040, 990,
    ],
  },
]);
const activeData = computed(() => {
  return dataItems.find((item) => item.name === activeDataItem.value).data;
});
const labels = computed(() => {
  return new Array(activeData.value.length).fill("");
});
const $chart = ref();
const gradient = ref(null);
const chartData = computed(() => {
  return {
    labels: labels.value,
    datasets: [
      {
        data: activeData.value,
        fill: true,
        borderColor: "#18a0fb",
        borderWidth: 1,
        backdropColor: "#f1f1f1",
        backgroundColor: backgroundColor.value,
        tension: 0.4,
      },
    ],
  };
});
const chartOptions = ref({
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      suggestedMax: 750,
      grid: {
        tickLength: 0,
      },
      ticks: {
        backdropColor: "#000",
        color: "#b6b6b6",
        stepSize: 150,
        padding: 10,
        font: {
          family: "'Inter', sans-serif",
        },
        callback: (value) => {
          return "$" + value + ".00";
        },
      },
    },
  },
});

onMounted(async () => {
  await nextTick();
  const $canvas = $chart.value.chart.canvas;
  gradient.value = $canvas.getContext("2d").createLinearGradient(150, 310, 100, 0);
  gradient.value.addColorStop(0, "rgba(255, 255, 255, 0.6)");
  gradient.value.addColorStop(1, "rgba(24, 160, 251, 0)");
  backgroundColor.value = gradient.value;
});
</script>

<style lang="sass">
.chart-line
  padding: 38px 50px

  &__header
    margin-bottom: 10px
    display: flex
    align-items: center
    justify-content: space-between

  &__tab-buttons
    margin-left: 20px

  &__canvas
    height: 260px

  @media (max-width: 991px)
    padding: 32px 40px

  @media (max-width: 767px)
    padding: 20px 20px 15px 15px

    &__header
      margin-bottom: 20px
      padding-left: 5px
      flex-direction: column
      align-items: flex-start

    &__tab-buttons
      margin-top: 15px
      margin-left: 0
</style>
