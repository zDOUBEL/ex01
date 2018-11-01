<template>
    <div class="page-group-body"> 
        <div class="page-group">
        <header class="bar bar-nav">
            <h1 class="page-header-title fs—36">
                任务
            </h1>
        </header>
        <my-nav></my-nav>
        <div class="content">
            <!-- 内容 -->
            <div class="weui-search-bar fs-24" id="searchBar">
                <form class="weui-search-bar__form">
                    <div class="weui-search-bar__box">
                        <i class="weui-icon-search"></i>
                        <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                        <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                    </div>
                    <label class="weui-search-bar__label" id="searchText">
                        <i class="weui-icon-search"></i>
                        <span>搜索</span>
                    </label>
                </form>
                <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
            </div>
            <ul class="index-data-ul fs-0">
                <li>
                  <router-link to="/renwuXiangqing" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__hd">
                            <img class="weui-media-box__thumb" src="images/touxiang.jpg" alt="">
                        </div>
                        <div class="weui-media-box__bd index-data-li-zhong">
                            <b class="fs-28 color333">Matthew Sandoval</b>
                            <p class="fs-24 color999">前端工程师</p>
                        </div>
                  </router-link>
                </li>
                <li>
                    <router-link to="/renwuXiangqing" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__hd">
                            <img class="weui-media-box__thumb" src="/assets/images/touxiang.jpg" alt="">
                        </div>
                        <div class="weui-media-box__bd index-data-li-zhong">
                            <b class="fs-28 color333">Jacob Russell</b>
                            <p class="fs-24 color999">前端工程师</p>
                        </div>
                    </router-link>
                </li>
            </ul>

        </div>
    </div>
</div>
</template>
