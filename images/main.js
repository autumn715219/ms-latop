// JavaScript Document



/* 回版頭 */
jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;	
	});
    jQuery(window).scroll(function() {
        if ( jQuery(this).scrollTop() >300){ //設定大於300px才顯示浮層
            jQuery('#gotop').stop(true,true).fadeIn("fast");
        } else {
            jQuery('#gotop').stop(true,true).fadeOut("fast");
        }
    });
});

/* 滑動的GOTO */
function goTop(val) {
	if($(window).width() > 767 ){
		var gotop_i = 150;
	} else {
		var gotop_i = 100;
	}
	jQuery('html,body').animate({scrollTop: jQuery(val).offset().top - gotop_i },700);
}



/*開關PC黏人精*/
$(function(){
	var $fixed_Area = $('.fixed_Area');
	//預設進場
	setTimeout( function(){ $fixed_Area.toggleClass('fixed_Area_hide') } ,1500)
	//點擊切換
	$fixed_Area.find('.js-fixed_Area_hide').click(function(){
		$fixed_Area.toggleClass('fixed_Area_hide');
	})
});


/* mouseover */
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


/* 浮層區*/
function agree(val) {
	var blackBox = $(".blackBox");
	$(blackBox).fadeOut();
	$(val).fadeIn();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	//浮層高度
	$(val).find('.agreeArea .txtArea').css('height', winH * 60 / 100 );
	var this_agreeH = $(val).find('.agreeArea').height();
	//浮層top定位
	$('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
}
$(function(){
	var blackBox = $(".blackBox");
	var blackBox_close = $(".blackBox .close , .blackBox .but-close");
	var blackBox_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	//點按鈕關閉
	blackBox_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
	//點黑區關閉
	blackBox.delegate( blackBox_BOXclose ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
});
 
 
 
/* 浮層區2(浮層不限高度，內容全部顯示)*/
function agree2(val) {
	$(val).css('opacity','1');
	$(val).css('pointer-events','auto');
	imglazyload();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	var this_agreeH = $(val).find('.agreeArea').height();
	$(val).height( $('body').height() );
	
	//浮層top定位
	if( this_agreeH < winH ){
		//內容小於裝置高度，居中
		$('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
	} else {
		//內容大於裝置高度，置上
		$('.agreeArea').css('top', winST + winH/100*2 );
	}

}
$(function(){
	var blackBox2 = $(".blackBox2");
	var blackBox2_close = $(".close2 , .but-close2");
	var blackBox2_BOXclose = ".Boxclose2 ";
	//點按鈕關閉
	blackBox2_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox2).attr('style','');
		$(blackBox2).find('.agreeArea').attr('style','');
		e.preventDefault();
	});
	//點黑區關閉
	blackBox2.delegate( blackBox2_BOXclose ,"touchstart click",function(e){
		$(blackBox2).attr('style','');
		$(blackBox2).find('.agreeArea').attr('style','');
		e.preventDefault();
	});
}); 
 


