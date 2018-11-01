<template>
    <div>
        <header class="login-header text-center">
            <span class="iconfont icon-x position-abs" data-gourl="index.html"></span>
            <span class="fs—36">登录</span>
        </header>
        <div>
            <div class="text-center">
                <img src="../assets/images/logo.png" class="login-logo">
            </div>
            <div class="login-input">
                <div>
                    <label class="hide">账号</label>
                    <input v-model="input" type="text" class="loginInput" name="zhanghao" placeholder="请输入账号">
                </div>
                <div>
                    <label class="hide">密码</label>
                    <input v-model="input2" type="password" class="loginInput" name="password" placeholder="请输入密码">
                </div>

                <button class="loginButton loginSubmit" @click="loginchick()">登陆</button>
                <!-- data-gourl="wode.html" -->
                <div class="loginFout">
                    <a id="showIOSActionSheet">忘记密码</a>
                   <router-link to="/zhuce" class="right">注册</router-link>
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
                        <router-link to="/remerber">验证码登录</router-link>
                    </div>
                </div>
                <div class="weui-actionsheet__action">
                    <div class="weui-actionsheet__cell" id="iosActionsheetCancel">取消</div>
                </div>
            </div>
        </div>
        <div id="toast" style="opacity: 0; display: none;font-size:16px;">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-icon-warn"></i>
                <p class="weui-toast__content">已完成</p>
            </div>
        </div>
        <div v-if="this.zz" class="js_dialog zidingyi" id="index-dakai" style="opacity: 1; display: block;">
            <div class="weui-mask"></div>
            <div class="weui-dialog br15">
                <p class="fs-18px">{{this.tips}}</p>
            </div>
        </div>

    </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
    data() {
        return {
            input: "",
            input2: "",
            zz: false,
            timer: "",
            tips: ""
        };
    },
    methods: {
        loginchick() {
            var data = "";
            var _this = this;
            if (this.input != "" && this.input2 != "") {
                data = { password: this.input2, loginName: this.input };
                this.$store.dispatch("loginA", data).then(function(res) {
                    console.log("x", res);
                    if (res.data.code == 1) {
                        localStorage.setItem('token',res.data.data.token)
                        _this.tips = "登录成功！";
                        _this.$router.push({path:'/'})
                    } else {
                        _this.tips = res.data.msg;
                    }
                });
            }else {
                this.tips = "帐号密码不能为空！";
            }
            this.zz = true;
            this.setTimer();
        },
        setTimer() {
            this.timer = setTimeout(() => {
                this.zz = false;
            }, 2000);
        }
    },
    computed: {
        ...mapState({
            login: store => {
                console.log("login:", store.login);
                return store.login;
            }
        })
    },
    beforeUpdate() {},
    created() {
        var _this = this;
        document.onkeydown = function(e) {
            var key = window.event.keyCode;
            if (key == 13) {
                _this.loginchick();
            }
        };
    }
};
</script>

