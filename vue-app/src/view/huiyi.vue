<template>
	<div class="page-group-body" id="body" style="overflow:hidden;">
		<div class="page-group">
			<header class="bar bar-nav">
				<h1 class="page-header-title fs—36">
					会议
				</h1>
			</header>
			<my-nav></my-nav>
			<div class="content">
				<div class="text-center bg-fff p30">
					<div class="huiYiTop">
						<div class="display-ib">
							<button class="huiyiButon noOpen fs—36" @click="countdown()">{{this.content}}</button>
						</div>
					</div>
				</div>
				<div class="text-center huiyiTouxiang fs-0">
					<div class="weui-flex">
						<div class="weui-flex__item">
							<div class="bgBlue" isTrue @click="detail()">
								<img src="../assets/images/touxiang1.jpg" class="width48">
							</div>
						</div>
						<div class="weui-flex__item">
							<div class="bgBlue" active @click="detail()">
								<img src="../assets/images/touxiang2.jpg" class="width48">
							</div>
						</div>
						<div class="weui-flex__item">
							<div class="bgBlue" @click="detail()">
								<img src="../assets/images/touxiang3.jpg" class="width48">
							</div>
						</div>
					</div>
					<div class="weui-flex">
						<div class="weui-flex__item">
							<div class="bgBlue" @click="detail()">
								<img src="../assets/images/touxiang4.jpg" class="width48">
							</div>
						</div>
						<div class="weui-flex__item">
							<div class="bgBlue" @click="detail()">
								<img src="../assets/images/touxiang5.jpg" class="width48">
							</div>
						</div>
					</div>
					<div class="weui-flex">
						<div class="weui-flex__item">
							<div class="bgBlue" @click="detail()">
								<img src="../assets/images/touxiang6.jpg" class="width48">
							</div>
						</div>
						<div class="weui-flex__item">
							<div class="bgBlue" @click="detail()">
								<img src="../assets/images/touxiang7.jpg" class="width48">
							</div>

						</div>
						<div class="weui-flex__item">
							<div class="bgBlue" @click="detail()">
								<img src="../assets/images/touxiang8.jpg" class="width48">
							</div>
						</div>
					</div>
					<div class="weui-flex">
						<div class="weui-flex__item">
							<div class="bgBlue" @click="detail()">
								<img src="../assets/images/touxiang2.jpg" class="width48">
							</div>
						</div>
						<div class="weui-flex__item">
							<div class="bgBlue" @click="detail()">
								<img src="../assets/images/touxiang6.jpg" class="width48">
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 侧滑 -->
		<div class="page-group ps-abs transition" id="transition" style="left: 0%;" v-if="isdetailed">
			<header class="bar bar-nav" style="left: 0%;">
				<router-link to="/huiyi" class="button-link left huiyinGoLiet">
					<span class="iconfont icon-prev"></span>
				</router-link>
				<h1 class="page-header-title fs—36">
					发言内容
				</h1>
			</header>
			<my-nav></my-nav>
			<div class="content">
				<div class="index-list">
					<div class="chidao">
						<ul class="index-data-ul fs-0">
							<li class="b-b-ee">
								<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
									<div class="weui-media-box__hd">
										<img class="weui-media-box__thumb" src="../assets/images/touxiang.jpg" alt="">
									</div>
									<div class="weui-media-box__bd index-data-li-zhong">
										<b class="fs-28 color333">Matthew Sandoval</b>
										<p class="fs-24 color999">前端工程师</p>
									</div>
									<div class="weui-media-box__hd index-data-li-right">
										<span class="fs-36px color-3479F7">1:59</span>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="neirong-index fs-24">
					<div class="neirong-ul">
						<label class="index-data-laber">昨日完成</label>
						<ul class="bg-fff fs-28">
							<li>1.完成bn项目布局</li>
							<li>2.整理了下CMS的使用说明文档，单后看到公司域名lian-xin.com已经铜鼓哦备案后，将老域名Wwzlianxin.com301移动新域名</li>
							<li>3.规划了下接下来要做的预跑模式</li>
						</ul>
					</div>
					<div class="neirong-ul">
						<label class="index-data-laber">今日完成</label>
						<ul class="bg-fff fs-28">
							<li>1.预计完成bn项目网页效果</li>
							<li>2.与设计师对接新的APP页面</li>
							<li>3.初步布局sn项目</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      isdetailed: false,
      seconed: "",
      ss: 60,
      content: "开始计时"
    };
  },
  methods: {
    detail() {
      this.isdetailed = !this.isdetailed;
    },
    countdown() {
	  var _this=this;
      _this.content = "倒计时" + _this.ss + "秒";	  
      var time = setInterval(function() {
        if (_this.ss > 0) {
          _this.ss = _this.ss - 1;
          _this.content = "倒计时" + _this.ss + "秒";
        } else {
		  _this.content = "开始计时";
		  _this.ss=60;
          clearInterval(time);
		}
      }, 1000);
    }
  }
};
</script>
