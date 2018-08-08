<?php
	header("content-type:text/html;charset=UTF-8;");
	$songdata=array(
	    array(
	      "song"=>"云烟成雨《我是江小白》动画片尾曲",
          "singe"=>"房东的猫",
          "zhuanji"=>"云烟成雨",
          "time"=>"04:00"
      ), array(
            "song"=>"明智之举",
            "singe"=>"许嵩",
            "zhuanji"=>"寻宝游戏",
            "time"=>"04:27"
        ), array(
            "song"=>"Faded",
            "singe"=>"Alan Walker / Iselin Solheim",
            "zhuanji"=>"Faded",
            "time"=>"03:32"
        ), array(
            "song"=>"修炼爱情",
            "singe"=>"林俊杰",
            "zhuanji"=>"因你而在",
            "time"=>"04:47"
        ),array(
            "song"=>"化身孤岛的鲸",
            "singe"=>"周深",
            "zhuanji"=>"化身孤岛的鲸",
            "time"=>"04:36"
        ), array(
            "song"=>"提莫必须死",
            "singe"=>"马旭东",
            "zhuanji"=>"提莫必须死",
            "time"=>"03:42"
        ),array(
            "song"=>"往后余生",
            "singe"=>"马良",
            "zhuanji"=>"往后余生",
            "time"=>"02:32"
        ),array(
            "song"=>" MV 暖暖《周末父母》电视剧片头曲",
            "singe"=>"梁静茹",
            "zhuanji"=>"亲亲",
            "time"=>"04:03"
        )
    );
	$songdataS=json_encode($songdata);
	echo $songdataS;
