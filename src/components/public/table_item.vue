<template>
  <div>
    <el-table
      :id="tableData.name || null"
      v-loading="dataListLoading"
      :data="tableData.dataList"
      :class="tableData.noBorderCols"
      stripe
      :row-key="tableData.rowKey"
      align="center"
      max-height="600"
    >
      <el-table-column
        v-for="(item, index) in tableData.column"
        :key="index"
        :prop="item.datas.propsName || item.datas[0].content"
        :align="item.align || 'center'"
        :label="item.label"
        :min-width="item.minWidth || '200'"
        :fixed="item.fixed || false"
        :filters="item.filters"
        :filtered-value="item.filteredValue"
        :filter-method="item.filters? filterHandle : null"
        :column-key="item.filters? item.datas[0].content : null"
      >
        <template slot-scope="scope">
          <span v-for="(i, id) in item.datas" :key="id" class="component-span" :title="i.title||null">

            <!-- 纯数据 -->
            <span v-if="i.type==='data'">
              {{ i.content ? scope.row[i.content] : i.value }}
            </span>

            <!-- 标签数据 -->
            <span v-if="i.type==='tagData'">
              <el-tag v-if="scope.row[i.content]===0||scope.row[i.content]==='-'" class="zero">
                {{ scope.row[i.content] }}
              </el-tag>
              <span v-else>
                <el-tag v-if="i.shape==='round'" :class="i.position ? i.shape+'_'+i.position : i.shape" :effect="i.brightness||'dark'" :hit="i.brightness==='light'" :type="scope.row[i.tagType]||i.tagType||'success'">
                  <span :class="'span-'+i.shape||'span-round'" class="tag-span">
                    {{ i.content ? scope.row[i.content] : i.value }}
                  </span>
                </el-tag>
                <el-tag v-else :class="i.shape" :effect="i.brightness||'dark'" :hit="i.brightness==='light'" :type="scope.row[i.tagType]||i.tagType||'success'">
                  <span :class="'span-'+i.shape||'span-round'" class="tag-span">
                    {{ i.content ? scope.row[i.content] : i.value }}
                  </span>
                </el-tag>
              </span>
            </span>

            <!-- 点击按钮，文字或图标二者有其一即可 -->
            <span v-if="i.type==='clickBtn'">
              <span class="link-words" @click="clickHandle(i.functionName, scope.row)">{{ i.linkWords||null }}</span>
              <span v-if="i.iconClass" :title="i.title||''">
                <svg-icon v-if="scope.row.btnDisabled||false" :icon-class="i.iconClass" class="operating-btn-disabled" /><!-- 若btnDisabled=true，表示按钮不可点击 -->
                <svg-icon v-else :icon-class="i.iconClass" class="operating-btn" @click="clickHandle(i.functionName, scope.row)" />
              </span>
            </span>

          </span>
        </template>
      </el-table-column>
      <div slot="empty">{{ $t('暂无数据') }}</div>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    tableData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dataListLoading: false
    }
  },
  methods: {
    // filterChangeHandle(filter) {
    //   // console.log(filter)
    //   this.$emit('filtersChange', filter)
    // },
    /**
     * 表头筛选事件统一方法,不用管
     */
    filterHandle(value, row, column) {
      var val = column.property
      var target = null
      for (var i in row) {
        if (i === val) {
          target = row[i]
        }
      }
      return target === value
    },
    /**
     * 组件点击事件统一管理方法
     */
    clickHandle(name, data) {
      this.$emit(name, data)
    },
    /**
     * 表格加载控制函数
     */
    isLoading(load) {
      this.dataListLoading = load
    }
  }
}
</script>

