<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
let echarts = require('echarts')
import resize from '@/views/ClientNodes/components/charts/mixins/resize'
import getData from '@/views/ClientNodes/components/charts/mixins/getData'

export default {
  mixins: [resize, getData],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null,
      timer: null
    }
  },
  mounted() {
    this.initChart()
    // 刷新数据
    if (!this.timer) {
      this.refreshData()
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null

    // 清除interval
    clearInterval(this.timer)
  },
  watch: {
    data: {
      handler(newVal, oldVal) {
        this.initChart()
      },
      deep: true
    }
  },
  methods: {
    refreshData() {
      // 测试
      this.data.avgload = []
      this.timer = setInterval(() => {
        console.log(new Date())
        let val = (Math.random() * 10).toFixed(2)
        this.data.avgload.push([Date.now(), val])

        // 实际
        // this.getData()
      }, 1000)
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        backgroundColor: '#344b58',
        title: {
          text: '实时状态图',
          x: '20',
          top: '20',
          textStyle: {
            color: '#fff',
            fontSize: '22'
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          borderWidth: 0,
          top: 150,
          bottom: 95,
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          x: '5%',
          top: '10%',
          textStyle: {
            color: '#90979c'
          },
          data: ['average']
        },
        calculable: true,
        xAxis: [{
          type: 'time',
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 10,
            formatter: function (value, index) {
              // 格式化成月/日，只在第一个刻度显示年份
              var date = new Date(value);
              let h = date.getHours() + ':';
              let m = date.getMinutes() + ':';
              let s = date.getSeconds();
              var texts = [(date.getMonth() + 1), date.getDate(), h + m + s];
              if (index === 0) {
                texts.unshift(date.getYear());
              }
              return texts.join('/');
            }
          },
          data: this.data.xData
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          splitArea: {
            show: false
          }
        }],
        series: [
          {
            name: 'average',
            type: 'line',
            stack: 'total',
            symbol: 'circle',
            symbolSize: 10,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: 'rgb(252,48,89)',
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: 'top',
                  formatter(p) {
                    return p.value > 0 ? p.value : ''
                  }
                }
              }
            },
            lineStyle: {},
            data: this.data.avgload
          }
        ]
      })
    }
  }
}
</script>
