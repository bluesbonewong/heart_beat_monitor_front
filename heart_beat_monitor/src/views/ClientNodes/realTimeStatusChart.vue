<template>
  <div class="real-time-status-chart">
    <chart height="100%" width="100%" />
  </div>
</template>

<script>
import Chart from '@/views/ClientNodes/components/charts/MixChart.vue'

export default {
  name: 'realTimeStatusChart',
  components: { Chart }
}
</script>

<style scoped lang="scss">
.real-time-status-chart {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}

</style>
