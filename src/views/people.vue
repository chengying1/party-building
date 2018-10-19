<template>
  <div>
    <HeaderCommon></HeaderCommon>
    <mt-cell title="标题文字" >
      <span style="color: green"><input type="text" v-model="name"></span>
    </mt-cell>
  </div>
</template>

<script>
  import HeaderCommon from '@/components/HeaderCommon'
  export default {
    name: "people",
    components:{HeaderCommon},
    data(){
      return{
        name:'wangcai'
      }
    }
  }
</script>

<style scoped>

</style>
