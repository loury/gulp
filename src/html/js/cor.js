// 通过控制图片的序号实现图片切换
$(function(){
	var imgIndex = 0;//当前要操作的图片下标
	var imgLen = $("#corImg li").length;//图片总数
	//定时器实现图片自动切换
	var autoChange = setInterval(function(){
		if(imgIndex<(imgLen-1)){
			imgIndex++;
		}
		else{
			imgIndex = 0;
		}
		changeTo(imgIndex);
	},2500);

	//  滑入滑出实现动画的停止与运动（将切换控制界面放在最上面，鼠标悬停按钮时效果由css实现）
	// 问：在按钮上是否起作用？
	// 答：YES
	$("#contr").hover(function(){
		// 滑入清除定时器
		clearInterval(autoChange);
	},function(){
		// 滑出重置定时器
		autoChangeAgain();
	})
			
	// 单击左按钮切换到上一张
	$("#btnPrev").click(function(){
		imgIndex = (imgIndex > 0) ? (--imgIndex) : (imgLen - 1);
		changeTo(imgIndex);
	})//imgIndex++会出现问题，imgIndex--同样有问题

	// 单击右按钮切换到下一张
	$("#btnNext").click(function(){
		imgIndex = (imgIndex < (imgLen - 1)) ? (++imgIndex) : 0	;
		changeTo(imgIndex);
	})

	// 单击序号按钮跳转到对应图片
	$("#inlist li").each(function(item){
		$(this).click(function(){
			changeTo(item);
			imgIndex=item;
		})
	})

	// 函数：重置定时器（简直一模一样的定时器）
	function autoChangeAgain(){
		autoChange = setInterval(function(){
				if(imgIndex<imgLen-1){
					imgIndex++;
				}
				else{
					imgIndex = 0;
				}
				changeTo(imgIndex);
			},2500)
	}
	
	// 函数：切换图片（对应图片操作）
	function changeTo(num){
		var goleft=num * 1000;
		//图片切换
		$("#corImg").animate({left:"-"+goleft+"px"},500);
		/*// 提示信息切换（通过切换类样式，下同）
		$("#info li").removeClass("infoOn").eq(num).addClass("infonOn");*/
		// 图标按钮切换
		$("#inlist li").removeClass("inlistOn").eq(num).addClass("inlistOn");
	}
	
})