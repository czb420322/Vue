<template>
  <div class="about">
    <div><router-link to="/home/downTime">开启倒计时</router-link></div>
    <div><router-link to="/home/elementTable">进入多级目录的表格</router-link></div>
    <div><router-link to="/home/image">表格编辑</router-link></div>
    <div><router-link to="/home/table">element UI 实现动态生成多级表头</router-link></div>
    <div><router-link to="/home/scroll">老虎机滚动的数字</router-link></div>
    <div><router-link to="/home/tree">Tree树形结构</router-link></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
   .about{
     display: flex;
     flex-wrap: wrap;
     div{
       width:290px;
     }
   }
</style>