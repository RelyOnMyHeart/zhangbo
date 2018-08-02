$(function() {
	// 顶部点击隐藏图片
	$('.top-img>a').click(function() {
		$('.top-bg').hide();
	})
	// 顶部导航菜单栏显示隐藏
	$('.posi-re1').mouseover(function() {
		$('.posi-re .myjd').show();
		$('.posi-re1>a').css({'background':'#fff','borderLeft':'1px solid #e3e4e5','borderLeft':'1px solid #e3e4e5','borderBottom':'1px solid #fff','borderTop':'1px solid #fff'});
	}).mouseout(function() {
		$('.posi-re .myjd').hide();
		$('.posi-re1>a').css({'background':'#e3e4e5','border':'1px solid #e3e4e5'});
	});
	$('.posi-re2').mouseover(function() {
		$('.posi-re .servise').show();
		$('.posi-re2>a').css({'background':'#fff','border':'1px solid #e3e4e5','borderBottom':'1px solid #fff','borderTop':'1px solid #fff'});
	}).mouseout(function() {
		$('.posi-re .servise').hide();
		$('.posi-re2>a').css({'background':'#e3e4e5','border':'1px solid #e3e4e5'});
	});
	$('.position').mouseenter(function() {
		$('.p-content').show();
		$('.hover-p').css({'background':'white','border-left':'1px solid #ccc','border-right':'1px solid #ccc'});
	}).mouseleave(function() {
		$('.p-content').hide();
		$('.hover-p').css({'background':'#e3e4e5','border-left':'1px solid #e3e4e5','border-right':'1px solid #e3e4e5'});
	});
	// 头部二级菜单显示与隐藏开始
	$('.list-type').mouseenter(function() {
		$('.ware-detail').show();
	}).mouseleave(function() {
		$('.ware-detail').hide();
	})
	// 头部轮播图开始
	var index = 0;
	var len = $('.carsoul-img>li>img').length;
	// 自动轮播
	function run() {
		s = setInterval(function() {
			$('.carsoul-img li:eq('+index+')').css({'opacity':'0'});
			$('.carsoul-num li:eq('+index+')').removeClass('active');
			if(index >= len-1) {
				index = 0;
			} else {
				index++;
			}
			$('.carsoul-img li:eq('+index+')').css({'opacity':'1'});
			$('.carsoul-num li:eq('+index+')').addClass('active');
		},2000)
	}
	run();
	// 移入移出显示隐藏
	$('.carsoul').mouseover(function() {
		clearInterval(s);
	}).mouseout(function() {
		run();
	});
	// 左箭头点击
	$('.btn-left').click(function() {
		$('.carsoul-img li:eq('+index+')').css({'opacity':'0'});
		$('.carsoul-num li:eq('+index+')').removeClass('active');
		if(index <= 0) {
			index = len-1;
		} else {
			index--;
		}
		$('.carsoul-img li:eq('+index+')').css({'opacity':'1'});
		$('.carsoul-num li:eq('+index+')').addClass('active');
	});
	// 右箭头点击
	$('.btn-right').click(function() {
		$('.carsoul-img li:eq('+index+')').css({'opacity':'0'});
		$('.carsoul-num li:eq('+index+')').removeClass('active');
		if(index >= len-1) {
			index = 0;
		} else {
			index++;
		}
		$('.carsoul-img li:eq('+index+')').css({'opacity':'1'});
		$('.carsoul-num li:eq('+index+')').addClass('active');
	});
	// 鼠标移入小圆点
	$('.carsoul-num li').mouseover(function() {
		clearInterval(s);
		$('.carsoul-img li:eq('+index+')').css({'opacity':'0'});
		$('.carsoul-num li:eq('+index+')').removeClass('active');
		index = $(this).index();
		$('.carsoul-img li:eq('+index+')').css({'opacity':'1'});
		$('.carsoul-num li:eq('+index+')').addClass('active');
	})
	// 头部右侧选项卡
	$('.notice-body a:eq(0)').mouseover(function() {
		$('.notice-d1').show();
		$('.notice-body a:eq(0)').css('border-bottom','2px solid red');
		$('.notice-body a:eq(1)').css('border-bottom','none');
	})
	$('.notice-body a:eq(1)').mouseover(function() {
		$('.notice-d1').hide();
		$('.notice-d2').show();
		$('.notice-body a:eq(0)').css('border-bottom','none');
		$('.notice-body a:eq(1)').css({'border-bottom':'2px solid red','padding-bottom':'2px'});
	})
	// 京东秒杀倒计时
	setInterval(function djs() {
		var d1 = new Date();
		var d2=new Date('2018 : 5 : 18');
		var cha = d2.valueOf()-d1.valueOf();
		var hour=Math.floor(cha/(1000*60*60));
		cha%=1000*60*60;
		var minute=Math.floor(cha/(1000*60));
		cha%=1000*60;
		var second=Math.floor(cha/(1000));
		$('.second-start span:eq(0)').html(hour);
		$('.second-start span:eq(1)').html(minute);
		$('.second-start span:eq(2)').html(second);
	},1000)
	// 主体小轮播
	var now = 0;
	// 左点击
	$('.small-carl').click(function() {
		now++;
		$('.car-content').animate({'marginLeft':-800*now},300);
		if(now==4){
				now=0;
		}
	})
	// 右点击
	$('.small-carr').click(function() {
		now--;
		$('.car-content').animate({'marginLeft':-800*now},300);
		if(now==0){
				now=4;
		}
	})

	// 两张图片的小轮播
	var i = 0;
	function runs() {
		d = setInterval(function() {
			i++;
			if(i>2) {
					i = 1;
					$('.little-run').css('left','0');
				}
			$('.little-run').animate({left:-180*i},300);
		},1000)
	}
	runs();
	// 透明度
	$('.more-list>li').mouseover(function() {
		$(this).find('p').css('color','red');
	}).mouseout(function() {
		$(this).find('p').css('color','#333');
	})
	// 选项卡
	$('.bl-title>div').mouseover(function() {
		var tindex = $(this).index();
		$('.bl-title>div>a').attr('class','');
		$('.bl-title>div:eq('+tindex+') a').attr('class','ch-color');
		$('.bl-content>div').css('display','none');
		$('.bl-content>div:eq('+tindex+')').css('display','block');
	});
	$('.fontimglast').click(function() {
		$("html,body").animate({'scrollTop':'0'}, 500);
	})
})