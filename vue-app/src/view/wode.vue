<template>
    <div class="page-group-body">
         <div class="page-group">
        <header class="bar bar-nav">
            <h1 class="page-header-title fs—36">
                个人管理
            </h1>
        </header>
       <my-nav></my-nav>
        <div class="content wode-index">
            <!-- 内容 -->
            <ul class="index-data-ul fs-0">
                <li class="m-t-15">
                   <router-link to="/wode-gerenxinxi" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__hd">
                            <img class="weui-media-box__thumb" src="images/touxiang.jpg" alt="">
                        </div>
                        <div class="weui-media-box__bd index-data-li-zhong">
                            <b class="fs-28 color333">Jacob Russell</b>
                            <p class="fs-24 color999">前端工程师</p>
                        </div>
                        <div class="weui-media-box__hd index-data-li-right" style="padding-right: 5px;width:2.5rem">
                            <span class="fs-24 color999" style="margin-top: 3px">你已经加入团队</span>
                            <span class="fs-18px color-3479F7">
                                <b>414天</b>
                            </span>
                        </div>
                        <div class="weui-media-box__hd fs-12px text-right" style="margin: 0;">
                            <em class="iconfont icon-arrow-right"></em>
                        </div>
                   </router-link>
                </li>
                <li class="wode-li fs—36 m-t-15 weui-media-box_appmsg" data-gourl="wode-rizhi.html">
                    <div class="weui-media-box__hd">
                        今日日志
                    </div>
                    <div class="weui-media-box__bd">
                        <em class="iconfont icon-arrow-right"></em>
                    </div>
                </li>
                <li class="wode-li fs—36 weui-media-box_appmsg" data-gourl="wode-zhouzhi.html">
                    <div class="weui-media-box__hd">
                        本周总结
                    </div>
                    <div class="weui-media-box__bd">
                        <em class="iconfont icon-arrow-right"></em>
                    </div>
                </li>
                <li class="wode-li fs—36 m-t-15 weui-media-box_appmsg" data-gourl="wode-chidao.html">
                    <div class="weui-media-box__hd">
                        迟到记录
                    </div>
                    <div class="weui-media-box__bd">
                        <em class="iconfont icon-arrow-right"></em>
                    </div>
                </li>
                <li class="wode-li fs—36 m-t-15 weui-media-box_appmsg " data-gourl="wode-banben.html">
                    <div class="weui-media-box__hd">
                        版本信息
                    </div>
                    <div class="weui-media-box__bd">
                        <em class="iconfont icon-arrow-right"></em>
                    </div>
                </li>
            </ul>
        </div>
        <div style="margin: 45px 0;padding:0 12px;" class="">
            <router-link to="/login" class="loginButton loginSubmit fs-17px">退出登陆</router-link>
        </div>
    </div>
    </div>
</template>
