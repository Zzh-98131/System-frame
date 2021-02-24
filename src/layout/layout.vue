<template>
  <div :class="classObj" class="app_wrapper">
    <el-container>
      <nav-bar-item class="sidebar_container" />
      <el-container direction="vertical"  class="main_wrapper">
        <el-header :height="variables.header_height + variables.breadcrumb_height">
          <header-item />
          <breadcrumb-item></breadcrumb-item>
        </el-header>
        <el-main>
          <app-main-item />
        </el-main>
        <el-footer :height="variables.footer_height">
          <footer-item />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import NavBarItem from './components/nav_bar/nav_bar_item.vue'
  import HeaderItem from './components/app_header/app_header_item.vue'
  import BreadcrumbItem from './components/app_header/breadcrumb_item.vue'
  import AppMainItem from'./components/app_main_item.vue'
  import FooterItem from './components/app_footer_item.vue'

  import variables from '@/assets/styles/elements/variables.scss'
  export default {
    name: 'Layout',
    components: {
      NavBarItem,
      HeaderItem,
      BreadcrumbItem,
      AppMainItem,
      FooterItem
    },
    computed: {
      ...mapState({
        sidebar: state => state.app.sidebar,
      }),
      classObj() {
        return {
          hide_side_bar: !this.sidebar.opened,
        }
      },
      variables() {
        return variables
      }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
  *{
    padding: 0;
  }
</style>
