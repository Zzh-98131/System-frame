<template>
  <div class="wrapper">
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'wrapper_item',
  methods: {

  }
}
</script>

<style scoped>
  .wrapper{
    width: auto;
    height: auto;
    padding: 15px;
    border-radius: 4px;
    border: rgba(214, 214, 217) 1px solid;
    background-color: #FFFFFF;
  }
</style>
