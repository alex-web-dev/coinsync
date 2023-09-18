<template>
  <LineChart
    class="canvas"
    ref="$chart"
    :data="data"
    :options="options"
    :chartData="data"
    @chart:render="handleChartRender"
  />
</template>

<script setup>
import { reactive, ref } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const dataArray = reactive([
  0, 44, 94, 81, 103, 137, 165, 272, 263, 313, 306, 356, 450, 493, 506, 500, 572, 647, 700,
]);
const labels = reactive(new Array(dataArray.length).fill(""));
const $chart = ref();
const bg = ref(null);
const data = ref(null);
const options = reactive({
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
  },
});

function handleChartRender(chart) {
  const ctx = $chart.value.chartInstance.canvas.getContext("2d");
  const fillPattern = ctx.createLinearGradient(150, 320, 100, 0);
  fillPattern.addColorStop(0, "#ffffff");
  fillPattern.addColorStop(1, "rgba(24, 160, 251, 0)");
  ctx.fillStyle = fillPattern;
  bg.value = fillPattern;
  $chart.value.update();

  data.value = {
    labels,
    datasets: [
      {
        label: "Example Data",
        data: dataArray,
        fill: true,
        borderColor: "#18a0fb",
        borderWidth: 1,
        tension: 0.4,
        backgroundColor: fillPattern,
      },
    ],
  };
}
</script>

<style></style>
