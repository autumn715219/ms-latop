

$(window).load(function(){
	//定義區塊Class
	var $WRAPPER = $('.WRAPPER'); //最大包

	/* 
	 * -------------------------------------------
	 * PC選單套件
	 * -------------------------------------------
	 */ 
	//高亮
	$WRAPPER.navLight({
		navarea: '.fixed_Area',        //最大包Class。預設.NavArea
		navs: '.box',                     //區塊Class。預設.Nav
		//nav_wrapper: '.fixedBox_1',      //內容包Class。預設.Nav-wrapper
		content: '.js-PC',  //選單對應內容區塊Class。預設.js-navlight_content
		//top_i: 15,                        //錨點偏移
		
		//開關
		open_light: true,                 //啟動--高亮對應區塊。
	});
	




	/*多選單互動啟動(勿動)
	fNavChange()*/

});
