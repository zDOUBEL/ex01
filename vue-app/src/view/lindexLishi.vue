<template>
	<div class="page-group-body">
		<div id="loading">
			<img src="images/loading.gif" class="img-responsive">
		</div>
		<div class="page-group">
			<header class="bar bar-nav">
				<span class="button-link left" data-gourl="index.html">
					<span class="iconfont icon-prev"></span>
				</span>
				<h1 class="page-header-title fs—36">
					历史纪录
				</h1>
			</header>
			<my-nav></my-nav>
			<div class="content indexLishi">
				<div class="weui-navbar">
					<div class="weui-navbar__item fs—36" data-tab="tab1" id="tabweek" data-type="week" @click="tabClik(type1)">
						本周
					</div>
					<div class="weui-navbar__item fs—36" data-tab="tab2" id="tabmonth" data-type="month" @click="tabClik(type2)">
						本月
					</div>
					<span class="heng" v-bind:class="{ left50: isActive }"></span>
				</div>
				<div class="weui-tab__panel">
					<div id="tab1" tab-html v-if="tabShow1">
						<div class="index-list">
							<div class="chidao">
								<ul class="index-data-ul fs-0" id="m-week">
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
												<span class="fs-28 colorD0021B" v-bind:class="item.LateNumber>3?'':'color999'">迟到{{item.LateNumber}}次数</span>
											</div>
										</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div id="tab2" tab-html v-if="tabShow2">
						<div class="index-list">
							<div class="chidao">
								<ul class="index-data-ul fs-0" id="m-month">
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
												<span class="fs-28 colorD0021B" v-bind:class="item.LateNumber>3?'':'color999'">迟到{{item.LateNumber}}次数</span>
											</div>
										</router-link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.weui-navbar + .weui-tab__panel {
  padding-top: 0px;
}
.left50 {
  left: 50%;
}
.color999{
	color: #999;
}
</style>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      type1: "week",
      type2: "month",
      tabShow1: true,
      tabShow2: false,
	  isActive: false,
	  isColor:false
    };
  },
  methods: {
    tabClik(data) {
      console.log("0", data);
      if (data) {
        this.list(data);
        console.log(9);
      }
      this.isActive = !this.isActive;
      this.tabShow2 = !this.tabShow2;
      this.tabShow1 = !this.tabShow1;
    },
    list(type) {
      if (type) {
				console.log('我是类型')				
        var data = { token: "", type: type };
      } else {
				console.log('我是默认')
        var data = { token: "", type: this.type1 };
	  }
      data.token = localStorage.getItem("token");
      this.$store.dispatch("indexLishi", data)
    }
  },
  computed: {
    ...mapState({
      indexLishi: store => {
        console.log("Lishistore", store.indexLishi.Lishi);
        return store.indexLishi.Lishi||[];
      }
		}),
		  fliterArray() {
			console.log('4',this.indexLishi)
			var articles_array = this.indexLishi.concat([]);
			console.log('2333',this.indexLishi)
      articles_array = articles_array.filter(function(item) {
        if (item.LateNumber * 1) {
          return item;
        }
      });
      return articles_array;
    }
  },
  beforeUpdate() {},
  created() {
    this.list();
  }
};
</script>
