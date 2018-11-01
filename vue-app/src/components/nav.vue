<template>
    <div class="bar bar-tab weui-tabbar">
        <router-link to="/index" class="weui-tabbar__item">
            <span class="weui-tabbar__icon nav-daka active"></span>
            <p class="weui-tabbar__label">打卡</p>
       </router-link>
       <router-link to="/huiyi"  class="weui-tabbar__item">
            <span class="weui-tabbar__icon nav-huiyi"></span>
            <p class="weui-tabbar__label">会议</p>
       </router-link>
         <router-link to="/renwu" class="weui-tabbar__item">
            <span class="weui-tabbar__icon nav-renwu"></span>
            <p class="weui-tabbar__label">任务</p>
        </router-link>
        <router-link to="/wode" class="weui-tabbar__item">
            <span class="weui-tabbar__icon nav-wode"></span>
            <p class="weui-tabbar__label">我的</p>
       </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>

