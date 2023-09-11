$( document ).ready(function() {
	
	$('a[href^="#"]').on('click', function () {
		var speed = 400;
		var href = $(this).attr('href');
		var target = $(href === '#' || href === '' ? 'html' : href);
		var wwidth = $( window ).width();
		if(wwidth <= 768){
			var position = target.offset().top - 80;
		}else{
			var position = target.offset().top;
		}
		$('body,html').stop().animate({ scrollTop: position }, speed, 'swing');
		return false;
	});

	var topBtn = $('#back_to_top a');

	$(window).scroll(function () {

		var bh = $('body').outerHeight();
		var wh = $(window).outerHeight();
		var ww = $(window).width();
		var wOffset = $(this).scrollTop();
		var footerH = 0;
		var addBottom = 45;
		if(ww <= 768) {
			addBottom = 45;
		}

		if(wOffset > bh-wh+addBottom) {
			var diff = (wOffset+wh)-(bh-footerH+addBottom);
			topBtn.css('bottom',diff);
		} else {
			topBtn.css('bottom',addBottom);
		}

		if (wOffset > $('.headerArea').outerHeight()) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
		
	});

	$('.description01').autoheight();
	$('.description02').autoheight();

});