$(function(){
	
	/*頁籤開關動作 original
	var $tabPanel = $('.menu'),
		$tabs = $tabPanel.find('.labelbox'),
		$tab = $tabs.find('li'),
		$tabContent = $('.content'),
		$content = $tabContent.find('> .page');
		$tab.eq(0).addClass('selected');
		$content.eq(0).show();
		$tab.click(function(){
			var $tabIndex = $(this).index();
			$(this).addClass('selected').siblings().removeClass('selected');
			$content.eq($tabIndex).show().siblings().hide();
			imglazyload();
		});	*/

	/*頁籤開關動作1
	var $tabPanel = $('#agree_PD1 .menu'),
		$tabs = $tabPanel.find('.labelbox'),
		$tab = $tabs.find('li'),
		$tabContent = $('#agree_PD1 .content'),
		$content = $tabContent.find('> .page');
		$tab.eq(0).addClass('selected');
		$content.eq(0).show();
		$tab.click(function(){
			var $tabIndex = $(this).index();
			$(this).addClass('selected').siblings().removeClass('selected');
			$content.eq($tabIndex).show().siblings('div').hide();
			imglazyload();
		});	
		
		
	/*頁籤開關動作2
	var $tabPanel = $('#agree_PD2 .menu'),
		$tabs = $tabPanel.find('.labelbox'),
		$tab = $tabs.find('li'),
		$tabContent = $('#agree_PD2 .content'),
		$content = $tabContent.find('> .page');
		$tab.eq(0).addClass('selected');
		$content.eq(0).show();
		$tab.click(function(){
			var $tabIndex = $(this).index();
			$(this).addClass('selected').siblings().removeClass('selected');
			$content.eq($tabIndex).show().siblings().hide();
			imglazyload();
		});	


	/*頁籤開關動作3
	var $tabPanel = $('#agree_PD3 .menu'),
		$tabs = $tabPanel.find('.labelbox'),
		$tab = $tabs.find('li'),
		$tabContent = $('#agree_PD3 .content'),
		$content = $tabContent.find('> .page');
		$tab.eq(0).addClass('selected');
		$content.eq(0).show();
		$tab.click(function(){
			var $tabIndex = $(this).index();
			$(this).addClass('selected').siblings().removeClass('selected');
			$content.eq($tabIndex).show().siblings().hide();
			imglazyload();
		});	

	/*頁籤開關動作4
	var $tabPanel = $('#agree_PD4 .menu'),
		$tabs = $tabPanel.find('.labelbox'),
		$tab = $tabs.find('li'),
		$tabContent = $('#agree_PD4 .content'),
		$content = $tabContent.find('> .page');
		$tab.eq(0).addClass('selected');
		$content.eq(0).show();
		$tab.click(function(){
			var $tabIndex = $(this).index();
			$(this).addClass('selected').siblings().removeClass('selected');
			$content.eq($tabIndex).show().siblings().hide();
			imglazyload();
		});	
		
		
	/*頁籤開關動作4
	var $tabPanel = $('#agree_PD5 .menu'),
		$tabs = $tabPanel.find('.labelbox'),
		$tab = $tabs.find('li'),
		$tabContent = $('#agree_PD5 .content'),
		$content = $tabContent.find('> .page');
		$tab.eq(0).addClass('selected');
		$content.eq(0).show();
		$tab.click(function(){
			var $tabIndex = $(this).index();
			$(this).addClass('selected').siblings().removeClass('selected');
					console.log( $tabIndex );
			$content.eq($tabIndex).show().siblings('div').hide();
			imglazyload();
		});	*/


});
	
/* 360_rotate_js*/
$(function(){
	
	/*
	$('.threesixty_box').each(function(index, element) {
		var window_w = $(window).width();
		var this_w = $(this).find('.threesixty_').width();
		var value = window_w / this_w;
		console.log( ''
		,$(this).find('.threesixty_')[0].id
		,' window_w:'+window_w
		,' this_w:'+this_w
		,' value:'+value
		 )
		if(window_w<767){
			$(this).css({ 'transform': 'scale('+ value +')'
			});
		}
    });*/
	
	//商品展示360RWD
	function d360RWD() {
		var doc_w = $(window).width();
		if ( doc_w <= 767 ) {	
			$('.d360RWD').each(function(i, e) {
				var d360_w = $(this).width();
				var i = doc_w / d360_w;
				$(this).parent('.Area_d360RWD').css('transform','scale('+ i +')');
				console.log('doc_w:'+ doc_w  +' d360_w:'+ d360_w +' i:'+ i);
			});
		};
	};
	d360RWD();
	$(window).resize(function () {
		d360RWD();
	});
	
	/*上傳圖片路徑*/
	var src = $('#artjs').attr('src');
	var imgEcm  = src.substring(0,src.indexOf("images\/"));
	var imgEcm_t = '?t=' + new Date().getTime();
	
	var threesixty = new ThreeSixty(document.getElementById('threesixty'), {
	  image: imgEcm + 'images/360_go.jpg' + imgEcm_t,
	  width: 660,
	  height: 307.26,
	  count: 36,
	  perRow: 1,
	  speed: 200,
	  inverted: true,
	  prev: document.getElementById('prev'),
	  next: document.getElementById('next')
	});
	threesixty.play();

	var threesixty2 = new ThreeSixty(document.getElementById('threesixty2'), {
	  image: imgEcm + 'images/360_pro.jpg'+ imgEcm_t,
	  width:660,
	  height: 294,
	  count: 36,
	  perRow: 1,
	  speed: 200,
	  inverted: true,
	  prev: document.getElementById('prev2'),
	  next: document.getElementById('next2')
	});
	
	threesixty2.play();
	
	
	var threesixty3 = new ThreeSixty(document.getElementById('threesixty3'), {
	  image:imgEcm + 'images/360_Laptop2.jpg'+ imgEcm_t,
	  width:660,
	  height: 366.6,
	  count: 36,
	  perRow: 1,
	  speed: 200,
	  inverted: true,
	  prev: document.getElementById('prev3'),
	  next: document.getElementById('next3')
	});
	
	threesixty3.play();


	var threesixty4 = new ThreeSixty(document.getElementById('threesixty4'), {
	  image: imgEcm +'images/360_book.jpg'+ imgEcm_t,
	  width:600,
	  height: 336,
	  count: 36,
	  perRow: 1,
	  speed: 200,
	  inverted: true,
	  prev: document.getElementById('prev4'),
	  next: document.getElementById('next4')
	});
	
	threesixty4.play();

	var threesixty5 = new ThreeSixty(document.getElementById('threesixty5'), {
	  image: imgEcm +'images/360_studio.jpg'+ imgEcm_t,
	  width:571.7,
	  height: 400,
	  count: 36,
	  perRow: 1,
	  speed: 200,
	  inverted: true,
	  prev: document.getElementById('prev5'),
	  next: document.getElementById('next5')
	});
	
	threesixty5.play();	
});
 
 
 
 

