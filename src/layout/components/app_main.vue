<template>
  <div class="app-main">
    <router-view :key="key" />
  </div>
</template>

<script>
export default {
  name: 'app_main',
  computed: {
    key() {
      return this.$route.path
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .app-main{
  }
</style>
