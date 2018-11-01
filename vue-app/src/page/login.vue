<template>
        <header class="login-header text-center">
        <span class="iconfont icon-x position-abs" data-gourl="index.html"></span>
        <span class="fs—36">登录</span>
    </header>
    <div>

        <div class="text-center">
            <img src="images/logo.png" class="login-logo">
        </div>
        <div class="login-input">
            <div>
                <label class="hide">账号</label>
                <input type="text" class="loginInput" name="zhanghao" placeholder="请输入账号">
            </div>
            <div>
                <label class="hide">密码</label>
                <input type="password" class="loginInput" name="password" placeholder="请输入密码">
            </div>

            <button class="loginButton loginSubmit">登陆</button>
            <!-- data-gourl="wode.html" -->
            <div class="loginFout">
                <a id="showIOSActionSheet">忘记密码</a>
                <a href="zhuce.html" class="right">注册</a>
            </div>
        </div>
    </div>
    <!-- 弹窗 -->
    <div class="js_dialog" id="index-dakai" style="opacity: 0;display: none">
        <div class="weui-mask"></div>
        <div class="weui-dialog br15">
            <P style="font-size: 0.48rem;" id="errorText">09: 06</P>
        </div>
    </div>
    <!-- 弹2 -->
    <div>
        <div class="weui-mask" id="iosMask" style="opacity: 0; display: none;"></div>
        <div class="weui-actionsheet" id="iosActionsheet">
            <!-- <div class="weui-actionsheet__title">
                    <p class="weui-actionsheet__title-text">这是一个标题，可以为一行或者两行。</p>
                </div> -->
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell">找回密码</div>
                <div class="weui-actionsheet__cell">
                    <a href="remerber.html">验证码登录</a>
                </div>
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" id="iosActionsheetCancel">取消</div>
            </div>
        </div>
    </div>
    <!-- 弹2 end -->
    <!-- 提示3 -->
    <!-- <div id="toast" style="opacity: 0; display: none;">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-icon-warn weui-icon_msg"></i>
            <p class="weui-toast__content"></p>
        </div>
    </div> -->
    <div id="toast" style="opacity: 0; display: none;font-size:16px;">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-icon-warn"></i>
            <p class="weui-toast__content">已完成</p>
        </div>
    </div>
</template>

