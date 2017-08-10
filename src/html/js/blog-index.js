//javascript Document
$(function() {
	// 点击进入首页//
	$("#more").click(function() {
		$("#wel-page").attr('class', 'wel-page1');
		$("#index").attr("class", "index1");
		$("#layout").css({
			"overflow": "visible"
		}); //将layout的overflow改成visible,使主页部分实现可滚动
	})
	// $("#more").click(function() {
	// 	$("#wel-page").css({
	// 			"display": "none"
	// 		})
	// })

	// 回到顶部//
	$("#case").click(function() {
			$("html body").animate({
				scrollTop: "0" //滚动条与容器顶部距离为0，等价于回到顶部
			}, 800);
		})
		/*页面加载完成后触发函数
		（避免出现在页面加载完后，无论是否是在顶部都会出现“回到顶部”按钮）
		与下面的滚动条事件协作，实现判断“回到顶部”按钮的消失与出现*/
	checkPosition();
	$(window).scroll(function() {
			checkPosition();
		})
		//通过判断滚动条与容器顶部的距离判断是否出现按钮
	function checkPosition() {
		if ($("body").scrollTop() > 200) {
			$("#goTop").fadeIn();
		} else {
			$("#goTop").fadeOut();
		}

	}

	// 菜单//
	/*通过控制菜单栏与容器右边框的距离实现菜单栏的出现与消失
	“right：0”表示出现
	“right：-200px”表示消失（其中200px为菜单栏的宽度）*/
	$("#menu img").click(function() {
		$("#menu-selection").css({
			right: "0px"
		})
	})
	$("#menu-selection #close").click(function() {
		$("#menu-selection").css({
			right: "-200px"
		})
	})

	//跳转到首页（没有欢迎页）//
	$("#toIndex").click(function() {
		window.open("index.html","_self");
	})
	//如果首页的父窗口不为空，则将欢迎页隐藏（并且是不占空位的）
	if (self.opener) {
		$(function() {
			$("#wel-page").css({
				"display": "none"
			})
			$("#layout").css({
				"overflow": "visible"
			}); //将layout的overflow改成visible,使主页部分实现可滚动
			$("#contr").css({
				"top":"50px",
			})//因为"#wel-pagede"的display改为none（不占位置了）后，contr的位置也发生了变化
			// 还没搞清楚原因，先用这个设置把位置调好+
		})
	}
	//分享//
	$("#share").hover(function() {
		$("#shareItems").animate({
			height: "100px"
		}, 200)
	}, function() {
		$("#shareItems").animate({
			height: "0px"
		}, 200)
	})

})