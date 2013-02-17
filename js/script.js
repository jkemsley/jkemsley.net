$(document).ready(init);

function init() {

	// var menu = false;

	// function toggle_menu() {
	// 	if(menu === false) {
	// 		$('nav.fixed').stop().animate({top:'0px'}, 200, function() {
	// 			menu = true;
	// 		});
	// 	} else {
	// 		$('nav.fixed').stop().animate({top:'-80px'}, 200, function() {
	// 			menu = false;
	// 		});
	// 	}
	// } 

	$.fn.scrollPath("getPath")

		.moveTo(400, 620, { name: "home"})

		// .lineTo(400, 900, {
		// 	callback: function(){
		// 		if(menu === true) { 
		// 			// toggle_menu();
		// 		}
		// 	}
		// })

		// .lineTo(400, 620)

		.arc(800, 1200, 400, 1 * Math.PI, 0.5 * Math.PI, true)

		// .lineTo(1320, 1500, {
		// 	callback: function() {
		// 		if(!$('.fixed .aboutskills').hasClass('selected'))
		// 		$('.fixed .aboutskills').addClass('selected');
		// 	}
		// })

		.lineTo(1320, 1600, { name: "about"})

		.lineTo(1750, 1600)

		.arc(1900, 1300, 300, Math.PI/2, 0, true)

		.arc(2600, 1300, 400, 1 * Math.PI, 1.5 * Math.PI, false)

		.lineTo(2850, 900, { name: "portfolio"})

		// .lineTo(3100, 900)

		.arc(3200, 1300, 400, 1.5 * Math.PI, 0 * Math.PI, false)

		.lineTo(3600, 1700, { name: "contact"});
		
	$(".site").scrollPath({wrapAround: false, scrollBar: false});

	if(window.location.hash) {
		var target = window.location.hash.replace('#', '');
		$.fn.scrollPath('scrollTo', target, 0, 'easeInOutSine');
	}

	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	// $('.wrapper').watch('left,top', function() {
	// 	if(parseFloat($(this).css('left')) < 440) {
	// 		$(this).removeClass('nomenu').addClass('menu');
	// 	}

	// 	if(parseFloat($(this).css('left')) >= 440) {
	// 		$('wrapper').removeClass('menu').addClass('nomenu');
	// 	}
	// });

}

