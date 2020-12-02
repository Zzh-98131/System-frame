<template>
  <div :class="classObj" class="app-wrapper">
    <el-container>
      <Sidebar class="sidebar-container" />
      <el-container direction="vertical"  class="main-wrapper">
        <el-header :height="variables.header_height">
          <Header />
        </el-header>
        <el-main>
          <AppMain />
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  import Sidebar from './components/nav_bar/side_nav_bar.vue'
  import Header from './components/app_header.vue'
  import AppMain from'./components/app_main.vue'
  import Footer from './components/app_footer.vue'

  import variables from '@/assets/styles/elements/variables.scss'
  export default {
    name: 'Layout',
    components: {
      Sidebar,
      Header,
      AppMain,
      Footer
    },
    computed: {
      ...mapState({
        sidebar: state => state.app.sidebar,
      }),
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
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
