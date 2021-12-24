<template>    
    <div class="menutree">        
        <label v-for="menu in data" :key="menu.index">            
            <el-submenu :index="menu.index" v-if="menu.children">                
                <template slot="title">                    
                    <i class="el-icon-user-solid icon-user"></i>                    
                    <span>{{menu.name}}</span>                
                </template>                
                <label>                    
                    <!-- <menutree :data="menu.children"></menutree>                 -->
                </label>            
            </el-submenu>            
            <el-menu-item v-else :index="menu.index">                
                <i class="el-icon-user-solid icon-user"></i>                
                <span slot="title">{{menu.name}}</span>            
            </el-menu-item>        
        </label>    
    </div>
</template>
<script>    
    // import menutree from "./menutree";    
    export default {        
        name: "menutree",        
        data() {            
            return {                           
            };        
        },        
        components: {            
            // menutree: menutree        
        },        
        props: ["data"]    
    };
</script>
<style scoped>    
    .icon-user{        
        font-size: 16px;        
        color: #e4e4e4;    
    }
</style>

