<?php
    header("content-type:text/html;charset=UTF-8;");
    $zjname=$_POST["zjname"];
    $zjsinger=$_POST["zjsinger"];
    $songdata=array(
        array(
            "song"=>"$zjname",
            "singe"=>"$zjsinger",
            "time"=>"04:00"
        ), array(
            "song"=>"演员",
            "singe"=>"薛之谦",
            "time"=>"04:27"
        ), array(
            "song"=>"不再联系",
            "singe"=>"夏天Alex",
            "time"=>"03:24"
        ), array(
            "song"=>"修炼爱情",
            "singe"=>"林俊杰",
            "time"=>"04:47"
        ),array(
            "song"=>"化身孤岛的鲸",
            "singe"=>"周深",
            "time"=>"04:36"
        ), array(
            "song"=>"提莫必须死",
            "singe"=>"马旭东",
            "time"=>"03:42"
        ),array(
            "song"=>"往后余生",
            "singe"=>"马良",
            "time"=>"02:32"
        ),array(
            "song"=>" MV 暖暖《周末父母》电视剧片头曲",
            "singe"=>"梁静茹",
            "time"=>"04:03"
        )
    );
    $songdataS=json_encode($songdata);
    echo $songdataS;