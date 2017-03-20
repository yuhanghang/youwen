$(function(){
	$('#dowebok').fullpage(); 	  
  	  var mySwiper = new Swiper('.swiper-container',{
  	  	autoplay:5000,//自动播放
  	  	paddingTop:100
  	  })
  	  
  	  $(".closeimg").click(function(){
  	  	$(".modelinfo").fadeOut();
  	  	$(".model").fadeOut();
  	  })
  	  
  	  $(".click").click(function(){
  	  	$(".modelinfo").fadeIn();
  	  	$(".model").fadeIn();
  	  })

})