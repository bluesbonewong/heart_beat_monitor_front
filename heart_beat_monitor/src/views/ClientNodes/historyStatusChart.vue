<template>
  <div class="history-status-chart">
    <chart height="100%" width="100%" />
  </div>
</template>

<script>
import Chart from '@/views/ClientNodes/components/charts/MixChartHistory.vue'

export default {
  name: 'historyStatusChart',
  components: {Chart}
}
</script>

<style scoped>
.history-status-chart {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
