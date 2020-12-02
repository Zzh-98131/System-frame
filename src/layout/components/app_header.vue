<template>
  <div class="title_bar">
    <div class="left">
      <Hamburger class="hamburger-container" :isActive="sidebar.opened" @toggleClick="toggleSideBar" />
    </div>

    <div class="right">
      <span class="user_name">{{ user_name }}</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Hamburger from '@/components/public/hamburger/hamburger.vue'
  export default {
    name: 'app_header',
    components: {
      Hamburger
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
    .user_name{
      font-size: 50px;
    }
    .svg-icon{
      font-size: 50px;
    }
  }
</style>
