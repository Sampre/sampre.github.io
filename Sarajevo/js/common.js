$(document).ready(function(){

	function heightDetect() {
		$('.main-head').css('height', $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();

	})


	$('.toggle-menu').click(function(){
		$('body').toggleClass('nav-menu');
	});


	$('.filter').click(function(){
		$('.filter').removeClass('active');
		$(this).addClass('active');
	})

	$(function(){
		$('#mixitupContent').mixItUp();
	});

	$('.team-card').hover(function(){
		$(this).next().css({color:'#0eb493', transition:'0.6s'});
	}, function(){
		$(this).next().css('color','#062033');
	})

	$('#menu').on('click','a',function() {
		$('body').removeClass('nav-menu');
	});

//scroll
$("#menu").on("click","a", function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
});

//menu
var $menu = $("#menu");
$(window).scroll(function(){
	if ($(window).width()>='768' && $(this).scrollTop() > 85 && $menu.hasClass("default") ){
		$menu.fadeOut('fast',function(){
			$menu.removeClass("default").addClass("fixed").fadeIn('fast');
		});
	} else if($(window).width()<='768' || $(this).scrollTop() <= 85 && $menu.hasClass("fixed")) {
		$menu.fadeOut('fast',function(){
			$menu.removeClass("fixed").addClass("default").fadeIn('fast');
		});
	}
});


}); //jquery

var onMapMouseleaveHandler = function (event) {
	var that = $(this);
	that.on('click', onMapClickHandler);
	that.off('mouseleave', onMapMouseleaveHandler);
	that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function (event) {
	var that = $(this);
	that.off('click', onMapClickHandler);
	that.find('iframe').css("pointer-events", "auto");
	that.on('mouseleave', onMapMouseleaveHandler);
}
$('.map').on('click', onMapClickHandler);

new WOW().init();