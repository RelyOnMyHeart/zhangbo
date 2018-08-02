$(function() {
	// 顶部二级菜单显示与隐藏
	$('.hover-p').mouseover(function() {
		$('.p-content').show();
	}).mouseout(function() {
		$('.p-content').hide();
	});
	$('.posi-re1').mouseover(function() {
		$('.posi-re1>.myjd').show();
		$('.posi-re1>a').css({'background':'#fff','borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc','borderBottom':'2px solid #fff'});
	}).mouseout(function() {
		$('.posi-re1>.myjd').hide();
		$('.posi-re1>a').css({'background':'#e3e4e5','borderLeft':'1px solid #e3e4e5','borderRight':'1px solid #e3e4e5','borderBottom':'1px solid #e3e4e5'});
	})
	$('.posi-re2').mouseover(function() {
		$('.posi-re2>.servise').show();
		$('.posi-re2>a').css({'background':'#fff','borderLeft':'1px solid #ccc','borderRight':'1px solid #ccc','borderBottom':'2px solid #fff'});
	}).mouseout(function() {
		$('.posi-re2>.servise').hide();
		$('.posi-re2>a').css({'background':'#e3e4e5','borderLeft':'1px solid #e3e4e5','borderRight':'1px solid #e3e4e5','borderBottom':'1px solid #e3e4e5'});
	})

	// 大选项卡
	$('.choice-list>li').click(function() {
		$('.choice-list>li>a').attr('class','').css({'color':'#796a5f','transition':'.25s'});
		$('.choice-list>li>a>div').attr('class','');
		$('.choice-list>li>a>i').css('display','block');


		var index=$(this).index();

		$('.choice-titlec>div').eq(index).addClass('contblock');
		$('.choice-titlec>div').eq(index).siblings().removeClass('contblock');

		$(this).find('a>div').attr('class','sjcolor');
		$(this).find('a').attr('class','bgcolor').css({'color':'#fff','transition':'0.25s'});
		$(this).find('a>i').css('display','none');

	})







	
	// 图片移入span变色
	$('.choice-all1').mouseover(function() {
		$(this).find('.choice-all3>div>span').css({'color':'#DF6807','transition':'.25s'})
	}).mouseleave(function() {
		$(this).find('.choice-all3>div>span').css({'color':'#fff','transition':'.25s'})
	})
	$('.choice-all3').mouseover(function() {
		$(this).find('div>span').css({'color':'#DF6807','transition':'.25s'})
	}).mouseleave(function() {
		$(this).find('div>span').css({'color':'#fff','transition':'.25s'})
	})
})