<template>
  <div>
    <el-submenu :index="menu.title" v-if="menu.children"><!-- 有子菜单 -->
      <template slot="title">
        <svg-icon v-if="menu.icon" :icon-class="menu.icon" />
        <span slot="title">{{ menu.title }}</span>
      </template>
      <menu-item v-for="child in menu.children" :key="child.title" :opened="opened" :menu="child" />
    </el-submenu>

    <el-menu-item v-else><!-- 无子菜单 -->
      <svg-icon v-if="menu.icon" :icon-class="menu.icon" />
      <span>{{ menu.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>

  export default {
    name: 'menu-item',
    props: {
      menu: {
        type: Object,
        required: true
      },
      opened: {
        type: Boolean,
        required: true,
        default: false
      }
    }
  }
</script>

<style scoped>
</style>
