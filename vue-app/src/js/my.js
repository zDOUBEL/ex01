
console.log('密码：123456，帐号：admin')

$("[data-gourl]").click(function () {
	location.href=$(this).data('gourl')
});
$("[data-gohistory]").click(function () {
    window.history.go(-1);
});


$("[data-doajishi]").click(function () {
	$("#code").val("111111");
	var num=30,timeout,$this;
	$this=$(this);
	$this.prop("disabled",true);
	$this.text(num--+"秒")
	timeout=setInterval(function () {
		num=num<10?'0'+num:num;
		$this.text(num+"秒")
		num--;
		if(num<=0){
			clearInterval(timeout);
			$this.text("获取");
			$this.prop("disabled",false);
		}
	},1000)
})

$("[data-model]").click(function () {
    var modalId = $(this).data("model");
	$("#"+modalId).css({opacity: 1,display: 'block'})
});
$(document).on('click', "[data-model-cols],.weui-mask", function () {
    $(".js_dialog").css({ opacity: 0, display: 'none' });
});
$("[data-model-cols],.weui-mask").click(function () {
    $(".js_dialog").css({ opacity: 0, display: 'none' });
});

$("[data-tab]").click(function () {
    var $this = $(this);
    $this.addClass('active').siblings('[data-tab].active').removeClass("active");

});

$("input").focus(function () {
    $(".fixed").hide();
});
$("input").blur(function () {
    $(".fixed").show();
});

function setLoading(text){
	var aa=''+
	'<div class="js_dialog zidingyi" id="index-dakai" style="opacity: 1; display: block;">'+
	'	<div class="weui-mask"></div>'+
		'<div class="weui-dialog br15">'+
		'	<p class="fs-18px">'+text+'</p>'+
	'	</div>'+
	'</div>';
	console.log(aa);
	$("body").append(aa);
	setTimeout(function () {
		$(".js_dialog").fadeOut(100);
	}, 2000);
}

function myclick() {
	console.log('token', localStorage.getItem('token'));
	if (!localStorage.getItem('token')) {
		window.location.href = "login.html";
	}else{
		window.location.href = "wode.html";		
	}
}

function tokenjudge(){
	console.log('token', localStorage.getItem('token'));
	if(window.location.href.indexOf("login.html")!=-1||window.location.href.indexOf("zhuce.html")!=-1){
     console.log("login，zuche不需要");
	}else if (!localStorage.getItem('token')) {
		window.location.href = "login.html";
		console.log('hahah')
		
	}
}
tokenjudge();
// 时间处理
Date.prototype.format = function (format) {
	var o = {
		"M+": this.getMonth() + 1, //month
		"d+": this.getDate(), //day
		"h+": this.getHours(), //hour
		"m+": this.getMinutes(), //minute
		"s+": this.getSeconds(), //second
		"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
		"S": this.getMilliseconds() //millisecond
	}
	if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	return format;
}