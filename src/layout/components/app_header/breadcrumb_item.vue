<template>
  <div class="breadcrumb_wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in $store.state.app.routePath" :key="index" :to="item.path ? {path:item.path} : null">
        <svg-icon v-if="item.icon!=='icon'&&item.icon&&item.icon!=='glyphicon'" :icon-class="item.icon" />
        <span class="breadcrumb_now" :class="{breadcrumb_title:index<$store.state.app.routePath.length-1}"><!-- 最后一项浅色 -->
        {{ item.name }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb_item',
  data() {
    return {
      routeList: []
    }
  },
  watch: {
    '$store.state.app.routePath': function(val) {
      console.log(val)
    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
