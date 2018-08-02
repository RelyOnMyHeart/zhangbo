window.onload=function(){
	var erweima=document.getElementById('erweim');
	var zhanghu=document.getElementById('zhanghu');
	var logbox=document.getElementById('logbox');
	var codelog=document.getElementById('codelog');
	var chelp=document.getElementById('chelp');
	var cimg=document.getElementById('cimg');
	
	erweima.onclick=function(){
		erweima.style.color='#e4393c';
		zhanghu.style.color='#333';
		codelog.style.display='block';
		logbox.style.display='none';
	};
	zhanghu.onclick=function(){
		zhanghu.style.color='#e4393c';
		erweima.style.color='#333';
		logbox.style.display='block';
		codelog.style.display='none';
	
	};
	
	cimg.onmouseover=function(){
		cimg.style.left="0px";
		cimg.style.transition="all 0.5s ease";
		chelp.style.display="block";
		
		
	}
	cimg.onmouseout=function(){
		cimg.style.left="64px";
		chelp.style.display="none";
		
	}
	
}
