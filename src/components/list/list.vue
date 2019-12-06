<template>
<div>
<div>
  <router-view></router-view>
</div>
</div>
</template>
<script>
  export default {
  mounted:function () {
    this.$router.push('order')
  },

  }
</script>
<style scoped>
</style>
