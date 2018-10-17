<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
  .fll{
    float: left;
  }
  .flr{
    float: right;
  }
  clearfix::after{
    content: '';
    clear: both;
    width: 0;
    height: 0;
    display: block;
  }
  a{
    text-decoration: none;
    color: #969896;
  }
</style>
