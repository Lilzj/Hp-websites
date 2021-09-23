$(document).ready(function(){
	// alert("hello");
// $('.nav2').onePageNav();

$(window).scroll(function(){
	scroll = $(window).scrollTop();
	if ((scroll >= 3100)&&(scroll<= 4570)) {
		$('#aboutChange').css('color', '#fff');
		$('#aboutChange').addClass('current');
	} else{
		$('#aboutChange').removeClass('current');
				$('#aboutChange').css('color', '#002B5B');

	}
	$('#aboutChange').mouseover(function(){
		$('#aboutChange').css("color","#002B5B");
	})
	$('#aboutChange').mouseout(function(){
		$('#aboutChange').css("color","#fff");
	})
})
$(window).scroll(function(){
	scroll = $(window).scrollTop();
	if ((scroll >= 4600)&&(scroll <= 7900)) {
		$('#acade').addClass('current');
		$('#acade').css('color', '#fff');
	} else{
		$('#acade').removeClass('current');
				$('#acade').css('color', '#002B5B');

	}
	$('#acade').mouseover(function(){
		$('#acade').css("color","#002B5B");
	})
	$('#acade').mouseout(function(){
		$('#acade').css("color","#fff");
	})
})
$(window).scroll(function(){
	scroll = $(window).scrollTop();
	if ((scroll >= 7901)&&(scroll <= 9470)) {
		$('#admin').addClass('current');
		$('#admin').css('color', '#fff');
	} else{
		$('#admin').removeClass('current');
				$('#admin').css('color', '#002B5B');

	
	}
	$('#admin').mouseover(function(){
		$('#admin').css("color","#002B5B");
	})
	$('#admin').mouseout(function(){
		$('#admin').css("color","#fff");
	})
})
$(window).scroll(function(){
	scroll = $(window).scrollTop();
	if (scroll >= 9469) {
		$('#fateful').addClass('current');
		$('#fateful').css('color', '#fff');
	} else{
		$('#fateful').removeClass('current');
				$('#fateful').css('color', '#002B5B');

	}
	$('#fateful').mouseover(function(){
		$('#fateful').css("color","#002B5B");
	})
	$('#fateful').mouseout(function(){
		$('#fateful').css("color","#fff");
	})

})

	
	
	
		
});

// 
// window.onscroll = function(){
// 	color();
// }
// function color(){
// 	if((window.body.scrollTop >= 9471 ) && (window.documentElement.scrollTop <= 10000){
// 		var get = document.getElementById('fateful');
// 		get.classList = ".current";
// 	}
// 	else{
// 		var get = document.getElementById('fateful');
// 		get.classList = "";
// 	}
// }
