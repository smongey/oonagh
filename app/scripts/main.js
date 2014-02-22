'use strict';
$('body').addClass('hidden');

function captionFix(){
	// console.log('captionfix ran');
	$('.col-1, .col-2').each(function(){
		var imgWidth = $(this).find('img').width();
		$(this).find('.caption').css('width', imgWidth);
		// console.log(imgWidth);
	});
}

$('img').load(function(){
	// console.log('load ran');
	captionFix();
});

$(window).on('resize', function(){
	captionFix();
});

$(document).ready(function(){

	setTimeout(function(){
		$('body').removeClass('hidden');
	}, 2000);
	setTimeout(function(){
		$('#logo').addClass('opaque');
	}, 3000);

	$('.col-1, .col-2').hover(function(){
		$(this).find('img').css({
			'position' : 'relative',
			'z-index': '1'
		});
		$(this).find('.caption').addClass('opaque').css({
			'position' : 'relative',
			'z-index': '1'
		});
	}, function(){
		$(this).find('img').css({
			'position' : 'relative',
			'z-index': '0'
		});
		$(this).find('.caption').removeClass('opaque').css({
			'position' : 'relative',
			'z-index': '0'
		});
	});

});