$(function() {
	/*以下为layui模块启动配置*/
	layui.use(['layer', 'form', 'element','laytpl'], function() {
		var layer = layui.layer,
		form = layui.form,
		element = layui.element,
		laytpl = layui.laytpl;
		//……
		/*各页面各模块swiper激活方法调用开始*/
		RecommendModule_active();
		var jingcaishunjian=SplendidMoment_active();
		var dongqingmv=DongQingMV_action();
		var zjzanshi=ZjTuiJian_active();
		SingerPageImg();
		/*各页面各模块swiper激活方法调用结束*/
		
		var pagetitle=$("title").text();
		if(pagetitle=="民谣馆-专辑"){
			var lastbodywidth=$(window).width();//获取专辑页初次页面宽度
			var lastbodyheight=$(window).height();//获取专辑页初次页面高度
		}
		/*全局变量*/
		var activeBangdan=null;//当前打开榜单
		
		/*自定义全局通用方法*/
		//歌曲下载方法，当前页面直接下载
        function songDownload(dwurl) {
            var $form = $('<form method="GET"></form>');
            $form.attr('action',dwurl);
            alert(dwurl);
            $form.appendTo($('body'));
            $form.submit();

            //window.open('../song/金莎 - 星月神话.mp3');
        }
		
		
		/*好歌推荐模块激活方法*/
		function RecommendModule_active(){
			var mySwiper = new Swiper('#myg_module_recommend', {
				direction: 'horizontal',//滑动方向
				loop: true, //循环
				effect: 'slide', //切换特效
				speed: 1200, //切换时间
				autoplay: false,
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					clickable :true,//圆点可切换
				},
		
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
		
			})
		}
		/*精彩瞬间模块激活方法*/
		function SplendidMoment_active(){
			 var jingcaishunjian= new Swiper('#myg_module_splendidMoment', {
				direction: 'horizontal',//滑动方向
				loop: true, //循环
				effect: 'coverflow', //切换特效
				speed: 1200, //切换时间
				autoplay: {
				    delay: 3000,
				    stopOnLastSlide: false,
				    disableOnInteraction: false,
				},
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					clickable :true,//圆点可切换
				},
		
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			})
			return jingcaishunjian;
		}
		/*动情mv模块激活方法*/
		function DongQingMV_action(){
			var dongqingmv = new Swiper('#myg_module_dongQingMv', {
		      slidesPerView: 5,//设置多少个一起显示（行）
		      slidesPerColumn: 2,//设置多少个一起显示（列）
		      spaceBetween : 20,//间距
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		    })
			return dongqingmv;
		}
		/*专辑页面：专辑齿轮模块激活方法*/
		/*专辑推荐模块激活方法*/
		function ZjTuiJian_active(){
			 var zjzanshi = new Swiper('.myg_zj_zjzs', {
		      effect: 'coverflow',
		      grabCursor: true,
		      centeredSlides: true,
		      slidesPerView: 'auto',
		      coverflowEffect: {
		        rotate: 40,
		        stretch: 0,
		        depth: 100,
		        modifier: 5,
		        slideShadows : true,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		      },
		      autoplay: {
				    delay: 1000,
				    stopOnLastSlide: false,
				    disableOnInteraction: false,
			  },
			  // 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
		    });
		    return zjzanshi;
		}
		/*歌手页面：歌手img模块激活方法*/
		function SingerPageImg(){
			var SingerPageImg=new Swiper('#myg_singer_imgblock', {
		      // 如果需要分页器
			  pagination: {
				el: '.swiper-pagination',
				clickable :true,//圆点可切换
			  },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		    });
		}
		/*swiper鼠标划入开启/禁止自动切换事件*/
		$(".myg_zj_zjzs_img,.myg_zj_zjzs_btn").mouseenter(function () {//滑过悬停
		    zjzanshi.autoplay.stop();
		}).mouseleave(function(){//离开开启
		    zjzanshi.autoplay.start();
		});
		/*鼠标划入/划出好歌推荐模块时，显示/隐藏左右切换按钮事件*/
		$("#myg_module_recommend").mouseover(function() {
			$(".myg_module_recommend_button").show();
		})
		$("#myg_module_recommend").mouseout(function() {
			$(".myg_module_recommend_button").hide();
		})
		/*好歌推荐鼠标悬停事件*/
		$(".myg_music_cover_img").each(function() {
			$(this).mouseout(function() {
				$(this).find(".myg_music_cover_mask").css("display", "none");
				$(this).find(".myg_music_cover_button").css("display", "none");
			})
		})
		$(".myg_music_cover_img").each(function() {
			$(this).mouseover(function() {
				$(this).find(".myg_music_cover_mask").css("display", "inline-block");
				$(this).find(".myg_music_cover_button").css("display", "inline-block");
			})
		})
		/*精彩瞬间鼠标悬停左右切换按钮显示/隐藏,自动切换开始/停止事件*/
		$("#myg_module_splendidMoment").mouseover(function() {
			$(".myg_splendidMoment_prev,.myg_splendidMoment_next").show();
			jingcaishunjian.autoplay.stop();
		})
		$("#myg_module_splendidMoment").mouseout(function() {
			$(".myg_splendidMoment_prev,.myg_splendidMoment_next").hide();
			jingcaishunjian.autoplay.start();
		})
		/*动情mv左右切换按钮事件*/
		$(".myg_module_dongQingMva").mouseover(function() {
			$(".myg_module_dongQingMv_leftbtn,.myg_module_dongQingMv_rightbtn").show();
		})
		$(".myg_module_dongQingMva").mouseout(function() {
			$(".myg_module_dongQingMv_leftbtn,.myg_module_dongQingMv_rightbtn").hide();
		})
		$(".myg_module_dongQingMv_leftbtn").click(function(){		
			dongqingmv.slidePrev();
		})
		$(".myg_module_dongQingMv_rightbtn").click(function(){		
			dongqingmv.slideNext();
		})
		
		/*歌手页相关事件*/
		if(pagetitle=="民谣馆-歌手"){
			$(".myg_singer_imgphotograph").each(function(){
				$(this).click(function(){
					var singer=$(this).find("p").text();
					$(location).attr('href', '../webpage/歌手详情.html'+'?singer='+singer);
				})
			})
		}
		/*歌手详情页*/
		/*查看歌手更多信息top框事件*/
		if(pagetitle=="民谣馆-歌手详情"){
			//解析url,获取参数
			var singerUrl=window.location.href;
			console.log("当前获取url为："+singerUrl);
			singerUrl=decodeURI(singerUrl);
			var reg=/singer=(\S*)/;
			var singer=reg.exec(singerUrl)[1];
			console.log("歌手："+singer);
			$(".myg_singerxq_introduce_name").text(singer);
		}
		$(".myg_singerxq_xiangqing").click(function(){
			var singerxq="歌手简介 外文名：Vae 国籍：中国  出生地：安徽合肥 职业：音乐人代表作品：《自定义》、《寻雾启示》、《苏格拉没有底》、《梦游计》简介：许嵩（Vae），1986年5月14日生于安徽省合肥市，中国内地创作型男歌手，毕业于安徽医科大学。2006年，开始在网络发表作品。2009年，发行首张词曲全创作专辑《自定义》，从而正式出道 。";
			layer.tips(singerxq, '.myg_singerxq_xiangqing', {
			  tips: 3
			});
		})
		
		/*分页点击榜单事件*/
		$(".myg_fenlei_bangdan").each(function(){
			$(this).click(function(){
				activeBangdan=$(this).attr("data-fenleibangdan");
				//alert("即将打开的榜单是:"+activeBangdan);
				$(location).attr('href', '../webpage/巅峰榜单.html'+'?bangdan='+activeBangdan);
			})
		})
		//榜单相关方法
		function BangDan(activeBangdan){
			function AlterBg(obj){
				obj.addClass("myg_bangdan_leftblockBG");
				obj.siblings().removeClass("myg_bangdan_leftblockBG");
			}
			switch(activeBangdan){
				case "民谣榜":
					$(".myg_bangdan_brh_content").find("h1").text("民谣馆-"+activeBangdan);
					$(".myg_bangdan_rightblock_header").children("img").attr("src","../img/bangdan/bangdan1.jpg");
					AlterBg($(".myg_bangdan_leftblock_content").eq(0));
				break;
				case "新歌榜":
					$(".myg_bangdan_brh_content").find("h1").text("民谣馆-"+activeBangdan);
					$(".myg_bangdan_rightblock_header").children("img").attr("src","../img/bangdan/bangdan2.jpg");
					AlterBg($(".myg_bangdan_leftblock_content").eq(1));
				break;
				case "飙升榜":
					$(".myg_bangdan_brh_content").find("h1").text("民谣馆-"+activeBangdan);
					$(".myg_bangdan_rightblock_header").children("img").attr("src","../img/bangdan/bangdan3.jpg");
					AlterBg($(".myg_bangdan_leftblock_content").eq(2));
				break;
			}
		}
		/*分类页-巅峰榜单*/
		//页面初次加载事件
		if(pagetitle=="民谣馆-巅峰榜单"){
			$(function(){
				//分类页点击后会将参数附加在榜单页url上，获取页面url
				var bangdanUrl=window.location.href;
				//console.log("url:"+bangdanUrl);
				//解析url所带参数
				var bangdanType=bangdanUrl.match(/bangdan=(\S*)/)[1];
				activeBangdan = decodeURI(bangdanType);
				BangDan(activeBangdan);
			})
		}
		/*左侧榜单收缩展开事件*/
		$(".myg_bangdan_leftblock_title").click(function(){
			var leftblockactive=$(".myg_bangdan_leftblock_title").find("div").find("i").is(".layui-icon-down");
			if(leftblockactive==true){
				$(".myg_bangdan_leftblock_title").find("div").find("i").removeClass("layui-icon-down");
				$(".myg_bangdan_leftblock_title").find("div").find("i").addClass("layui-icon-up");
				$(".myg_bangdan_leftblock_contentblock").fadeOut(1500);
			}else{
				$(".myg_bangdan_leftblock_title").find("div").find("i").removeClass("layui-icon-up");
				$(".myg_bangdan_leftblock_title").find("div").find("i").addClass("layui-icon-down");
				$(".myg_bangdan_leftblock_contentblock").fadeIn(1500);
			}
		})
		/*榜单切换事件*/
		$(".myg_bangdan_leftblock_content").each(function(){
			$(this).click(function(){
				activeBangdan=($(this).find("span").text());
				BangDan(activeBangdan);
				$(location).attr('href', '../webpage/巅峰榜单.html'+'?bangdan='+activeBangdan);
			})
		})
		/*民谣馆-巅峰榜单,模板引擎启动，ajax动态加载数据*/
		if(pagetitle=="民谣馆-巅峰榜单"){
			$.ajax({
				type: "post",
				url: "../php/songapi.php",
				async: false,
				dataType: 'json',
				success: function(data, status) {
					var getTpl = bangdan.innerHTML,
						view = document.getElementById('myg_brb_body');
					laytpl(getTpl).render(data, function(html) {
						view.innerHTML = html;
					});
				}
			});
		}
		/*页面内容高度设置*/
		if(pagetitle=="民谣馆-巅峰榜单"){
			var bangdanHeight=$("#myg_bangdan_rightblock").height();
			var bangdanWidth=$("#myg_bangdan_rightblock").width();
			$("#myg_bangdan").height(bangdanHeight);
			$("#myg_bangdan_leftblock").height(bangdanHeight);
		}
		/*mv页面mv图像悬停事件*/
		$(".myg_mvpage_cover_img").each(function() {
			$(this).mouseout(function() {
				$(this).find(".myg_mvpage_cover_mask").css("display", "none");
				$(this).find(".myg_mvpage_cover_button").css("display", "none");
			})
		})
		$(".myg_mvpage_cover_img").each(function() {
			$(this).mouseover(function() {
				$(this).find(".myg_mvpage_cover_mask").css("display", "inline-block");
				$(this).find(".myg_mvpage_cover_button").css("display", "inline-block");
				/*获取鼠标悬停的mv的名称：alert($(this).next().text());*/
			})
		})
		/*民谣馆-歌手详情页，模板引擎启动，ajax动态载入用户收藏歌曲*/
		if(pagetitle=="民谣馆-歌手详情"){
			$.ajax({
				type: "post",
				url: "../php/songapi.php",
				async: false,
				dataType: 'json',
				success: function(data, status) {
					var getTpl = singerxq.innerHTML,
						view = document.getElementById('singerxqview');
					laytpl(getTpl).render(data, function(html) {
						view.innerHTML = html;
					});
				}
			});
		}
		//专辑页通用ajax方法
		function zhuanjiajax(jxname,jxsinger){
			$.ajax({
				type: "post",
				url: "../php/zjapi.php",
				async: false,
				dataType: 'json',
				data:{
					zjname:jxname,
					zjsinger:jxsinger
				},
				success: function(data, status) {
					var getTpl = zhuanjixq.innerHTML,
						view = document.getElementById('zhuanjixqview');
					laytpl(getTpl).render(data, function(html) {
						view.innerHTML = html;
					});
				}
			});
		}
		/*民谣馆-专辑详情页，模板引擎启动，ajax动态载入专辑歌曲*/
		if(pagetitle=="民谣馆-专辑详情"){
			//正则解析url
			var zjUrl=window.location.href;
			zjUrl=decodeURI(zjUrl);
			var reg=/zjname=(.+)&/;
			var reg1=/&singer=(.+)/;
			var jxname=reg.exec(zjUrl)[1];
			var jxsinger=reg1.exec(zjUrl)[1];
			//console.log("解析url后：专辑："+jxname+"歌手："+jxsinger);
			zhuanjiajax(jxname,jxsinger);
			//获取当前页面加载的专辑歌曲数目
			console.log($(".myg_zhuanjixq_song_music").length);
			var songCount=$(".myg_zhuanjixq_song_music").length;
			//重置页面模块高度
			if(songCount<=7){
				var songHeight=$(".myg_zhuanjixq_about").height()+300;
			}else{
				var songHeight=$("#zhuanjixqview").height()+350;
			}
			$(".myg_module_BG").height(songHeight);
			
			//专辑页推荐的其他专辑点击事件
			$(".myg_zhuanjixq_qitablock").each(function() {
				$(this).click(function(){
					var zjname=$(this).find(".myg_zjtj_name").text();
					var zjsinger=$(this).find("p").text();
					//alert("点击了："+zjsinger+"的："+zjname+"，即将跳转至该专辑页面。");
					$(location).attr('href', '../webpage/专辑详情.html'+'?zjname='+zjname+'&singer='+zjsinger);
					/*zhuanjiajax(zjname,zjsinger);
					$('body,html').animate({ scrollTop: 0 }, 200);*/
				})
				
			})
			
		}
		$(".myg_zhuanjixq_header_btns_bofang").click(function(){
			alert("点击了播放");
		})
		/*专辑页面相关事件*/
		if(pagetitle=="民谣馆-专辑"){
			//解决专辑页面专辑推荐模块bug方法
			$('body').everyTime('100ms','zhuanjibug',function(){
	  			var nowbodywidth=$(window).width();
	  			var nowbodyheight=$(window).height();
	  			if(lastbodywidth!=nowbodywidth||lastbodyheight!=nowbodyheight){
	  				lastbodywidth=nowbodywidth;
	  				window.location.reload();
	  			}
			});
			//遍历获取用户当前点击的div数据，将数据传送给详情页
			$(".swiper-slide").each(function() {
				$(this).click(function(){
					var zjname=$(this).find("p").text();
					var zjsinger=$(this).find("span").text();
					alert("点击了："+zjsinger+"的："+zjname+"，即将跳转至该专辑页面。");
					$(location).attr('href', '../webpage/专辑详情.html'+'?zjname='+zjname+'&singer='+zjsinger);
				})
			})
		}
		/*我的音乐page模板引擎启动，ajax动态载入用户收藏歌曲*/
		if(pagetitle=="民谣馆-我的音乐"){
			$.ajax({
				type: "post",
				url: "../php/songapi.php",
				async: false,
				dataType: 'json',
				success: function(data, status) {
					var getTpl = demo.innerHTML,
						view = document.getElementById('view');
					laytpl(getTpl).render(data, function(html) {
						view.innerHTML = html;
					});
				}
			});
		}
		/*我的音乐page歌曲悬停事件*/
		$(".myg_mygmusic_classifyblock_music,.myg_singerxq_classifyblock_music,.myg_brb_song,.myg_zhuanjixq_song_music").each(function() {
			$(this).mouseout(function() {
				var singername=$(this).find(".myg_mygmusic_classifyblock_music_name,.myg_singerxq_classifyblock_music_name,.myg_brb_song_singe").find("span").text();
				var musicBtnGroup=$(this).find(".myg_mygmusic_classifyblock_music_name,.myg_singerxq_classifyblock_music_name,.myg_brb_song_singe").find(".myg_mygmusic_musicbtngroup,.myg_singerxq_musicbtngroup");
				musicBtnGroup.css("display", "none");
			})
		})
		$(".myg_mygmusic_classifyblock_music,.myg_singerxq_classifyblock_music,.myg_brb_song,.myg_zhuanjixq_song_music").each(function() {
			$(this).mouseover(function() {
				var singername=$(this).find(".myg_mygmusic_classifyblock_music_name,.myg_singerxq_classifyblock_music_name,.myg_brb_song_singe").find("span").text();
				var musicBtnGroup=$(this).find(".myg_mygmusic_classifyblock_music_name,.myg_singerxq_classifyblock_music_name,.myg_brb_song_singe").find(".myg_mygmusic_musicbtngroup,.myg_singerxq_musicbtngroup");
				//console.log(("移入"+singername));
				musicBtnGroup.css("display", "block");
			})
		})
		/*我的音乐page鼠标悬停按钮悬停激活变色事件*/
		$(".myg_mygmusic_musicbtngroup_icon>li>img,.myg_singerxq_musicbtngroup_icon>li>img").each(function(){	
			$(this).mouseover(function(){
					var btnName=$(this).attr('alt');
					//console.log(btnName);
					switch(btnName){
						case '播放':
							$(this).attr('src','../img/icon/播放active.png');
							break;
						case '添加':
							$(this).attr('src','../img/icon/添加active.png');
							break;
						case '下载':
							$(this).attr('src','../img/icon/下载active.png');
							break;
						case '分享':
							$(this).attr('src','../img/icon/分享active.png');
							break;
					}
				})
				$(this).mouseout(function(){
					var btnName=$(this).attr('alt');
					switch(btnName){
						case '播放':
							$(this).attr('src','../img/icon/播放.png');
							break;
						case '添加':
							$(this).attr('src','../img/icon/添加.png');
							break;
						case '下载':
							$(this).attr('src','../img/icon/下载.png');
							break;
						case '分享':
							$(this).attr('src','../img/icon/分享.png');
							break;
					}
				})
		})
		
		/*我的音乐播放，添加，下载，分享按钮点击事件*/
		$(".myg_mygmusic_musicbtngroup_icon>li>img,.myg_singerxq_musicbtngroup_icon>li>img").each(function(){
			$(this).click(function(){
				var btnName=$(this).attr('alt');
				//获取当前歌曲信息
				var songName=$(this).parent().parent().parent().prev().text();
				switch(btnName){
						case "播放":
							alert("点击了播放按钮,播放："+songName);
							break;
						case "添加":
							alert("点击了添加按钮，收藏："+songName);
							break;
						case "下载":
							alert("点击了下载按钮,下载："+songName);
							var dwurl="../song/金莎 - 星月神话.mp3";
							songDownload(dwurl);
							//alert("下载地址"+dwurl+",下载："+songName);
							break;
						case "分享":
							alert("点击了分享按钮，分享："+songName);
							break;
				}
			})
		})

		/*我的音乐-登录页面弹出登录框事件*/
		$(".myg_mymusic_denglu_btn").on('click',function(){
			layer.open({
			  skin: 'yourclass',
		      type: 2,
		      title: false,
		      maxmin: false,
		      scrollbar:false,
		      shadeClose: false, //点击遮罩关闭层
		      area : ['500px','332px'],
		      content: '../webpage/denglu.html'
		    });
		   
		})
		
		/*表单验证相关方法*/
		//用户名常规验证+ajax验证用户是否已被注册
		function formVerifyUsername(username,obj){
			if(username.length==0){
				obj.eq(0).text("用户名不能为空！");
				return false;
			}
			if(username.length<6||username.length>12){
				obj.eq(0).text("用户名长度必须为6-12位！");
				return false;
			}
			var reg=/^[a-zA-Z][^\u4E00-\u9FA5]{5,12}$/;//非中文验证
			var reg1=/^[a-zA-Z][\S]{5,12}$/;//非空验证
			var regResult=reg.test(username);
			var regResult1=reg1.test(username);
			if(!regResult||!regResult1){
				obj.eq(0).text("用户名必须以字母开头，不能包含中文，空格等非法字符！");
				return false;
			}
			$.ajax({
				type: "post",
				url: "../php/userapi.php",
				async: false,
				dataType: 'json',
				data:{
					username:username
				},
				success: function(data, status) {
					console.log(data);
					if(data=="有"){
						obj.eq(0).text("该用户名已被其他用户注册，请使用其他用户名！");
						return false;
					}else{
						obj.eq(0).text("");
						obj.eq(0).append("<i class='layui-icon layui-icon-ok-circle myg_yesicon'></i>");
					}
				}
			});
			/*$.ajax({
				type: "get",
				url: "http://212.64.21.164:8080/folkmuisc/user/validateUserName"+"?username="+username,
				async: false,
				dataType: 'json',
				data:{
					username:username
				},
				success: function(data, status) {
					console.log("数据："+data+"状态:"+status);
					//console.log(data);
					if(data=="false"){
						obj.eq(0).text("该用户名已被其他用户注册，请使用其他用户名！");
						return false;
					}else{
						obj.eq(0).text("");
						obj.eq(0).append("<i class='layui-icon layui-icon-ok-circle myg_yesicon'></i>");
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {//请求异常：网络断开或者
		            alert("请求数据异常，状态码：" + XMLHttpRequest.status);
		         }

			});*/
			/*$.get('http://212.64.21.164:8080/folkmuisc/user/validateUserName'+'?username='+username,function(data,status){
				console.log("返回："+data+"状态："+status);
			})*/
			return true;
		}
		//昵称验证
		function formVerifyNick(usernick,obj){
			if(usernick.length==0){
				obj.eq(1).text("用户昵称不能为空！");
				return false;
			}
			if(usernick.length<2||usernick.length>6){
				obj.eq(1).text("用户昵称长度必须为2-6位！");
				return false;
			}
			var reg=/^[\S]{2,7}$/;//非空验证
			var regResult=reg.test(usernick);
			if(!regResult){
				obj.eq(1).text("用户昵称不能包含空格等非法字符！");
				return false;
			}
			obj.eq(1).text("");
			obj.eq(1).append("<i class='layui-icon layui-icon-ok-circle myg_yesicon'></i>");
			return true;
		}
		
		//密码常规验证
		function formVerifyPassword(userpwd,userpwd2,cishu,obj){
			if(userpwd.length==0){
				obj.eq(2).text("密码不能为空！");
				return false;
			}
			if(userpwd.length<6||userpwd.length>12){
				obj.eq(2).text("密码长度必须为6-12位！");
				return false;
			}
			var reg=/^[^\u4E00-\u9FA5]{6,13}$/;//非中文验证
			var reg1=/^[\S]{6,13}$/;//非空验证
			var regResult=reg.test(userpwd);
			var regResult1=reg1.test(userpwd);
			if(!regResult||!regResult1){
				obj.eq(2).text("密码不能包含中文，空格等非法字符！");
				return false;
			}
			if(cishu==2){
				if(userpwd!=userpwd2){
					obj.eq(3).text("两次输入密码不一致，请重新输入！")
					return false;
				}
				obj.eq(3).text("");
				obj.eq(3).append("<i class='layui-icon layui-icon-ok-circle myg_yesicon'></i>");
				//调用验证码方法
				var drap=$('#drag').drag();
			}
			obj.eq(2).text("");
			obj.eq(2).append("<i class='layui-icon layui-icon-ok-circle myg_yesicon'></i>");
			return true;
		}
		//邮箱验证
		function  formVerifyEmail(useremail,obj){
			if(useremail==""){
				obj.eq(4).text("");
				return true;
			}
			var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			var regResult=reg.test(useremail);
			if(!regResult){
				obj.eq(4).text("邮箱格式错误，请输入正确的邮箱！");
				return false;
			}
			obj.eq(4).text("");
			obj.eq(4).append("<i class='layui-icon layui-icon-ok-circle myg_yesicon'></i>");
			return true;
		}
		if(pagetitle=="民谣馆-注册"){
			//及时验证事件
			$(".myg_zhuce_input_name").blur(function(){
				var userData=$(".layui-input");			
				var	userName=userData[0].value;//用户名
				formVerifyUsername(userName,$(".myg_zhuce_tishi"));
			})
			$(".myg_zhuce_input_nick").blur(function(){
				var userData=$(".layui-input");			
				var	userName=userData[0].value;//用户名
				var	userNick=userData[1].value;//用户昵称
				formVerifyUsername(userName,$(".myg_zhuce_tishi"));
				formVerifyNick(userNick,$(".myg_zhuce_tishi"));
			})
			$(".myg_zhuce_input_pwd").blur(function(){
				var userData=$(".layui-input");			
				var	userName=userData[0].value;//用户名
				var	userNick=userData[1].value;//用户昵称
				var	userPwd=userData[2].value;//密码
				var	userPwd2=userData[3].value;//确认密码
				formVerifyUsername(userName,$(".myg_zhuce_tishi"));
				formVerifyNick(userNick,$(".myg_zhuce_tishi"));
				formVerifyPassword(userPwd,userPwd2,1,$(".myg_zhuce_tishi"));
			})
			$(".myg_zhuce_input_pwd2").blur(function(){
				var userData=$(".layui-input");			
				var	userName=userData[0].value;//用户名
				var	userNick=userData[1].value;//用户昵称
				var	userPwd=userData[2].value;//密码
				var	userPwd2=userData[3].value;//确认密码
				formVerifyUsername(userName,$(".myg_zhuce_tishi"));
				formVerifyNick(userNick,$(".myg_zhuce_tishi"));
				formVerifyPassword(userPwd,userPwd2,2,$(".myg_zhuce_tishi"));
			})
			$(".myg_zhuce_input_email").blur(function(){
				var userData=$(".layui-input");			
				var	userName=userData[0].value;//用户名
				var	userNick=userData[1].value;//用户昵称
				var	userPwd=userData[2].value;//密码
				var	userPwd2=userData[3].value;//确认密码
				var	userEmail=userData[4].value;//邮箱
				formVerifyUsername(userName,$(".myg_zhuce_tishi"));
				formVerifyNick(userNick,$(".myg_zhuce_tishi"));
				formVerifyPassword(userPwd,userPwd2,2,$(".myg_zhuce_tishi"));
				formVerifyEmail(userEmail,$(".myg_zhuce_tishi"));
			})
			//点击注册按钮事件
			$(".myg_zhuce_submit").click(function(){				
				var userData=$(".layui-input");			
				var	userName=userData[0].value;//用户名
				var	userNick=userData[1].value;//用户昵称
				var	userPwd=userData[2].value;//密码
				var	userPwd2=userData[3].value;//确认密码
				var	userEmail=userData[4].value;//邮箱
				var verify=$(".drag_text").text();
				if(verify=="验证通过"){
					verify=true;
				}else{
					verify=false;
				}
				var verifyName=formVerifyUsername(userName,$(".myg_zhuce_tishi"));
				var verifyNick=formVerifyNick(userNick,$(".myg_zhuce_tishi"));
				var verifyPwd=formVerifyPassword(userPwd,userPwd2,2,$(".myg_zhuce_tishi"));
				var verifyEmail=formVerifyEmail(userEmail,$(".myg_zhuce_tishi"));
				if(verifyName&&verifyPwd&&verifyNick&&verifyEmail&&verify){
					$.ajax({
						type: "post",
						url: "../php/userapi.php",
						async: false,
						dataType: 'json',
						data:{
							username:userName,
							usernick:userNick,
							userpwd:userPwd,
							useremail:userEmail
						},
						success: function(data, status) {
							//根据返回结果判断注册是否成功，成功前往登录页面
							console.log(data);
						}
					});
					alert("已通过所有验证，将数据发往后端！");
				}else{
					return false;
				}
			})
			
			//哈哈哈哈，我在学习使用git
		}
	})
})
