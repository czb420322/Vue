<!--
 * @Author: your name
 * @Date: 2021-09-15 23:16:38
 * @LastEditTime: 2021-09-25 15:56:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edrouter
 * @FilePath: \vuetest\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/parent">Parent</router-link>|
      <router-link to="/tree">树形结构</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
