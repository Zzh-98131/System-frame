<template>
  <div class="menu_item_wrap" :id="'active_' + menu.id" :class="{active_item:menu.isLight}" @mouseenter="mouseEnter(menu)" @mouseleave="mouseLeave(menu)"><!-- @mouseenter="mouseEnter(menu)" @mouseleave="mouseLeave(menu)" -->
    <el-submenu :class="{parents:menu.parentId===0}" :index="menu.menuURL||menu.menuText" v-if="menu.perms==='perms'&&menu.items&&menu.items[0].order!==0"><!-- 有子菜单 -->
      <template slot="title">
        <div class="menu_sub" :class="{hover_me:menu.isLight||isHover}">
          <svg-icon v-if="menu.menuIcon!=='icon'&&menu.menuIcon&&menu.menuIcon!=='glyphicon'" :icon-class="menu.menuIcon" />
          <span v-if="sidebar.opened||menu.id!==5395&&menu.id!==5396&&menu.id!==5397">{{ menu.menuText }}</span>
        </div>
      </template>
      <menu-item v-for="child in menu.items" :key="child.menuText" :opened="opened" :menu="child" :route-arr="routeArr" @isHovering="childIsHolded" @afterHover="parentFree" />
    </el-submenu>

    <el-menu-item v-else :index="menu.menuURL||menu.menuText" ref="menuItem"><!-- 无子菜单 -->
      <div class="menu_item">
        <svg-icon v-if="menu.menuIcon!=='icon'&&menu.menuIcon&&menu.menuIcon!=='glyphicon'" :icon-class="menu.menuIcon" />
        <span>{{ menu.menuText }}</span>
      </div>
    </el-menu-item>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

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
      },
      routeArr: {
        type: Array,
        required: true,
        default: () => {}
      }
    },
    data() {
      return {
        isHover: false,
      }
    },
    watch:{
      // routeArr: function(val) {
      //   this.lightRoute()
      // },
    },
    computed: {
      ...mapGetters([
        'sidebar',
      ])
    },
    // created() {
    //   console.log(this.menu)
    // },
    methods: {
      // lightRoute() {
      //   var ifHasRoute = this.routeArr.filter(item => item === this.menu.id)
      //   // console.log(ifHasRoute)
      //   if (ifHasRoute.length === 0) {
      //     this.isActive = false
      //   } else {
      //     this.isActive = true
      //   }
      // },
      parentFree(pId) { // 移出取消高亮
        if (pId===this.menu.id) {
          this.isHover = false
        }
      },
      childIsHolded(pId) { // 移入触发高亮
        if (pId===this.menu.id) {
          this.isHover = true
        }
      },
      mouseEnter(menu) {
        this.isHover = true
        this.$emit('isHovering', menu.parentId)
      },
      mouseLeave(menu) {
        this.isHover = false
        this.$emit('afterHover', menu.parentId)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/elements/variables.scss';

  .menu_sub,
  .menu_item
  {
    height: $side_child_height;
  }
  .hover_me {
    color: $side_active_color;
    transition: color .3s;
  }
  .not_hover{
    color: $side_word_color;
    // transition: color .3s;
  }
</style>
