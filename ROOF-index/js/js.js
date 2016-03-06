// JavaScript Document

$(document).ready(function(e) {
	//以下是导航栏动画形式
	$(".submenu").hide()
	$(".nav li").hover(function(){
		//以下是鼠标移入
		$(this).children("ul").stop(true,false).slideDown()
		},function(){
		//以下是鼠标移出
		$(this).children("ul").stop(true,false).slideUp()
		})
		
		//以下是中间banner切换效果
		$(".bannerBox li").eq(0).css({"background":"#fabb07"})
		$(".bannerBox li").mouseover(function(){
			$(".bannerBox li").css({"background":"#fff"})
			$(this).css({"background":"#fabb07"})
			var i = $(this).index()
			$(".longBanner").stop(true,false).animate({"marginLeft":-1170*i})
			})
		//以下是OUR SERVICES中的三个栏目动画
		
		$(".ourServiceTxtBOX1,.ourServiceTxtBOX2,.ourServiceTxtBOX3,.ourServiceTxtBOX4").hover(function(){
			$(this).children("div").fadeIn(0).stop(true,false).css({"bottom":"-70px"})
			$(this).children("div").stop(true,false).animate({"bottom":"0"},300)						
			},function(){
			$(this).children("div").stop(true,false).fadeOut(300)
				})
    	$(".ourServiceTxt").hover(function(){
			$(this).css({"color":"#fff","background":"#fabb07","opacity":"0.8"})
			},function(){
			$(this).css({"color":"#fabb07","background":"#000","opacity":"0.8"})	
			})
		//点变色文字发生图片放大效果
			$('.close').hide()			
			$(".ourServiceTxt").click(function(){
				$(this).parent().animate({"width":"220%","height":"220%"},300).css({"overflow":"none","z-index":"100","background-size":"cover"});
				$(this).fadeOut(0);
				$(this).next().show()
				})
		//点击红色小×图片还原		
			$('.close').click(function(){
				$(this).parent().animate({"width":"270px","height":"200px"},300).css({"z-index":"0"})
				$(this).hide()
				})
		//以下是返回顶部按钮代码
		$(".goTo").hide();
		$(function(){//开始联动下列语句
			$(window).scroll(function(){
				if($(window).scrollTop()>100){
					$(".goTo").fadeIn("fast")}
				else{$(".goTo").fadeOut("fast")}
				});
			$(".goTo").click(function(){
				$("body,html").animate({scrollTop:0},200);
				return false;
				})
			})
})
