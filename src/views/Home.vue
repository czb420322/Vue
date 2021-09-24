<!--
 * @Author: your name
 * @Date: 2021-09-15 23:16:38
 * @LastEditTime: 2021-09-22 22:51:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vuetest\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="" scoped>

</style>