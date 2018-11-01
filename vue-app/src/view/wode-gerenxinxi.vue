<template>
    <div class="page-group-body">
          <div class="page-group">
        <header class="bar bar-nav">
            <span class="button-link left" data-gourl="wode.html">
                <span class="iconfont icon-prev"></span>
            </span>
            <h1 class="page-header-title fs—36">
                个人信息
            </h1>
        </header>
<my-nav></my-nav>
        <div class="content wode-index flexZhong borZhong">
            <!-- 内容 -->
            <ul class="index-data-ul fs-0">
                <li class="wode-li fs—36 m-t-15 weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        头像
                    </div>
                    <div class="weui-media-box__hd index-data-li-right fs-0" style="padding-right: 5px;">
                        <img class="w-44px" src="images/touxiang1.jpg">
                    </div>
                    <div class="weui-media-box__bd">
                        <em class="iconfont icon-arrow-right"></em>
                        <input type="file" name="" class="op-0 ps-abs">
                    </div>
                </li>
                <li class="wode-li fs—36 weui-media-box_appmsg" data-model="iosDialog1" data-type="name">
                    <div class="weui-media-box__hd">
                        名称
                    </div>
                    <div class="weui-media-box__hd index-data-li-right" style="padding-right: 5px;">
                        <span class="fs-12px color999">张三丰</span>
                    </div>
                    <div class="weui-media-box__bd">
                        <em class="iconfont icon-arrow-right"></em>
                    </div>
                </li>
                <li class="wode-li fs—36 weui-media-box_appmsg"  data-model="iosDialog1" data-type="zhiwei">
                    <div class="weui-media-box__hd">
                        职位
                    </div>
                    <div class="weui-media-box__hd index-data-li-right" style="padding-right: 5px;">
                        <span class="fs-12px color999">前端工程师</span>
                    </div>
                    <div class="weui-media-box__bd">
                        <em class="iconfont icon-arrow-right"></em>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="js_dialog fs-17px geren" id="iosDialog1" style="opacity:0;display:none">
        <div class="weui-mask"></div>
        <div class="weui-dialog wodeGeRenModal">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title">请输入新名称</strong></div>
            <div class="weui-dialog__bd">
                <input type="text" class="weui-input fs-13px" placeholder="涂涂" />
            </div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" data-model-cols class="weui-dialog__btn weui-dialog__btn_default">取消</a>
                <a href="javascript:;" data-model-cols class="weui-dialog__btn weui-dialog__btn_primary">提交</a>
            </div>
        </div>
    </div>
    </div>
</template>
