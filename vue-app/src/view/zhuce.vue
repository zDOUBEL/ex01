<template>
    <div>
        <header class="login-header text-center">
            <span class="iconfont icon-x position-abs" data-gourl="login.html"></span>
            <span class="fs—36">注册</span>
        </header>
        <div>
            <div class="text-center">
                <img src="../assets/images/logo.png" class="login-logo">
            </div>
            <div class="login-input">
                <div>
                    <label class="hide">账号</label>
                    <input v-model="input" type="text" id="phone" class="loginInput" name="" placeholder="请输入手机号">
                </div>
                <div class="weui-cell weui-cell_vcode">
                    <div class="weui-cell__bd">
                        <input id="code" v-model="input1" type="text" class="loginInput" name="" placeholder="验证码">
                    </div>
                    <div class="weui-cell__ft">
                        <button class="loginButton zhuceSubmit fs-28" @click="vercode()" data-doajishi>获取</button>
                    </div>
                </div>
                <div>
                    <label class="hide">密码</label>
                    <input v-model="input2" id="password" type="password" class="loginInput" name="" placeholder="请设置密码">
                </div>

                <button class="loginButton loginSubmit" @click="loginzhuce()" id="login">登陆</button>
            </div>
            <div v-if="this.zz" class="js_dialog zidingyi" id="index-dakai" style="opacity: 1; display: block;">
                <div class="weui-mask"></div>
                <div class="weui-dialog br15">
                    <p class="fs-18px">{{this.tips}}</p>
                </div>
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
            input1: "",
            input2: "",
            zz: false,
            tips: ""
        };
    },
    methods: {
        vercode() {
            this.input1 = 111111;
        },
        loginzhuce() {
            var data = "";
            var _this = this;
            if (this.input != "" && this.input1 != "" && this.input2 != "") {
                console.log(0, this.input, this.input1, this.input2);
                data = { password: this.input2, loginName: this.input };
                this.$store.dispatch("loginB", data).then(function(res) {
                    console.log("x", res);
                    if (res.data.code == 1) {
                        _this.tips = "登录成功！";
                        _this.$router.push({ path: "/" });
                    } else {
                        _this.tips = res.data.msg;
                    }
                });
            } else {
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
            loginB: store => {
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
                _this.loginzhuce();
            }
        };
    }
};
</script>

