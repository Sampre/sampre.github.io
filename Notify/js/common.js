$(document).ready(function(){

$('.main-header').parallax({imageSrc: 'img/main.jpg'});

//height detect
function heightDetect() {
	$('.main-header').css('height', $(window).height());
};
heightDetect();
$(window).resize(function() {
	heightDetect();
})

$('.carousel').flickity({
	cellAlign: 'left',
	contain: true,
	resize: false,
	prevNextButtons: false,
	autoPlay: 4000
});

});