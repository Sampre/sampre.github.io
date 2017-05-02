$(document).ready(function(){

	$('#toggle-menu').click(function(){
		$('body').toggleClass('mobile-menu');
		return false;
	});

	$(document).click(function(){
		$('body').removeClass('mobile-menu');
	})

});

new WOW().init();