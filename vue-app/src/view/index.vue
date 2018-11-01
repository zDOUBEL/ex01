<template>
    <div class="page-group-body">
        <div id="loading">
            <img src="images/loading.gif" class="img-responsive">
        </div>
        <div class="page-group">
            <my-top></my-top>
            <my-nav></my-nav>
            <div class="content">
                <div class="index-top text-center">
                    <button class="loginButton indexButton" data-model="index-dakai" id="thisTime" v-text="time" @click="clickda()"></button>
                </div>
                <div class="index-list">
                    <div class="index-data chidao">
                        <div class="index-data-laber fs-17px">迟到</div>
                        <ul class="index-data-ul fs-0" id="m-list0">
                            <li v-for="item in fliterArray">
                              <router-link to="/lishiXiangqing" class="weui-media-box weui-media-box_appmsg">
                                    <div class="weui-media-box__hd">
                                        <img class="weui-media-box__thumb" :src="item.imgUrl" alt="">
                                    </div>
                                    <div class="weui-media-box__bd index-data-li-zhong">
                                        <b class="fs-28 color333">{{item.name}}</b>
                                        <p class="fs-24 color999">{{item.job}}</p>
                                    </div>
                                    <div class="weui-media-box__hd index-data-li-right">
                                        <span class="fs-28 colorD0021B">迟到{{item.Late}}分钟</span>
                                        <span class="fs-24 color999" style="margin-top: 3px">{{new Date(item.clock).Format('hh:mm')}}</span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="index-data jinri">
                        <div class="index-data-laber fs-17px">今日排序</div>
                        <ul class="index-data-ul fs-0" id="m-list">
                            <li v-for="item in indexlist">
                               <router-link to="/lishiXiangqing" class="weui-media-box weui-media-box_appmsg">
                                    <div class="weui-media-box__hd">
                                        <img class="weui-media-box__thumb" :src="item.imgUrl" alt="">
                                    </div>
                                    <div class="weui-media-box__bd index-data-li-zhong">
                                        <b class="fs-28 color333">{{item.name}}</b>
                                        <p class="fs-24 color999">{{item.job}}</p>
                                    </div>
                                    <div class="weui-media-box__hd index-data-li-right">
                                        <span class="fs-28 color333">{{new Date(item.clock).Format('hh:mm')}}</span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="js_dialog" id="index-dakai" style="opacity: 0;display: none">
            <div class="weui-mask"></div>
            <div class="weui-dialog br15">
                <P style="font-size: 0.48rem;" id="clock">09: 06</P>
                <P style="font-size: 0.34rem;" id="errorText">迟到6分钟</P>
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
      time: "00:00:00",
      zz: false,
      timer: "",
      tips: ""
    };
  },
  methods: {
    list() {
      var data = { token: "" };
      data.token = localStorage.getItem("token");
      this.$store.dispatch("indexlist", data);
    },
    setNewTime(Format) {
      Format = Format || "hh:mm:ss";
      var time = new Date().Format(Format);
      // console.log("time5", time);
      return time;
    },
    timeJup() {
      var _this = this;
      _this.time = _this.setNewTime();
      setInterval(function() {
        _this.time = _this.setNewTime();
      }, 1000);
    },
    clickda() {
      var data = { token: "" };
      data.token = localStorage.getItem("token");
      var _this = this;
      this.$store.dispatch("dakaList", data).then(function(res) {
        console.log("res", res);
        _this.tips = res.data.msg;
        if (res.data.msg == "签到成功") {
          _this.list();
        }
      });
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
      indexlist: store => {
        return store.indexlist.list.data || [];
      },
      dakaList: store => {
        console.log("dakai", store.daka.list1);
        return store.daka.list1;
      }
    }),
    fliterArray() {
      var articles_array = this.indexlist.concat([]);
      articles_array = articles_array.filter(function(item) {
        if (item.Late * 1) {
          return item;
        }
      });
      return articles_array;
    }
  },
  beforeUpdate() {},
  created() {
    this.list();
    this.timeJup();
  }
};
</script>

