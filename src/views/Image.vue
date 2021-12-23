<template>
       <div id="singleBanner">
    <!-- 顶部悬浮窗效果 -->
      <div id="surperficial" v-if="show">
          <router-link to="/" class="backBtn"><Icon type="ios-arrow-back" id="leftIcon" />
          </router-link>        
          <span>天津方特欢乐世界</span>
      </div>
       <!--  图片部分 -->
        <div class="introPic">
            <router-link to="/" tag="div" class="backBtn"><Icon type="ios-arrow-dropleft-circle" id="backIcon" /></router-link>
            <div class="picNum"><Icon type="md-images" color="white" id="imgIcon"/><span>{{picNum}}</span></div>
            <div class="picTitle">
                <span class="left">天津方特欢乐世界</span>
                <span class="right">视频<Icon type="ios-arrow-forward" id="backBtn" /></span>
            </div>
        </div>
        <div class="introText">
            <div class="introTextTop">
                <ul>
                    <li>
                        <p class="text-l"><span class="score">{{score}}</span>分<span class="level">超赞</span></p>
                        <p class="text-r"><span class="comment">{{commNum}}条评论</span><span class="maker">{{makerNum}}条攻略</span></p>
                        <Icon type="ios-arrow-forward" class="moreBtn" />

                    </li>
                    <li>
                        <p class="text-l"><span class="sightintro">景点简介</span></p>
                        <p class="text-r"><span class="comment">开放时间、 贴士</span></p>
                        <Icon type="ios-arrow-forward" class="moreBtn" />

                    </li>
                </ul>
            </div>
            <div class="clearfix"></div>
            <div class="introTextBottom">
                <Icon type="ios-pin-outline" id="locationIcon" />
                <span class="content">天津市滨海新区新生态城中生大道北首生态岛内</span>
                <Icon type="ios-arrow-forward" id="moreIcon" />
            </div>
            <div class="introTextWarn">
                 <Icon type="ios-megaphone" id="messPhone"/>
                 <span class="warn_con">如因天气原因、设备检修等造成部分项目暂缓</span>
                 <Icon type="ios-arrow-forward" id="moreMess" />
            </div>
        </div>
    </div>
</template>
<script>
export default({
     name:'singleBanner',
     data:function(){
        return{
            picNum:57,
            score:"5.0",
            commNum:6696,
            makerNum:1,
            show:false,
            opacity:{opacity:0}
        }
     },
     methods:{
        scrollChange:function(){
            //console.log("move move move");
            let top=document.documentElement.scrollTop;
            //console.log(top);
            if(top==0){
                this.show=false;
            }else{
                this.show=true;
            }
        }

     },
     mounted:function(){

     },
     activated:function(){
          window.addEventListener('scroll',this.scrollChange);//当从缓存中调取数据时触发该生命周期函数
     },
    deactivated:function(){
         window.removeEventListener('scroll',this.scrollChange);
     }

})  
</script>

