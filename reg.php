<?php
	$un=$_POST['un'];
	
	$arr=["123456789"];
	
	if(in_array($un,$arr)){
		
		echo 'y';
		
	}else{	
		
		echo 'n';
	}
?>