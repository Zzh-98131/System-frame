<template>
  <div>
    <el-input
      v-model="inputValue"
      :placeholder="settings.placeholder"
      :clearable="settings.clearable||false"
      :show-password="settings.showPassword||false"
      @input="watchInput"
    >
      <template slot="prefix">
        <slot name="prefix">
          <!-- 用于插入头部内容，父级中调用方式： -->
          <!-- <template v-slot:prefix>
            具体内容
          </template> -->
        </slot>
      </template>
      <template slot="suffix">
        <slot name="suffix">
          <!-- 用于插入尾部内容，父级中调用方式： -->
          <!-- <template v-slot:suffix>
            具体内容
          </template> -->
        </slot>
      </template>
      <template slot="prepend">
        <slot name="prepend">
          <!-- 用于插入前置内容，父级中调用方式： -->
          <!-- <template v-slot:prepend>
            具体内容
          </template> -->
        </slot>
      </template>
      <template slot="append">
        <slot name="append">
          <!-- 用于插入后置内容，父级中调用方式： -->
          <!-- <template v-slot:append>
            具体内容
          </template> -->
        </slot>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'input_box_item',
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    watchInput() {
      this.$emit(this.settings.functionName, this.inputValue, this.settings.functionName)
    }
  }
}
</script>

<style scoped>
</style>
