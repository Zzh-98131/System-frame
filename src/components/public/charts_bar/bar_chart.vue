<template>
  <div :style="{width:width, height: height}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

const colorList = [ // 共12项
  ['#3047C6', '#9DACFF', 'rgba(48,71,198,0.20)'],
  ['#5B52FF', '#D0C8FF', 'rgba(91,82,255,0.20)'],
  ['#B328EE', '#F1B7FF', 'rgba(179,40,238,0.20)'],
  ['#EE284E', '#F081EB', 'rgba(238,40,78,0.20)'],
  ['#DC1818', '#FB9E87', 'rgba(220,24,24,0.20)'],
  ['#FF4D12', '#FFB69D', 'rgba(255,77,18,0.20)'],
  ['#FFAD2A', '#FFEECD', 'rgba(255,173,42,0.20)'],
  ['#FFD81E', '#FFF1C2', 'rgba(255,216,30,0.20)'],
  ['#AEE556', '#E8F8D5', 'rgba(174,229,86,0.20)'],
  ['#43CEDB', '#C6FCF7', 'rgba(67,206,219,0.20)'],
  ['#4DB2C0', '#DAF9FF', 'rgba(77,178,192,0.20)'],
  ['#1674E4', '#C9D7FF', 'rgba(22,116,228,0.20)']
]

// 柱状图高亮样式
const emphasisStyle = {
  itemStyle: {
    barBorderWidth: 1,
    shadowBlur: 5, // 阴影模糊度
    shadowOffsetX: 0, // 阴影X方向偏移量
    shadowOffsetY: 0, // 阴影Y方向偏移量
    shadowColor: 'rgba(0, 0, 0, 0.3)'
  }
}

export default {
  name: 'BarCharts',
  props: {
    chartDatas: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
    this.timer = setTimeout(() => {
      this.initChart()
    }, 1500)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
    this.$once('hook:beforeDestroy', () => {
      clearTimeout(this.timer)
      this.timer = null
    })
  },
  data() {
    return {
      timer: null,
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el)
      var axis = []
      for (let i = 0; i < this.chartDatas.datas[0].length; i++) { // 提取横坐标
        axis.push(this.chartDatas.datas[0][i].name)
      }
      // for (let i = 0; i < this.chartDatas.datas.length; i++) { // 提取横坐标
      //   let name = 'axis_' + i
      //   window[name] = []
      //   for (let j = 0; j < this.chartDatas.datas[i].length; j++) {
      //       eval('axis_' + i).push(this.chartDatas.datas[i][j].name)
      //   }
      // }
      var seriesData = []
      for (let i = 0; i < this.chartDatas.series.length; i++) {
        seriesData.push({
          name: this.chartDatas.series[i].name||this.chartDatas.title||null,
          type: this.chartDatas.series[i].type,
          data: this.chartDatas.datas[i],
          emphasis: emphasisStyle,
          barWidth: this.chartDatas.barWidth||13,
          // stack: 'vistors', // 图表是否重合，引号里相同的数据可以堆叠放置
          label: {
            show: true,
            position: 'top',
            color: '#707070',
            fontFamily: 'SourceHanSansCN-Regular'
          },
          itemStyle: {
            normal: {
              barBorderRadius: this.chartDatas.barBorderRadius||15,
              color: function(params) {
                var index = params.dataIndex % colorList.length
                return new echarts.graphic.LinearGradient( // 四个参数代表渐变的起始位置，分别是右下左上
                  0, 1, 0, 0, // 渐变由下往上
                  [
                    { offset: 0, color: colorList[index][0] }, // offset设置该颜色在柱上的位置，0代表起始位置
                    { offset: 1, color: colorList[index][1] } // 柱图渐变色
                  ]
                )
              }
            }
          }
        })
      }
      this.chart.setOption({
        title: {
          text: this.chartDatas.title||null
        },
        tooltip: {},
        // legend: {
        // },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 100,
          minSpan: 5,
          handleStyle: {
            color: 'rgba(48, 71, 198, 0)'
          }
        }, {
          show: this.chartDatas.dataZoom||false,
          height: 8,
          bottom: 21,
          backgroundColor: 'rgba(48, 71, 198, 0.20)',
          borderRadius: 2,
          handleStyle: {
            color: 'rgba(198, 0, 0, 0.0)'
          },
          dataBackground: {
            borderRadius: 2,
            lineStyle: {
              width: 0,
              type: 'solid'
            },
            areaStyle: {
              opacity: 0
            }
          },
          fillerColor: this.chartDatas.dataZoom && new echarts.graphic.LinearGradient( // 四个参数代表渐变的起始位置，分别是右下左上
            0, 0, 1, 0, // 渐变由下往上#3047C6
            [
              { offset: 0, color: this.chartDatas.dataZoom.color&&this.chartDatas.dataZoom.color[0] || colorList[0][0] }, // offset设置该颜色在柱上的位置，0代表起始位置
              { offset: 1, color: this.chartDatas.dataZoom.color&&this.chartDatas.dataZoom.color[1] || colorList[0][1] } // 柱图渐变色
            ]
          )
        }],
        xAxis: [{
          type: 'category',
          data: axis,
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#999999 '
            }
          },
          axisLabel: {
            show: true,
            rotate: 30,
            fontFamily: 'SourceHanSansCN-Regular'
          }
        }],
        yAxis: [{
          type: 'value',
          data: axis,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#999999'
            }
          },
          axisLabel: {
            fontFamily: 'SourceHanSansCN-Regular'
          },
          axisTick: { show: false }
        }],
        series: seriesData
      })
    }
  }
}
</script>

<style scoped>
</style>

<!-- 公共条形图组件V1 -->

<!-- 调用格式: -->
<!-- <BarCharts :chart-datas="chartDatas" /> -->
<!-- 也可以分别设置宽高（默认100%） -->
<!-- <BarCharts :chart-datas="chartDatas" :width="'600px'" :height="'300px'" /> -->

<!-- 传入数据格式: -->
<!-- chartDatas = {
  title: '试验条形图', // 图表标题，可不设置
  datas: [ // 图表数据，name为每一项的名称，value为值
    {name: "每一项的名字", value: 每一项的值},
    ...
  ],
  barWidth: 13, // 柱体的宽度，可以是数字：13，或者百分比字符串：'10%'，可不设置
  dataZoom: { // 有该对象则有横向滚动条，可不设置
    color: [ // 横向滚动条的渐变色，可不设置
      '渐变色1', // 类型支持'rgba(0, 0, 0, 1.0)'，'#000000'等
      '渐变色2'
    ]
  },
  series: [ // 条形图细节，每一个对象对应一个系列，只有一个对象时代表图表只展示一个系列，可不设置
    {
    name: '系列名' // 系列名，不设置的话则采用图表标题
    },
    ...
  ]
} -->
