<template>
  <div class="title_bar">
    <div class="title_left">
      <hamburger-item class="hamburger-container" :isActive="sidebar.opened" @toggleClick="toggleSideBar" />
    </div>

    <div class="title_right">
      <!-- 全屏 -->
      <div class="right_screenfull">
        <screenfull-item></screenfull-item>
      </div>
      <div class="right_user">
        <el-dropdown
          trigger="click"
          placement="bottom"
          @command="handleCommand"
        >
          <span class="user_name">
            <div class="green_circle" />
            {{ userName }}
            <i class="el-icon-caret-bottom" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personal_center">
              <span style="color: #262626;">
                <svg-icon icon-class="user"></svg-icon>
                {{ $t('个人中心') }}
              </span>
            </el-dropdown-item>
            <el-dropdown-item command="log_out">
              <span style="color: #a94442;">
                <svg-icon icon-class="switch"></svg-icon>
                {{ $t('退出登录') }}
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ScreenfullItem from '@/components/public/screenfull_item.vue'
  import HamburgerItem from '@/components/public/hamburger/hamburger_item.vue'
  export default {
    name: 'app_header_item',
    components: {
      HamburgerItem,
      ScreenfullItem
    },
    computed: {
      ...mapGetters([
        'sidebar',
      ])
    },
    data() {
      return {
        userName: ''
      }
    },
    created() {
      this.userName = this.$cookie.get('userName')
    },
    methods: {
      handleCommand(com) {
        switch(com) {
          case'personal_center':
            break
          case'log_out':
            this.logOut()
            break
          default:break
        }
      },
      async logOut() {
        this.$store.dispatch('user/clearLoginToken')
        this.$router.push({path: '/login'})
      },
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/elements/variables.scss';

  .title_bar{
    height: $header_height;
    background-color: $header_background_color;
    overflow: hidden;
    color: #fffdeb;
    position: relative;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, .4);

    .hamburger-container{
      line-height: $header_height;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background 0.3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
    .title_left{
      float: left;
      height: 100%;
    }
    .title_right{
      float: right;
      position: fixed;
      right: 0;

      .right_user{
        float: right;
        // padding: 0 15px;
        cursor: pointer;
        line-height: calc(#{$header_height} - 4px);
        height: calc(#{$header_height} - 2px);
        border-left: rgba($color: #ffffff, $alpha: .5) 1px solid;
        border-right: rgba($color: #ffffff, $alpha: .5) 1px solid;

        &:hover{
          background-color: rgba(0,0,0,.2);
        }

        .user_name{
          display: flex;
          justify-content: center;
          align-items: center;
          color: #FFFFFF;
          font-size: 14px;

          .green_circle{
            width: 5px;
            height: 5px;
            margin: 0 5px 0 15px;
            border-radius: 5px;
            background-color: #00e857;
          }

          i{
            margin: 0 15px 0 2px;
            font-size: 14px;
            color: #FFFFFF;
          }
        }
      }

      .right_screenfull{
        float: right;
        cursor: pointer;
        // padding: 0 10px;
        height: $header_height;
        // border: rgba($color: #ffffff, $alpha: 1) 1px solid;

        &:hover{
          background-color: rgba(0,0,0,.2);
        }
      }
    }
    .svg-icon{
      font-size: 50px;
    }
  }
</style>
