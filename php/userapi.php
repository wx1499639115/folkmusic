<?php
header("content-type:text/html;charset=UTF-8;");
$username=$_POST["username"];
$names=array("a123456","b123456","c123456");
$jieguo="没有";
for ($i=0;$i<count($names);$i++){
    if($username==$names[$i]){
        $jieguo="有";
        break;
    }
}
$jieguo=json_encode($jieguo);
echo $jieguo;