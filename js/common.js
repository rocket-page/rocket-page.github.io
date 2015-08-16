$(document).ready(function(){


	$(".mobile-menu-button").on('click', function () {
		$('body').toggleClass('overflow');

	    $('.burger-line-1').toggleClass('burger-line-1-active');
	    $('.burger-line-2').toggleClass('burger-line-2-active');
	    $('.burger-line-3').toggleClass('burger-line-3-active');

	    $('.mobile-menu').toggleClass('mobile-menu-vissible');

	    $('.mobile-logo, .mobile-1, .mobile-2, .mobile-sign-up').toggleClass('mobile-animation');
	});


});