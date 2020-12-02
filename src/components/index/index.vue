<template>
  <div class="app-wrapper">
    {{ $t('我是首页！') }}
    <br />
    <div class="chart-wrapper">
      <BarCharts :chart-datas="chartDatas" />
    </div>
    <el-button type="primary" @click="btnClick(toLogin)">{{ toLogin }}</el-button>
    <el-button type="infor" @click="btnClick(toTest)">{{ toTest }}</el-button>
  </div>
</template>

<script>
import BarCharts from '@/components/public/charts_bar/bar_chart.vue'

export default{
  name: 'IndexPage',
  components: {
    BarCharts
  },
  data() {
    return {
      toLogin: '回到登录',
      toTest: '去试验',
      chartDatas: {
        title: '试验条形图',
        datas: [
          [
            {name: "衬衫", value: 5},
            {name: "羊毛衫", value: 20},
            {name: "雪纺衫", value: 36},
            {name: "裤子", value: 10},
            {name: "高跟鞋", value: 10},
            {name: "袜子", value: 20}
          ],
          [
            {name: "秋裤", value: 8},
            {name: "牛仔裤", value: 2},
            {name: "羊毛裤", value: 13},
            {name: "阔腿裤", value: 5},
            {name: "帆布鞋", value: 15},
            {name: "球鞋", value: 20}
          ]
        ],
        dataZoom: { // 有该对象则有横向滚动条
          // color: [ // 渐变色
          //   '#DC1818',
          //   '#FB9E87'
          // ]
        },
        series: [
          {
            name: '销量',
            type: 'bar' // pie没有dataZoom
          },
          {
            name: '成本',
            type: 'line' // pie没有dataZoom
          }
        ]
      }
    }
  },
  methods: {
    btnClick(type) {
      switch (type) {
        case '回到登录':
          this.$router.push({path: '/'})
          break
        case '去试验':
          this.$router.push({path: '/test'})
          break
        default:
         break
      }
    }
  }
}
</script>

<style scoped>
  .app-wrapper{
    /* height: 1000px; */
  }
</style>