<style scoped>
.component-span{
  margin-right: 15px; /* 同一列中,两种数据展示模式之间的间隔 */
}
.component-span:nth-last-child(1) { /*组件最后一位右边距置空*/
  margin-right: 0px;
}
.operating-btn-disabled{
  font-size: 21px;
  color: #718cc6;
}
.operating-btn{
  position: relative;
  top: 2px;
  left: -1.5px;
  font-size: 20px;
  color: #3047C6;
  cursor: pointer;
}
.link-words{
  color: #3047C6;
  cursor: pointer;
}
.tag-span{
  font-size: 16px;
}
.span-circle{
  position: relative;
  top: -3px;
}
>>>.el-tag--light{
  border-radius: 20px;
  margin: 0;
  padding: 0;
}
>>>.el-tag--dark{
  border-radius: 20px;
  margin: 0;
  padding: 0;
}
>>>.el-tag--dark.round{ /*圆角标签样式*/
  text-align: center;
  width: 70px;
  height: 28px;
  color: #FFFFFF;
}
>>>.el-tag--dark.round_left{ /*圆角标签样式*/
  text-align: center;
  width: 70px;
  height: 28px;
  border-radius: 20px 6px 6px 20px;
  color: #FFFFFF;
}
>>>.el-tag--dark.round_right{ /*圆角标签样式*/
  text-align: center;
  width: 70px;
  height: 28px;
  border-radius: 6px 20px 20px 6px;
  color: #FFFFFF;
}
>>>.el-tag--dark.circle{ /*圆形标签样式*/
  width: 24px;
  height: 24px;
}
>>>.el-tag--light.round{ /*圆角标签样式*/
  text-align: center;
  width: 85px;
  height: 28px;
  /* color: #FFFFFF; */
}
>>>.el-tag--light.round_left{ /*圆角标签样式*/
  text-align: center;
  width: 85px;
  height: 28px;
  border-radius: 20px 6px 6px 20px;
  /* color: #FFFFFF; */
}
>>>.el-tag--light.round_right{ /*圆角标签样式*/
  text-align: center;
  width: 85px;
  height: 28px;
  border-radius: 6px 20px 20px 6px;
  /* color: #FFFFFF; */
}
>>>.el-tag--light.circle{ /*圆形标签样式*/
  width: 24px;
  height: 24px;
}
>>>.el-tag.zero { /*0数据标签样式*/
  background-color: rgba(0, 0, 0, 0);
  border: #000000 0px solid;
  font-family: 'SourceHanSansCN-Regular';
  font-size: 16px;
  color: #333333;
}
/* >>> .el-table th > .cell {
  border-right: rgba(0, 0, 0, 0.5) 1px solid;
}
>>> .el-table td {
  border-right: rgba(0, 0, 0, 0.2) 1px dotted;
} */
>>> .el-table td:nth-last-child(-n+1) , >>> .el-table th:nth-last-child(-n+1) > .cell {
  border: none;
}

/* 以下是特殊样式处理,以传入数据中的tableData.noBorderCols来区分，以数字英文标识 */
>>> .el-table.no_border_cols_one td:nth-last-child(-n+1) , >>> .el-table.no_border_cols_one th:nth-last-child(-n+1) > .cell , /* 倒数1行 */
>>> .el-table.no_border_cols_two td:nth-last-child(-n+2) , >>> .el-table.no_border_cols_two th:nth-last-child(-n+2) > .cell , /* 倒数2行 */
>>> .el-table.no_border_cols_three td:nth-last-child(-n+3) , >>> .el-table.no_border_cols_three th:nth-last-child(-n+3) > .cell , /* 倒数3行 */
>>> .el-table.no_border_cols_four td:nth-last-child(-n+4) , >>> .el-table.no_border_cols_four th:nth-last-child(-n+4) > .cell , /* 倒数4行 */
>>> .el-table.no_border_cols_five td:nth-last-child(-n+5) , >>> .el-table.no_border_cols_five th:nth-last-child(-n+5) > .cell , /* 倒数5行 */
>>> .el-table.no_border_cols_six td:nth-last-child(-n+6) , >>> .el-table.no_border_cols_six th:nth-last-child(-n+6) > .cell , /* 倒数6行 */
>>> .el-table.no_border_cols_seven td:nth-last-child(-n+7) , >>> .el-table.no_border_cols_seven th:nth-last-child(-n+7) > .cell , /* 倒数7行 */
>>> .el-table.no_border_cols_eight td:nth-last-child(-n+8) , >>> .el-table.no_border_cols_eight th:nth-last-child(-n+8) > .cell , /* 倒数8行 */
>>> .el-table.no_border_cols_nine td:nth-last-child(-n+9) , >>> .el-table.no_border_cols_nine th:nth-last-child(-n+9) > .cell , /* 倒数9行 */
>>> .el-table.no_border_cols_ten td:nth-last-child(-n+10) , >>> .el-table.no_border_cols_ten th:nth-last-child(-n+10) > .cell , /* 倒数10行 */
>>> .el-table.no_border_cols_all td , >>> .el-table.no_border_cols_all th > .cell /* 全部 */
{
  border: none;
}
</style>

