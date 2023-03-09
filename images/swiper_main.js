
$(function () { 
	$(window).load(function(){
		
		
		var Area4_swiper = new Swiper('.Area2 .boxx', {
			//小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
			pagination: '.Area2 .swiper-pagination',  
			paginationClickable: true, //觸擊切換
	
			//左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
			nextButton: '.Area2 .swiper-button-next', 
			prevButton: '.Area2 .swiper-button-prev',
	
			//自動撥放
			autoplay: 3000, //自動輪播間隔時間
			autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
			
			//排版
			spaceBetween: 20, //間距
			
			//切換特效(3D)
			effect: 'coverflow', //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
			centeredSlides: true, //目前區塊居中
			slidesPerView: 3.8, //顯示改回自動
			coverflow: {
				rotate: 50,  //slide旋轉時Y軸的旋轉角度
				stretch: 0,  //slide之間的拉伸值，越大slide靠得越緊
				depth: 100,    //slide的位置深度
				modifier: 0.6, //depth和rotate和stretch的倍率
				//slideShadows : false,  //slide陰影
			},
			
			//RWD
			breakpoints: {
				767: {
					//排版
					spaceBetween: 4, //間距
					slidesPerView: 3, //顯示改回自動
				},
			},
			
			//延遲加載	
			lazyLoading : true,			//延遲載入啟動
			lazyLoadingInPrevNext : true,	//提前載入前一個和後一個slide
			lazyLoadingInPrevNextAmount : 2,	//提前載入幾個前後slide
			lazyLoadingOnTransitionStart : true,//切換時就開始載入
	
		});


		/*BARND*/
		var bank_Swiper = new Swiper('.brand .box', {
			//小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
			pagination: '.brand .swiper-pagination',  
			paginationClickable: true, //觸擊切換
			//左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
			nextButton: '.brand .swiper-button-next', 
			prevButton: '.brand .swiper-button-prev',
		
			//基本
			centeredSlides: false, //當前區塊居中
			loop: true, //無限循環
			//排版
			slidesPerView: 1, //顯示幾個
			slidesPerGroup: 1, //一次切換幾個
			spaceBetween: 0, //間距
			//自動撥放
			autoplay: 5000, //自動輪播間隔時間
			autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
		});			
			
			
			
		/*詳情照片1*/
		var Area_PD_con_1_img_swiper = new Swiper('.Area_PD_con_1 .PD_img', {
			//小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
			pagination: '.Area_PD_con_1 .swiper-pagination',  
			paginationClickable: true, //觸擊切換
	
			//左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
			nextButton: '.Area_PD_con_1 .swiper-button-next', 
			prevButton: '.Area_PD_con_1 .swiper-button-prev',
			
			//排版
			slidesPerView: 1, //顯示幾個
			//RWD
			breakpoints: {
				767: {
					
					//排版
					slidesPerView: 1,
	
					//自動撥放
					autoplay: 3000, //自動輪播間隔時間
					autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
					
				},
			},
	
		});
			
		/*詳情照片2*/
		var Area_PD_con_2_img_swiper = new Swiper('.Area_PD_con_2 .PD_img', {
			//小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
			pagination: '.Area_PD_con_2 .swiper-pagination',  
			paginationClickable: true, //觸擊切換
	
			//左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
			nextButton: '.Area_PD_con_2 .swiper-button-next', 
			prevButton: '.Area_PD_con_2 .swiper-button-prev',
			
			//排版
			slidesPerView: 1, //顯示幾個
			//RWD
			breakpoints: {
				767: {
					
					//排版
					slidesPerView: 1,
	
					//自動撥放
					autoplay: 3000, //自動輪播間隔時間
					autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
					
				},
			},
	
		});	
		
			
		/*詳情照片3*/
		var Area_PD_con_3_img_swiper = new Swiper('.Area_PD_con_3 .PD_img', {
			//小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
			pagination: '.Area_PD_con_3 .swiper-pagination',  
			paginationClickable: true, //觸擊切換
	
			//左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
			nextButton: '.Area_PD_con_3 .swiper-button-next', 
			prevButton: '.Area_PD_con_3 .swiper-button-prev',
			
			//排版
			slidesPerView: 1, //顯示幾個
			//RWD
			breakpoints: {
				767: {
					
					//排版
					slidesPerView: 1,
	
					//自動撥放
					autoplay: 3000, //自動輪播間隔時間
					autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
					
				},
			},
	
		});	


		/*詳情照片4*/
		var Area_PD_con_4_img_swiper = new Swiper('.Area_PD_con_4 .PD_img', {
			//小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
			pagination: '.Area_PD_con_4 .swiper-pagination',  
			paginationClickable: true, //觸擊切換
	
			//左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
			nextButton: '.Area_PD_con_4 .swiper-button-next', 
			prevButton: '.Area_PD_con_4 .swiper-button-prev',
			
			//排版
			slidesPerView: 1, //顯示幾個
			//RWD
			breakpoints: {
				767: {
					
					//排版
					slidesPerView: 1,
	
					//自動撥放
					autoplay: 3000, //自動輪播間隔時間
					autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
					
				},
			},
	
		});	





		/*詳情照片4*/
		var Area_PD_con_5_img_swiper = new Swiper('.Area_PD_con_5 .PD_img', {
			//小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
			pagination: '.Area_PD_con_5 .swiper-pagination',  
			paginationClickable: true, //觸擊切換
	
			//左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black
			nextButton: '.Area_PD_con_5 .swiper-button-next', 
			prevButton: '.Area_PD_con_5 .swiper-button-prev',
			
			//排版
			slidesPerView: 1, //顯示幾個
			//RWD
			breakpoints: {
				767: {
					
					//排版
					slidesPerView: 1,
	
					//自動撥放
					autoplay: 3000, //自動輪播間隔時間
					autoplayDisableOnInteraction: false, //觸擊後還是會再自動輪播
					
				},
			},
	
		});	









		
		});
});