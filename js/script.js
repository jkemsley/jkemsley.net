$(document).ready(init);

function init() {

	var path = $.fn.scrollPath("getPath");

		path.moveTo(400, 620, { name: "home"})
		.arc(800, 1200, 400, 1 * Math.PI, 0.5 * Math.PI, true)
		.lineTo(1320, 1600, { name: "about"})
		.lineTo(1750, 1600)
		.arc(1900, 1300, 300, Math.PI/2, 0, true)
		.arc(2600, 1300, 400, 1 * Math.PI, 1.5 * Math.PI, false)
		.lineTo(2860, 900, { name: "portfolio"})
		.arc(3200, 1300, 400, 1.5 * Math.PI, 0 * Math.PI, false)
		.lineTo(3600, 1700, { name: "contact"});

	var galPath = $.fn.scrollPath("getBranchPath", 'gal');
		galPath.moveTo(2860, 900)
		.lineTo(2850, 2600, {name: 'hi'});

	$(".site").scrollPath({wrapAround: false, scrollBar: false, drawPath: false});
	$('#tablet-items').sliderjk({scrollSpeed: 500});	

	if(window.location.hash) {
		var target = window.location.hash.replace('#', '');
		$.fn.scrollPath('scrollTo', target, 0,'');
	}

	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();	
			if($.fn.scrollPath("onBranch") === true) {
				$.fn.scrollPath('changePath', '', 500, 'easeInOutSine', function() {
					$.fn.scrollPath("scrollTo", target, 500, "easeInOutSine");
				});

			} else {
				$.fn.scrollPath("scrollTo", target, 500, "easeInOutSine");
			}
		});
	});

	$('.port-item').click(function(e) {
		e.preventDefault();
		$.fn.sliderjk('scrollToSlide', $(this).attr('id'));
		$.fn.scrollPath('changePath', 'gal', 500, 'easeInOutSine',function() {
			$.fn.scrollPath('scrollTo', 'hi', 500, 'easeInOutSine');
		});
	});

	$('.tab-back').click(function(e) {
		e.preventDefault();
		$.fn.scrollPath('changePath', '', 500, 'easeInOutSine');
	});

	$('.tab-next').click(function(e) {
		e.preventDefault();
		$.fn.sliderjk('scrollNext', 500, 'easeOutBack');
	});

	$('.tab-prev').click(function(e) {
		e.preventDefault();
		$.fn.sliderjk('scrollPrev', 500, 'easeOutBack');
	});


}

