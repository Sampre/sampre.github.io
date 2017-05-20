$(document).ready(function(){

	$('.header-slider').owlCarousel({
		items: 1,
		mouseDrag: false,
		loop: true,
		autoplay: true,
		touchDrag: false,
		nav: true,
		smartSpeed: 2500,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});

	$('.mini-carousel').owlCarousel({
		items: 1,
		mouseDrag: false,
		autoplay: true,
		loop: true,
		nav: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn'
	});

	$('.mini-carousel .owl-dots').wrap('<div class="dots-elem">');

	$(".case-elem>p").each(function() {
		$(this).replaceWith("<p>" + $(this).text().substr(0,300) + "</p>");
	});

	function heightElem() {
		var $childHeight = $('.service-item').height();
		$('.service-elem').css('height', ($childHeight+60)*3);
	};
	heightElem();
	$(window).resize(function() {
		heightElem();
	})
	var $elems = 0;
	setInterval(function(){
		var $number;
		if($elems <= 3) {
			$elemHeight = $('.service-item').height();
			$number = ($elemHeight + 60)*$elems;
			$('.service-scroll').animate({bottom:$number},1000);
			$elems++;
		} else {
			$elems = 0;
		}
	},3000);

//hover for team block
$('.teammate-photo').hover(function(){

	$(this).next().css('opacity','1');
	
}, function(){
	$(this).next().css('opacity','0');
});

//Scroll
$('.link, .drop-down-btn').click(function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 2200);
});


$('#top').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 1500);
	return false;
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		$('.btn-top').fadeIn();
	} else {
		$('.btn-top').fadeOut();
	}
});

//filter
$('.filter').on('click',function(){
	$('.filter').removeClass('active');
	$(this).addClass('active');
});

var fActive = '';

function filterElem(elem){
	$('.work-item').each(function(){
		var $elem = $(this);
		var $elemFilter = $elem.filter('.'+elem);
		$elemFilter.fadeIn(600);
		$elem.filter(':not(.'+elem+')').hide(600);
		fActive = elem;
	})
}

$('.f-print').click(function(){ filterElem('print'); });
$('.f-animation').click(function(){ filterElem('animation'); });
$('.f-art').click(function(){ filterElem('art'); });
$('.f-design').click(function(){ filterElem('design'); });
$('.f-photo').click(function(){ filterElem('photo'); });
$('.f-video').click(function(){ filterElem('video'); });
$('.f-all').click(function(){
	$('.work-item').fadeIn();
	fActive = 'all';
});

//modal window
$('a.modal_open').click( function(event){
	var $elem = $(this);
	event.preventDefault();
	$elem.next().next().fadeIn(400,
		function(){
			$elem.next()
			.css('display', 'block')
			.animate({opacity: 1, top: '50%'}, 200);
		});
});

$('.modal_close').click( function(){
	$(this).parent()
	.animate({opacity: 0, top: '45%'}, 200,
		function(){
			$(this).css('display', 'none');
			$('.overlay').fadeOut(400);
		}
		);
});
$('.overlay').click( function(){
	$('.modal_form')
	.animate({opacity: 0, top: '45%'}, 200,
		function(){
			$(this).css('display', 'none');
			$('.overlay').fadeOut(800);
		}
		);
});

//mobile menu
var fa_click = 0;
$('.toggle-menu').on('click',function(){
	$('body').toggleClass('mobile-menu');
	if(fa_click == 0) {
		$('.toggle-menu i').removeClass('fa-bars');
		$('.toggle-menu i').addClass('fa-times');
		fa_click = 1;
	} else {
		$('.toggle-menu i').removeClass('fa-times');
		$('.toggle-menu i').addClass('fa-bars');
		fa_click = 0;
	}
	return false;
});
$(document).click(function(){
	$('body').removeClass('mobile-menu');
	$('.toggle-menu i').removeClass('fa-times');
	$('.toggle-menu i').addClass('fa-bars');
	fa_click = 0;
})


});