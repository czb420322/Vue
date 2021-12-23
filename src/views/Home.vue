<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
let person = {name:"张三",age:25,address:"深圳",getName:function(){}}
Object.keys(person).map((key)=>{
return  person[key] // 获取到属性对应的值，做一些处理
}) 
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  
}
</script>
