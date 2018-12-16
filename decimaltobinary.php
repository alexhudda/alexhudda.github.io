<?php

if(isset($_POST['first'])&&isset($_POST['second']))
{
	$first=$_POST['first'];
	$second=$_POST['second'];
	
	$count=0;
	$a=[];
	
	while($first!=0){
		$a[$count]=$first%2;
		$first=intval($first/2);
		$count++;
	}
	
	for($count=$count-1;$count>=0;$count--)
	echo $a[$count];
	
	
}
else
{
	echo "waiting";
}
?>
