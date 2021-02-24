<template>
  <div class="app_aside">
    <div class="menu_logo" :class="{menu_logo_opened:sidebar.opened,menu_logo_hidden:!sidebar.opened}" @click="toHome">
      <img src="../../../assets/img/logo.png" width="32px" height="40px" />
      <span class="menu_title" :class="{en_menu_title:language==='en-US'}" v-if="sidebar.opened">{{ $t('综合管理系统') }}</span>
    </div>
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        :unique-opened="true"
        :router="true"
        :background-color="variables.side_nav_bar_background_color"
        :active-text-color="variables.side_active_color"
        mode="vertical"
        @open="openMenu"
        @select="openMenu"
      >
      <!-- :text-color="variables.side_word_color"
      :background-color="variables.side_nav_bar_background_color"
      :active-text-color="variables.side_active_color" -->
        <menu-item v-for="(items, index) in menu" :key="index" :opened="sidebar.opened" :menu="items" :route-arr="routeArr" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import offlineMenu from './menu.js' // 离线模拟菜单数据

  import { getMenu } from '@/api/base.js'
  import variables from '@/assets/styles/elements/variables.scss'

  import { mapGetters } from 'vuex'

  import menuItem from './menu_item.vue'
  export default {
    name: 'nav_bar_item',
    components: {
      menuItem
    },
    data() {
      return {
        language: 'zh-CN',
        menu: null,
        theRoute: '',
        routeArr: [],
        popup: null
      }
    },
    watch: {
      '$route.path': function(val) { // 检测路由变化，获取路由路径数组
        this.traverseToSetDefaultLight(this.menu) // 给菜单设置默认高亮值
        this.getMenuArr(val) // 获取路由路径数组
        this.setMenuLight(this.routeArr) // 通过路由路径设置具体高亮值
      }
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
    },
    created() {
      this.language = sessionStorage.getItem('language')
      this.getData()
    },
    methods: {
      getMenuArr(path) { // 获取路由路径数组
        this.routeArr = []
        this.$store.state.app.routePath = []
        this.traverseToGetRouteArr(this.menu, path)
      },
      openMenu(index, indexPath) {
        // console.log(indexPath)
      },
      toHome() {
        this.$router.push({path: '/home'})
      },
      setMenuLight(routeArr) { // 根据路由路径，设置菜单是否需要高亮
        for (let i = 0; i < routeArr.length; i++) {
          var routeItem = routeArr[i]
          this.traverseToSetLight(this.menu, routeItem)
        }
      },
      traverseToSetDefaultLight(menu) { // 给菜单设置默认高亮值
        for (let i = 0; i < menu.length; i++) {
          var menuItem = menu[i]
          if (menuItem.items) {
            this.traverseToSetDefaultLight(menuItem.items) // 深度遍历
            this.$set(menuItem, 'isLight', false)
          } else { // 当items为null
            this.$set(menuItem, 'isLight', false)
          }
        }
      },
      traverseToSetLight(menu, id) { // 遍历设置高亮
        for (let i = 0; i < menu.length; i++) {
          var menuItem = menu[i]
          if (menuItem.items) {
            this.traverseToSetLight(menuItem.items, id) // 深度遍历
            if (menuItem.id === id) {
              menuItem.isLight = true
            }
          } else { // 当items为null
            if (menuItem.id === id) {
              menuItem.isLight = true
            }
          }
        }
      },
      traverseToGetRouteArr(menu, route) { // 获取路由路径数组
        for (let i = 0; i < menu.length; i++) {
          var menuItem = menu[i]
          if (menuItem.items) {
            this.traverseToGetRouteArr(menuItem.items, route) // 深度遍历
            if (this.routeArr.length !== 0) { // 如果已经找到了路由，直接往父节点返回
              this.routeArr.unshift(menuItem.parentId)
              this.$store.state.app.routePath.unshift({
                name: menuItem.menuText,
                path: menuItem.menuURL,
                icon: menuItem.menuIcon
              })
              break
            } else {
              if (route === menuItem.menuURL) { // 在菜单中定位当前路由
                this.routeArr.unshift(menuItem.parentId)
                this.$store.state.app.routePath.unshift({
                  name: menuItem.menuText,
                  path: menuItem.menuURL,
                  icon: menuItem.menuIcon
                })
                break
              }
            }
          } else { // 当items为null
            if (route === menuItem.menuURL) { // 在菜单中定位当前路由
              this.routeArr.unshift(menuItem.parentId)
              this.$store.state.app.routePath.unshift({
                name: menuItem.menuText,
                path: menuItem.menuURL,
                icon: menuItem.menuIcon
              })
              break
            }
          }
        }
        // console.log(this.$store.state.app.routePath)
        sessionStorage.setItem('routeArr', this.routeArr)
      },
      getData() {
        // 离线模拟菜单获取
        this.menu = offlineMenu

        /**
         * menuType = 1表示有子集；= 2无子集表示导航是链接；order = 0为页面内部内容，不显示在侧栏
         */
        // getMenu().then(res => {
        //   if (res.status === 0) {
        //     this.menu = res.data
        //     console.log('Origin:', this.menu)
        //     this.traverseToSetDefaultLight(this.menu) // 给菜单设置默认高亮值
        //     this.getMenuArr(this.$route.path)
        //     this.setMenuLight(this.routeArr) // 通过路由路径设置具体高亮值
        //   } else {
        //     this.$message({
        //       type: 'error',
        //       message: res.msg,
        //       offset: 60
        //     })
        //   }
        // }).catch(err => {
        //   console.log(err)
        // })

      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
