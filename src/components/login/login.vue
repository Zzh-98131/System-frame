<template>
  <div>
    <div class="login_wrapper">
      <div class="login_card">
        <el-card>
          <div slot="header" class="card_header">
            <span>{{ $t('综合管理系统') }}</span>
          </div>
          <el-form label-width="60px">
            <el-form-item :label="$t('用户名')">
              <el-input clearable :placeholder="$t('请输入用户名')" v-model="userName"></el-input>
              <!-- <input-box></input-box> -->
            </el-form-item>
            <el-form-item :label="$t('密码')">
              <el-input :placeholder="$t('请输入密码')" clearable v-model="passWord" show-password></el-input>
            </el-form-item>
            <el-button style="width: 100%;" type="primary" @click="clickHandle">{{ $t('登录') }}</el-button>
          </el-form>
        </el-card>
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
import inputBox from '@/components/public/input_box/input_box.vue'
export default {
  name: 'Login',
  components: {
    inputBox
  },
  data() {
    return {
      languageDatas: [
        {label: '中文', value: 'zh-CN'},
        {label: 'English', value: 'en-US'}
      ],
      language: 'zh-CN',
      userName: '',
      passWord: '',
      timer: null,
      timer1: null
    }
  },
  created() {
    this.language = sessionStorage.getItem('language')
  },
  mounted() {
    this.$once('hook:beforeDestroy', () => {
      clearInterval(this.timer)
      clearTimeout(this.timer1)
      this.timer = null
      this.timer1 = null
    })
  },
  methods: {
    changeLanguage() {
      sessionStorage.setItem('language', this.language)
      window.location.reload()
    },
    reload() {
      location.reload()
    },
    clickHandle() {
      this.$cookie.set('user_name', this.userName)
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style scoped>
  .login_wrapper{
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: #0a78d6;
    /* background-color: #ffd58c; */
    position: fixed;
    top: 0;
  }
  .login_card{
    width: 400px;
    height: 410px;
    margin: auto;
  }
  .card_header{
    text-align: center;
  }
</style>
