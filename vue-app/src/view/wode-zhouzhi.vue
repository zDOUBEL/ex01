<template>
    <div class="page-group-body">
        <div class="page-group">
		<header class="bar bar-nav">
			<span class="button-link left" data-gourl="wode.html">
				<span class="iconfont icon-prev"></span>
			</span>
			<h1 class="page-header-title fs—36">
				历史纪录
			</h1>
		</header>
<my-nav></my-nav>
		<div class="content indexLishi">
			<div class="weui-navbar">
				<div class="weui-navbar__item active fs—36" data-tab="tab1">
					今日
				</div>
				<div class="weui-navbar__item fs—36" data-tab="tab2">
					记录
				</div>
				<span class="heng"></span>
			</div>
			<div class="weui-tab__panel">
				<div id="tab1" tab-html>
					<div class="neirong-index fs-24">
						<div class="neirong-ul">
							<label class="index-data-laber">本周总结(第二周)</label>
							<ul class="bg-fff fs-28">
								<li>
									<textarea style="height: 3rem;color:#666;">本周工作相对轻松，布局工作按时完成，上效果的速度慢了点，总体进度完成。bn项目的进度提前完成，前两天添加了效果，后三天修改页面细节，以及整理布局规范，总体上很耐心的完成了项目。这周的情绪稳定，打代码有条理，思路清晰，没有遇到重大的问题。几个零碎的小问题都能通过百度解决。这周和设计对接的顺利。双方讨论过程中达成共识。
									</textarea>
								</li>
							</ul>
						</div>
						<div style="margin: 45px 0;padding:0 12px;" class="">
							<button class="loginButton loginSubmit fs-17px" data-gourl="index.html">提交</button>
						</div>
					</div>
				</div>
				<div id="tab2" class="hide" tab-html>
					<div class="weui-search-bar fs-24" id="searchBar">
                        <form class="weui-search-bar__form item-buydate input-group">
                            <input type="hidden" class="weui-search-bar__input" placeholder="搜索" required="">
                            <div class="weui-search-bar__box">
                                <i class="weui-icon-search"></i>
                                <input type="text" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                                <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                            </div>
                            <label class="weui-search-bar__label" id="searchText">
                                <i class="iconfont icon-icon"></i>
                                <span>搜日期</span>
                            </label>
                        </form>
						<a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
					</div>
					<div class="neirong-index fs-24">
						<div class="neirong-ul">
							<label class="index-data-laber">2017-03-04 18:05 上周</label>
							<ul class="bg-fff fs-28">
								<li>1.完成bn项目布局</li>
								<li>2.整理了下CMS的使用说明文档，单后看到公司域名lian-xin.com已经铜鼓哦备案后，将老域名Wwzlianxin.com301移动新域名</li>
								<li>3.规划了下接下来要做的预跑模式</li>
							</ul>
						</div>
						<div class="neirong-ul">
							<label class="index-data-laber">2017-03-03 18:05 二周前</label>
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
	</div>
    </div>
</template>
