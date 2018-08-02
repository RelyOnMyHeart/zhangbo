$(function() {
	// 顶部二级菜单显示与隐藏
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
	// 全部分类二级菜单
	$('.head-centerh>span').mouseover(function() {
		$('.alllist').show();
	}).mouseout(function() {
		$('.alllist').hide();
	})
	// 放大镜
	$('.smallimg').mousemove(function(e) {
		$('.move,.bigimg').show();

		var x = e.pageX-$(this).offset().left;
		console.log(x);
		var y = e.pageY-$(this).offset().top;
		console.log(y);
		var x = x - $('.move').width()/2;
		var y = y - $('.move').height()/2;
		if(x<=0){
				x=0
			}
		if(y<=0){
			y=0;
		}
		if(x>=$('.smallimg').width()-$('.move').width()){
				x=$('.smallimg').width()-$('.move').width();
			}
		if(y>=$('.smallimg').height()-$('.move').height()){
				y=$('.smallimg').height()-$('.move').height();
			}
		$('.move').css({left:x,top:y});
		var scale = $('.bigimg>img').width()/$('.smallimg>img').width();
		
		$('.bigimg').scrollLeft(x*scale);
		$('.bigimg').scrollTop(y*scale);
		$('.bigimg>img').attr('src',$('.smallimg>img').attr('src'))
	}).mouseout(function() {
		$('.move,.bigimg').hide();
	})
	$('.smallimg-list>ul>li>img').click(function(){
			$('.smallimg>img').attr('src',$(this).attr('src'));
		})
})