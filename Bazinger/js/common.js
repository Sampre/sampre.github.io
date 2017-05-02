$(document).ready(function(){

	$('.main-carousel').flickity({
		cellAlign: 'left',
		contain: true,
		setGallerySize: false,
		draggable: false
	});
	$('.carousel').flickity({
		cellAlign: 'left',
		contain: true,
		setGallerySize: true,
		draggable: false,
		prevNextButtons: false,
		autoPlay: 5000
	});

	$('.image-popup').magnificPopup({type:'image'});
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: '//www.youtube.com/watch?v=l6pDOwNeTrg'
				}
			}
		}
	});

//scroll
var $menu = $('#menu');

$($menu).on("click","a", function (event) {
	event.preventDefault();
	$($menu).slideUp();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
});

//menu
$('.toggle-menu').on('click', function(e) {
	e.preventDefault();
	$($menu).slideToggle();
});
$(window).resize(function(){
	var w = $(window).width();
	if(w > 320 && $menu.is(':hidden')) {
		$menu.removeAttr('style');
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
$('.maps').on('click', onMapClickHandler);

new WOW().init();