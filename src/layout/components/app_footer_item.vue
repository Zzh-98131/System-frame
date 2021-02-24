<template>
  <div class="app_footer">
    {{ '© 2020&#8194' }}
    <a href="http://www.eastups.com/" target="_blank">{{ $t('易事特集团股份有限公司') }}</a>
    {{ '&#8194版权所有&#8194|&#8194' }}<!-- &#8194在vue中代表半个中文宽度的空格占位 -->
    <img src="../../assets/img/logo2.png" width="16px" height="16px" />
    {{'&#8194Version 1.0'}}
  </div>
</template>

<script>
export default {
  name: 'app_footer_item',
  methods: {

  }
}
</script>

<style scoped>
  .app_footer{
  }
</style>
