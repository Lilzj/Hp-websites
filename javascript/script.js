$(document).ready(function(){

	$('#about').click(function(e){

		$('html,body').animate({
			scrollTop: $('#about').offset().top},20000);
		return false;
		e.preventDefault();
		});
	
	});


	
