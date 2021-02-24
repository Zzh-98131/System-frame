<template>
  <div>
    <el-card>
      <div slot="header" class="card_header">
        <div class="logo_round">
          <img src="../../assets/img/logo.png" width="45px" height="56px" />
          <span class="login_version">V1.0</span>
        </div>
        <span class="login_name">{{ $t('综合管理系统') }}</span>
      </div>
      <el-form ref="login" :model="loginInfo" :rules="loginRules">
        <el-form-item prop="userName">
          <input-item ref="userName" :settings="userNameInput" @toUserName="handleInput">
            <template v-slot:prepend>
              <svg-icon icon-class="user" @click="clickPrepend('userName')"></svg-icon>
            </template>
          </input-item>
        </el-form-item>
        <el-form-item prop="passWord">
          <input-item ref="passWord" :settings="passwordInput" @toPassword="handleInput" @keyup.enter.native="toLogin('login')">
            <template v-slot:prepend>
              <svg-icon icon-class="lock" @click="clickPrepend('passWord')"></svg-icon>
            </template>
          </input-item>
        </el-form-item>
        <el-checkbox class="check_box" v-model="loginInfo.saveToCookie">
          {{ $t('7天内自动登录 ') }}<span class="check_box_brackets">{{ $t('(公共场合请勿勾选)') }}</span>
        </el-checkbox>
        <el-button style="width: 100%;" type="primary" @click="toLogin('login')">{{ $t('登录') }}</el-button>
      </el-form>
      <div class="card_footer">
        <svg-icon icon-class="circle_word_i" class="card_footer_svg"></svg-icon>
        <span class="card_footer_word">
          {{ $t('如遇无法登录，请联系管理员') }}
        </span>
      </div>
    </el-card>
  </div>
</template>

<script>
import inputItem from '@/components/public/input_box/input_box_item.vue'
export default {
  name: 'login_card',
  components: {
    inputItem
  },
  data() {
    return {
      userNameInput: {
        placeholder: this.$t('用户名'),
        clearable: true,
        functionName: 'toUserName'
      },
      passwordInput: {
        placeholder: this.$t('请输入密码'),
        clearable: true,
        showPassword: true,
        functionName: 'toPassword'
      },
      loginInfo: {
        userName: '',
        passWord: '',
        saveToCookie: false
      },
      loginRules: {
        userName: [{ required: true, message: this.$t('请输入用户名'), trigger: 'blur' }],
        passWord: [{ required: true, message: this.$t('请输入密码'), trigger: 'blur' }]
      }
    }
  },
  methods: {
    clickPrepend(val) {
      switch(val) {
        case'userName':
          this.$refs.userName.$children[0].focus() // 使输入框获取焦点
          break
        case'passWord':
          this.$refs.passWord.$children[0].focus() // 使输入框获取焦点
          break
        default: break
      }
    },
    handleInput(value, type) { // 将输入框组件的值传到当前组件, value是具体的值，type用于判断是哪个组件传递过来的
      switch(type) { // type的值即为传入的functionName
        case'toPassword':
          this.loginInfo.passWord = value
          break
        case'toUserName':
          this.loginInfo.userName = value
          break
        default: break
      }
    },
    toLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit('toLogin', this.loginInfo)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .logo_round{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 75px;
    border-radius: 50px;
    background-color: #0a78d6;
  }
  .login_version{
    position: absolute;
    margin: 60px 0 0 80px;
    background-color: #FFFFFF;
    padding: 3px 5px;
    border-radius: 50px;
    font-size: 12px;
  }
  .login_name{
    font-size: 22px;
  }
  .card_header{
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .card_footer{
    font-size: 12px;
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #f0f0f0;
    border-top: 1px solid #d6d6d9;
  }
  .card_footer_svg{
    color: #616161;
  }
  .card_footer_word{
    color: #777777;
  }
  .check_box{
    color: #333333;
    float: left;
    font-size: 14px;
    position: relative;
    top: -10px;
  }
  .check_box_brackets{
    color: #777777;
  }
</style>
