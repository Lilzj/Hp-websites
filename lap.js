

	$(document).ready(function(){
	$('#biz').click(function(){
	$('#setB').show();
	$('.h1').show();
	$('.h2').hide();
	$('.h3').hide();
	$("#setG").hide();
	$("#setP").hide();


		});

	$('.img1').hover(
		function(){
			$('.img1').css('margin-left',"200px");
			$('.img1').css('width',"35%");
			$('.img3').css('width',"23%");
			$('.sound').css('width',"120%");
			$('.shake').show();
			$('.shakep').show();



	},
		function () {
			$('.sound').css('width',"100%");
			$('.img1').css('margin-left',"30px");
			$('.img1').css('width',"27%");
			$('.img3').css('width',"27%");
			$('.shake').hide();
			$('.shakep').hide();

		});
	
		$('.img3').hover(
		function(){
			$('.img3').css('margin-right',"200px");
			$('.img3').css('width',"28%");
			$('.img1').css('width',"23%");
			$('.img1').css('margin-left',"-200px");
			$('.sound').css('width',"120%");
			$('.shake3').show();
			$('.shake3p').show();



	},
		function () {
			$('.sound').css('width',"100%");
			$('.img1').css('margin-left',"20px");
			$('.img3').css('margin-right',"0px");
			$('.img1').css('width',"27%");
			$('.img3').css('width',"27%");
			$('.shake3').hide();
			$('.shake3p').hide();

		});


	$('.img2').hover(
		function(){
			$('.sound').css('width',"120%");
			$('.img1').css('margin-left',"-20px");
			$('.img2').css('margin-left',"40px");
			$('.img3').css('margin-right',"-20px");
			$('.img3').css('margin-left',"40px");
			$('.shake2').show();
			$('.shake2p').show();
	},
		function () {
			$('.sound').css('width',"100%");
			$('.img1').css('margin-left',"20px");
			$('.img2').css('margin-left',"20px");
			$('.img3').css('margin-right',"0px");
			$('.img3').css('margin-left',"20px");
			$('.shake2').hide();
			$('.shake2p').hide();


		});

	});




 $(document).ready(function(){
	$('#pre').click(function(){	
	$("#setP").show();
	$('.h2').show();
	$('.h1').hide();
	$('.h3').hide();
	$("#setB").hide();
	$("#setG").hide();
		}); 
});


 $(document).ready(function(){
	$('#gre').click(function(){	
	$("#setG").show();
	$(".h3").show();
	$('.h2').hide();
	$('.h1').hide();
	$("#setB").hide();
	$("#setP").hide();
		}); 
});

 $(document).ready(function(){
	$('.us').hover(function(){	
	$(".btn1").show();
	$(".btn2").hide();
	// $("#setB").hide();
	// $("#setP").hide();
		}); 
});

 $(document).ready(function(){
	$('.usa').hover(function(){	
	$(".btn2").show();
	$(".btn1").hide();

	}); 
});

  $(document).ready(function(){
	$('#united').hover(function(){	
	$(".btn2").hide();
	$(".btn1").hide();

	}); 
});
   $(document).ready(function(){
	$('#lapst').hover(function(){	
	$(".drop").slideDown();
	
	}); 
});

     $(document).ready(function(){
	$('.vid').hover(function(){	
	$(".drop").hide();
	
	 });
});

$(document).ready(function(){
	$('#cart').hover(function(){	
	$(".drop2").show();
	

});
});
$(document).ready(function(){
	$('.drop2').hover(function(){	
	$(".drop2").hide();
	
});
});
$(document).ready(function(){
	$('.ima1').hover(function(){	
	$(".new").hide();
	$(".envy").show();
	$(".ready").show();
	$(".back").show();
});
});
$(document).ready(function(){
	$('.ima2').hover(function(){	
	$(".new").show();
	$(".envy").show();
	$(".ready").show();
	$(".back").hide();

	});
});
$(document).ready(function(){
	$('.ima3').hover(function(){
	$(".envy").hide();	
	$(".new").show();
	$(".ready").show();
	$(".back").show();

	});
});
$(document).ready(function(){
	$('.ima').hover(function(){	
	$(".new").show();
	$(".envy").show();
	$(".ready").hide();
	$(".back").show();

	});
});
$(document).ready(function(){
	$('.in').hover(function(){	
	$(".new").show();
	$(".envy").show();
	$(".ready").show();
	$(".back").show();

	});
});
$(document).ready(function(){
	$('#view').hover(function(){	
	$(".new").show();
	$(".envy").show();
	$(".ready").show();
	$(".back").show();

	});
});
$(document).ready(function(){
	$('.abc').hover(function(){	
	$(".new").show();
	$(".envy").show();
	$(".ready").show();
	$(".back").show();

	});
});
$(document).ready(function(){
	$('.gallery').hover(function(){	
	$(".new").show();
	$(".envy").show();
	$(".ready").show();
	$(".back").show();

	});
});
$(document).ready(function(){
	$('.video jarallax').click(function(){	
	$("#gun").show();
	$(".player").hide();
	
});
});
$(document).ready(function(){
	$('.player').click(function(){	
	 $("#gun").show();
	 $(".player").hide();
	
});
});