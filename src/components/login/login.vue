<template>
  <div>
    <div class="login_wrapper">
      <div class="login_card">
        <login-card @toLogin="toLogin" />
      </div>
      <div class="login_footer">
        Copyright © 2020
        <a href="http://www.eastups.com/" target="_blank">{{ $t('易事特集团股份有限公司') }}</a>
        . All rights reserved.
      </div>
      <div class="login_select">
        <el-select v-model="language" :placeholder="$t('请选择语言')" @change="changeLanguage">
          <el-option
            v-for="(item, index) in languageDatas"
            :key="index"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import inputBoxItem from '@/components/public/input_box/input_box_item.vue'
import { login } from '@/api/user.js'

import loginCard from './login_card_item.vue'
export default {
  name: 'login',
  components: {
    inputBoxItem,
    loginCard
  },
  data() {
    return {
      languageDatas: [
        {label: '中文', value: 'zh-CN'},
        {label: 'English', value: 'en-US'}
      ],
      language: 'zh-CN',
    }
  },
  created() {
    this.language = sessionStorage.getItem('language')
  },
  methods: {
    changeLanguage() {
      sessionStorage.setItem('language', this.language)
      window.location.reload()
    },
    reload() {
      location.reload()
    },
    toLogin(info) {
      // 离线模拟登录
      sessionStorage.setItem('userName', info.userName)
      this.$cookie.set('userName', info.userName)
      this.$router.push({ path: '/home' })
      
      // login(info.userName, info.passWord, info.saveToCookie, this).then(res => {
      //   if (res.status === 0) {
      //     this.$store.dispatch('user/setLoginToken', res.data)
      //     sessionStorage.setItem('userName', info.userName)
      //     this.$cookie.set('userName', info.userName)
      //     this.$router.push({ path: '/home' })
      //   } else {
      //     this.$message({
      //       type: 'error',
      //       message: res.msg
      //     })
      //   }
      // }).catch(err => {
      //   this.$message({
      //     type: 'error',
      //     message: err
      //   })
      // })
    }
  }
}
</script>

<style scoped>
  .login_wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: #0a78d6;
    background-image: url(../../assets/img/background/bg1.png);
    position: fixed;
    top: 0;
  }
  .login_card{
    width: 400px;
    height: 410px;
    /* margin: auto; */
    /* margin-top: 50px; */
  }
  .card_header{
    text-align: center;
    /* background-color: #0a78d6; */
  }
  .login_select{
    position: fixed;
    top: 10px;
    right: 10px;
  }
  .login_footer{
    width: 100%;
    margin: 11px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #FFFFFF;
    font-size: 12px;
    /* border: #000000 1px solid; */
  }
  a{
    color: #FFFFFF;
    text-decoration: none;
  }
  a:hover{
    color: #24588F;
    text-decoration: underline;
  }
</style>
