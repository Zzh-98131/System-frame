<template>
  <div class="app_wrapper">
    <wrapper-item>
      <template v-slot:content>
        <div style="width: 200px; height: 60px; border: #000000 1px solid;">12312</div>
      </template>
    </wrapper-item>
    <svg-icon icon-class="glyphicon glyphicon-cloud"></svg-icon>
    <!-- <div class="chart_wrapper">
      <bar-chart-item :chart-datas="chartDatas" />
    </div> -->
    <el-button type="primary" @click="btnClick(toLogin)">{{ toLogin }}</el-button>
    <el-button type="infor" @click="btnClick(toTest)">{{ toTest }}</el-button>
    <el-button type="infor" @click="btnClick('去监控')">{{ '去监控' }}</el-button>
  </div>
</template>

<script>
import BarChartItem from '@/components/public/charts/bar_chart_item.vue'
import WrapperItem from '@/components/public/wrapper_item.vue'

export default{
  name: 'index',
  components: {
    BarChartItem,
    WrapperItem
  },
  created() {
    this.getData()
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
    getData() {
    },
    btnClick(type) {
      switch (type) {
        case '回到登录':
          this.$router.push({path: '/'})
          break
        case '去试验':
          this.$router.push({path: '/test'})
          break
        case '去监控':
          this.$router.push({path: '/monitor'})
          break
        default:
         break
      }
    }
  }
}
</script>

<style scoped>
</style>
