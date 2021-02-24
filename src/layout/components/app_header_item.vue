<template>
  <div class="title_bar">
    <div class="left">
      <hamburger-item class="hamburger-container" :isActive="sidebar.opened" @toggleClick="toggle_side_bar" />
    </div>

    <div class="right">
      <span @click="to_login" class="header_esc">
        {{ $t('退出登录') }}
      </span>
      <span class="user_name">{{ user_name }}</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HamburgerItem from '@/components/public/hamburger/hamburger_item.vue'
  export default {
    name: 'app_header_item',
    components: {
      HamburgerItem
    },
    computed: {
      ...mapGetters([
        'sidebar',
      ])
    },
    data() {
      return {
        user_name: ''
      }
    },
    created() {
      this.user_name = this.$cookie.get('user_name')
    },
    methods: {
      to_login() {
        this.$router.push({path: '/'})
      },
      toggle_side_bar() {
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
    .left{
      float: left;
      height: 100%;
    }
    .right{
      float: right;
      position: fixed;
      right: 0;
      // border: #000000 1px solid;
    }
    .header_esc{
      font-size: 20px;
      cursor: pointer;
    }
    .user_name{
      font-size: 40px;
    }
    .svg-icon{
      font-size: 50px;
    }
  }
</style>
