<template>
  <div class="screen_full" @click="click">
    <svg-icon
      :icon-class="isFullscreen ? 'window_mode' : 'screenfull'"
      style="font-size: 30px;"
    />
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'screenfull_item',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: this.$t('暂不支持全屏'),
          type: 'warning',
          offset: 70
        })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .screen_full{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 0 10px;
  }
</style>
