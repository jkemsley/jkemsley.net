$(document).ready(init);

function init() {

	var menu = false;

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

		.moveTo(400, 500, { name: "home"})

		.lineTo(400, 900, {
			callback: function(){
				if(menu === true) { 
					// toggle_menu();
				}
			}
		})

		.lineTo(400, 1000, {
			callback: function(){
				// toggle_menu();
				}
			})

		.arc(800, 1200, 400, 1 * Math.PI, 0.5 * Math.PI, true, {
			callback: function() {
				if(menu === false) {
					// toggle_menu();
				}
			}
		})

		// .lineTo(1320, 1500, {
		// 	callback: function() {
		// 		if(!$('.fixed .aboutskills').hasClass('selected'))
		// 		$('.fixed .aboutskills').addClass('selected');
		// 	}
		// })

		.lineTo(1320, 1600, {
			name: "about",
			callback: function() {
				if(menu === false) {
					// toggle_menu();
				}
			}
		})

		.lineTo(1750, 1600)

		.arc(1800, 1200, 400, Math.PI/2, 0, true)

		.arc(2600, 1200, 400, 1 * Math.PI, 1.5 * Math.PI, false)

		.lineTo(3000, 800, { 
			name: "portfolio",
			callback: function() {
				if(menu === false) {
					// toggle_menu();
				}
			}
		})

		.lineTo(3500, 800)

		.arc(3900, 1200, 400, 1.5 * Math.PI, 0 * Math.PI, false)

		.lineTo(4300, 1800, {
			name: "contact",
			callback: function() {
				if(menu === false) {
					// toggle_menu();
				}
			}
		});
		
	$(".site").scrollPath({wrapAround: false, scrollBar: false});

	// if(window.location.hash) {
	// 	var target = window.location.hash.replace('#', '');
	// 	$.fn.scrollPath('scrollTo', target, 0, 'easeInOutSine');
	// 	if(target !== 'home') {
	// 		toggle_menu();
	// 	}
	// }

	// $("nav").find("a").each(function() {
	// 	var target = $(this).attr("href").replace("#", "");
	// 	$(this).click(function(e) {
	// 		if(!$(this).hasClass('selected')){
	// 			if(target === 'home') {
	// 					if(menu === true) {
	// 						setTimeout(toggle_menu, 800);
	// 					}
	// 			} else {
	// 				if(menu === false) {
	// 					setTimeout(toggle_menu, 800);
	// 				}
	// 			}
	// 			e.preventDefault();
	// 			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine", function() {
	// 			});
	// 		}
	// 	});
	// });

	// $('.wrapper').watch('left,top', function() {
	// 	if(parseFloat($(this).css('left')) < 440) {
	// 		$(this).removeClass('nomenu').addClass('menu');
	// 	}

	// 	if(parseFloat($(this).css('left')) >= 440) {
	// 		$('wrapper').removeClass('menu').addClass('nomenu');
	// 	}
	// });

}

