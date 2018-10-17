<template>
  <div>
    <mt-header title="多个按钮">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name: "Headers"
  }
</script>

<style scoped>

</style>
