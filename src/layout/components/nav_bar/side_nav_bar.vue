<template>
  <div class="app-aside">
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        :unique-opened="true"
        mode="vertical"
      >
        <menu-item v-for="(i_menu, index) in newMenu" :key="index" :opened="sidebar.opened" :menu="i_menu" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import menuItem from './menu_item.vue'
  import menu from './menu.js'
  export default {
    name: 'side_nav_bar',
    components: {
      menuItem
    },
    data() {
      return {
        newMenu: menu,
      }
    },
    created() {
      console.log(menu)
    },
    methods: {

    },
    computed: {
      ...mapGetters([
        'sidebar',
      ]),
      activeMenu() {
        const route = this.$route
        const { meta, path } = route
        // if set path, the sidebar will highlight the path you set
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      },
      variables() {
        return variables
      },
      isCollapse() {
        return !this.sidebar.opened
      }
    }
  }
</script>

<style lang="scss" scoped>
  /deep/.app-aside{
    /deep/.svg-icon{
      font-size: 20px;
    }
  }
</style>
