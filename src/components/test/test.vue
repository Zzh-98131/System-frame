<template>
  <div>
    <el-link type="primary" @click="back" icon="el-icon-back">回到首页</el-link>
    <div class="test_wrapper">
      <el-button @click="btnClick">属性可观测</el-button>
      <div class="show_box">{{ show_1 }}</div>
      <el-button @click="toabc">修改属性</el-button>
    </div>
    <div class="test_wrapper">
      <p>标题：异步</p>
      <div style="border: #000000 1px dotted;">
        <p>数据展示区</p>
        {{ show_2 }}
      </div>
      <el-button @click="toAsync">点击执行异步</el-button>
    </div>
    <div class="test_wrapper">
      <p>自动生成多个变量</p>
      <el-button @click="toVariables(0)">对象的方法</el-button>
      <el-button @click="toVariables(1)">window的方法</el-button>
      <el-button @click="toVariables(2)">数组的方法</el-button>
    </div>
    <div class="table_wrapper">
      <TableComponent ref="aTable" :table-data="alarmLogTable" @editAlarm="editAlarm" @deleteAlarm="deleteAlarm" />
    </div>
  </div>
</template>

<script>
import TableComponent from '@/components/public/TableComponent.vue'
export default {
  name: 'test',
  components: {
    TableComponent
  },
  data() {
    return {
      alarmLogTable: {
        name: 'alarmLogTable',
        // noBorderCols: 'no_border_cols_three',
        dataList: [
          {alarmDesc: '电池EOD欠压', alarmNo: 10, alarmDateTime: '2020-11-21 08:05:27', alarmCode: '5807', alarmEndDateTime: ''},
          {alarmDesc: '电池DOD欠压', alarmNo: 0, alarmDateTime: '2020-11-21 08:05:27', alarmCode: '5806', alarmEndDateTime: '2020-11-21 08:05:37'},
          {alarmDesc: '电池未接', alarmNo: 10, alarmDateTime: '2020-11-21 08:05:27', alarmCode: '5802', alarmEndDateTime: '2020-11-21 08:05:37'},
          {alarmDesc: '输出电压快检测异常', alarmNo: 10, alarmDateTime: '2020-11-21 10:37:01', alarmCode: '5642', alarmEndDateTime: '2020-11-21 10:37:11'},
        ],
        column: [
          {
            datas: [
              {
                type: 'data',
                content: 'alarmDesc'
              }
            ],
            align: 'center',
            label: '告警描述',
            minWidth: null,
            fixed: false
          },
          {
            datas: [
              {
                type: 'data',
                content: 'alarmDateTime'
              }
            ],
            align: 'center',
            label: '告警时间',
            minWidth: null,
            fixed: false
          },
          {
            datas: [
              {
                type: 'data',
                content: 'alarmCode'
              },
              // {
              //   type: 'clickBtn',
              //   functionName: 'editAlarm',
              //   title: '我是修改',
              //   iconClass: 'edit'
              // }
            ],
            align: 'center',
            label: '告警编码',
            minWidth: null,
            fixed: false
          },
          {
            datas: [
              {
                type: 'data',
                content: 'alarmEndDateTime'
              }
            ],
            align: 'center',
            label: '结束时间',
            minWidth: null,
            fixed: false,
            // filters: [
            //   {
            //     text: '2020年10月',
            //     value: '2020年10月'
            //   },
            //   {
            //     text: '2020年11月',
            //     value: '2020年11月'
            //   },
            //   {
            //     text: '2020年12月',
            //     value: '2020年12月'
            //   }
            // ],
            // filteredValue: ['2020年10月', '2020年12月']
          },
          // {
          //   datas: [
          //     {
          //       type: 'tagData',
          //       tagType: 'warning',
          //       shape: 'circle',
          //       content: 'alarmNo'
          //     }
          //   ],
          //   label: '告警数量',
          // },
          {
            datas: [
              {
                type: 'clickBtn',
                functionName: 'editAlarm',
                title: '我是修改',
                iconClass: 'edit'
              },
              {
                type: 'clickBtn',
                functionName: 'deleteAlarm',
                title: '删除告警',
                iconClass: 'delete',
                // linkWords: '删除'
              }
            ],
            label: '操作',
            minWidth: '150',
            fixed: 'right',
          }
        ]
      },
      car: {},
      val: 3000,
      show_1: null,
      show_2: '异步数据展示'
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    // this.$refs.aTable.isLoading(true)
  },
  methods: {
    editAlarm() {
      console.log('yes, edited')
    },
    deleteAlarm() {
      console.log('yes, deleted')
    },
    toVariables(num) {
      switch(num) {
        case 0:
          let mutivar = {}
          for (let i = 0; i < 5; i++) {
            mutivar['test_'+i] = []
          }
          console.log(mutivar) // {test_0: Array(0), test_1: Array(0), test_2: Array(0), test_3: Array(0), test_4: Array(0)}
        break
        case 1:
          let arr = []
          for (let i = 0; i < 5; i++) {
            let name = 'test_' + i
            window[name] = [i]
            arr.push(window[name])
          }
          console.log(eval('test_'+3)) // [3]
        break
        case 2:
          let brr = []
          for (let i = 0; i < 5; i++) {
            brr[i] = []
          }
          console.log(brr) // [Array(0), Array(0), Array(0), Array(0), Array(0)]
        break
        default: break
      }
    },
    toAsync() {
      function returnPromise(val) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(val * 2)
          }, 2 * 1000)
        })
      }
      async function timeout() {
        let result = await returnPromise(40)
        console.log(result)
      }
      function console_666() {
        console.log('666')
      }
      console.log('1')
      timeout()
      console_666()
      console.log('2')
    },
    btnClick() {
      this.show_1 = this.car.price
      this.car.price = 5000
    },
    getData() {
      Object.defineProperty(this.car, 'price', {
        enumerable: true,
        configurable: true,
        get(){
          console.log('price属性被读取了')
          return this.val
        },
        set(newVal){
          console.log('price属性被修改了')
          this.val = newVal
        }
      })
    },
    toabc() {
      this.abc(this.car, '还没改呢', 200)
    },
    abc(object, name, value) {
      object.name = '已被修改'
      object.value = -99999
      alert(object.name + object.value + ' ' + Object.keys(object))
      // if ( typeof Object.keys(object)[0] === 'string') alert(`${Object.keys(object)[0]}是啊是啊`)
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .test_wrapper{
    width: 98%;
    padding: 5px;
    margin: 10px 0;
    background-color: rgba(255, 170, 0, 0.1);
    border: rgba(255, 170, 0, 0.5) 1px solid;
  }
  .table_wrapper{
    width: 98%;
    padding: 5px;
    margin: 100px 0;
    background-color: rgba(255, 255, 255, 1);
    border: rgba(0, 0, 0, 1.0) 1px solid;
  }
</style>