<!-- 公共表格组件V4 -->
<!-- 说明：公用的表格组件，表格展示的列主要分为三类。表格最大高度为600px，斑马纹，每一列都带边框。 -->

<!-- 组件调用格式 -->
  <!-- 基本： -->
  <!-- <TableComponent :table-data="传入的数据名称" /> -->

  <!-- 表格中有点击事件时： -->
  <!-- <TableComponent :table-data="传入的数据名称" @方法名="方法名" /> -->

  <!-- 表格需要使用加载动画效果时： -->
  <!-- <TableComponent ref="自定义" :table-data="传入的数据名称" /> -->
  <!-- 然后在script中调用组件内的加载方法： -->
  <!-- this.$refs.自定义.isLoading(true) // 动画开始 -->
  <!-- this.$refs.自定义.isLoading(false) // 动画结束 -->

<!-- 传入数据格式示例 -->
  <!-- 传入的数据名称 = {
    name: '表格名称',                                // 暂时没什么用，可以不设置
    dataList: [],                                   // 表格数据存放位置，格式：
                                                         [
                                                            {数据项字段名: 数据项的值, 数据项字段名: 数据项的值, ...},
                                                            {数据项字段名: 数据项的值, 数据项字段名: 数据项的值, ...},
                                                            ...
                                                         ]
    rowKey: 'deviceId',                             // 表格的主键字段，可不设置
    noBorderCols: 'no_border_cols_three',           // 无边框的列数（倒数），比如no_border_cols_three表示表格从右往左前三列都是无边框；整个表格无边框则设置为all。该项可不设置。
    column: [                                       // 表格的列
      {
        datas: [                                    // 每一列要展示的数据项，目前支持的三种展示格式可以在同一列中混用也可以一列只展示一种数据格式
          {
            type: 'data',                           // 数据项类型，纯文本
            content: '数据项字段名'                  // **关键，一定要与dataList中的数据项字段名匹配**
          },
          {
            type: 'tagData',                        // 数据项类型，标签数据
            tagType: 'success',                     // 标签类型（颜色），可选值'success'(默认),'danger','warning','info'，可不设置
            shape: 'circle',                        // 标签形状，可选值暂有'round'(默认),'circle'，可不设置
            brightness: 'light',                    // 标签明暗款式，可选值'light','dark',默认值'dark'，可不设置
            content: '数据项字段名'                  // **关键，一定要与dataList中的数据项字段名匹配**
          },
          {
            type: 'clickBtn',                       // 数据项类型，可点击的文字+图标
            functionName: '方法名',                  // 点击按钮后触发的方法名称
            title: '自定义提示内容',                  // 鼠标悬浮时显示的提示，可不设置
            linkWords: '自定义文字内容',              // 点击按钮的中文，可不设置
            iconClass: 'svg文件名（不带文件格式）'     // assets/icons/svg下的svg文件名称，用于选取图标
          },
          ...
        ],
        label: '表格列的名称',                        // 显示的标题
        align: 'center',                            // 数据对齐方式，可选值'left','center','right'，可不设置
        minWidth: 200,                               // 列的最小宽度，用于撑起列名不换行，可不设置
        fixed: 'right',                              // 该列是否固定或者固定的位置，可选值true, 'left', 'right'，可不设置
        filters: [],                                 // 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。例如：Array[{ text, value }]，可不设置
        filteredValue: []                           // 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。可不设置
      },
      ...
    ]
  } -->