/*TimeSwitch指定時間開關物件
  -----------------------------------------------
  啟動器: data-TimeSwitch_start="2018/2/12 00:00:00" data-TimeSwitch_end="2018/2/20 23:59:59" data-TimeSwitch_Myswitch="0"
  說明:
  data-TimeSwitch_start		開始時間
  data-TimeSwitch_end		結束時間
  data-TimeSwitch_Myswitch	動作 0刪除、1打開
  -----------------------------------------------*/
$(function() {
	$("[data-TimeSwitch_start]").each(function() {
		var TimeSwitch = new Date();
		var TimeSwitchmonth  = TimeSwitch.getMonth()+1; //月
		var TimeSwitchday    = TimeSwitch.getDate(); //日
		var TimeSwitchhour   = TimeSwitch.getHours();  //時
		var TimeSwitchminute = TimeSwitch.getMinutes();  //分
		var TimeSwitchsecond = TimeSwitch.getSeconds();  //秒
		var TimeSwitchweek   = TimeSwitch.getDay(); //星期0~6 
		if( TimeSwitchmonth < 10 ){TimeSwitchmonth = '0' + TimeSwitchmonth;}  
		if( TimeSwitchday   < 10 ){TimeSwitchday   = '0' + TimeSwitchday;}  
		//範圍時間
		var Mydate_start = new Date( $(this).attr('data-TimeSwitch_start') );
		var Mydate_end   = new Date( $(this).attr('data-TimeSwitch_end') );
		var Myswitch     = $(this).attr('data-TimeSwitch_Myswitch') ;
		//Myswitch = 0 隱藏
		if ( Myswitch == 0){
				if ( Mydate_start <= TimeSwitch && TimeSwitch <= Mydate_end ) {
						$(this).remove();  //Myswitch:0, 時間內,刪除
				} else {
						$(this).show();  //Myswitch:0, 時間外,打開
				}
		}
		//Myswitch = 1 打開
		if ( Myswitch == 1){
				if ( Mydate_start <= TimeSwitch && TimeSwitch <= Mydate_end ) {
						$(this).show();   //Myswitch:1, 時間內,打開
				} else {
						$(this).remove();   //Myswitch:1, 時間外,刪除
				}
		}
	});
});



/* TAB */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.flexbox=function(){return D("flexWrap")},p.flexboxlegacy=function(){return D("boxDirection")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/*TAB */
;( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function CBPFWTabs( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	CBPFWTabs.prototype.options = {
		start : 0
	};

	CBPFWTabs.prototype._init = function() {
		// tabs elems
		this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
		// content items
		this.items = [].slice.call( this.el.querySelectorAll( '.content-wrap > section' ) );
		// current index
		this.current = -1;
		// show current content item
		this._show();
		// init events
		this._initEvents();
	};

	CBPFWTabs.prototype._initEvents = function() {
		var self = this;
		this.tabs.forEach( function( tab, idx ) {
			tab.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				self._show( idx );
				imglazyload();

			} );
		} );
	};

	CBPFWTabs.prototype._show = function( idx ) {
		if( this.current >= 0 ) {
			this.tabs[ this.current ].className = this.items[ this.current ].className = '';
		}
		// change current
		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
		this.tabs[ this.current ].className = 'tab-current';
		this.items[ this.current ].className = 'content-current';
	};

	// add to global namespace
	window.CBPFWTabs = CBPFWTabs;

})( window );


