$(function() {
	$(".post_thumbnail").hover(function() {
		$(this).children(".img_title").show();
		$(this).find(".img_info").slideDown();
	}, function() {
		$(this).children(".img_title").hide();
		$(this).find(".img_info").slideUp();
	});
	$(".select").each(function() {
		var s = $(this);
		var z = parseInt(s.css("z-index"));
		var dt = $(this).children("dt");
		var dd = $(this).children("dd");
		var _show = function() {
			dd.slideDown(200);
			dt.addClass("cur");
			s.css("z-index", z + 1);
		}; // 展开效果
		var _hide = function() {
			dd.slideUp(200);
			dt.removeClass("cur");
			s.css("z-index", z);
		}; // 关闭效果
		dt.click(function() {
			dd.is(":hidden") ? _show() : _hide();
		});
		dd.find("a").click(function() {
			dt.html($(this).html());
			_hide();
		}); // 选择效果（如需要传值，可自定义参数，在此处返回对应的"value"值 ）
		$("body").click(function(i) {
			!$(i.target).parents(".select").first().is(s) ? _hide() : "";
		});
	})

	$('.my_set').hover(function() {
		$(this).addClass('my_seton');
	}, function() {
		$(this).removeClass('my_seton');
	});

	$('.usrrcsr_cp li a').hover(function() {
		$(this).find('img').animate({
			marginRight : '5px'
		}, 200);
	}, function() {
		$(this).find('img').animate({
			marginRight : '0'
		}, 200);
	});

	var a = $('.usrrac_cp li, .usrr_ad');
	a.hover(function() {
		$(this).find('img').css('opacity', 0.7)
	}, function() {
		$(this).find('img').css('opacity', 1)
	})

	var tabs_i = 0
	$('.vtitle').click(function() {
		var _self = $(this);
		var j = $('.vtitle').index(_self);
		if (tabs_i == j)
			return false;
		tabs_i = j;
		$('.vtitle a').each(function(e) {
			if (e == tabs_i) {
				$('a', _self).removeClass('normal').addClass('cur');
			} else {
				$(this).removeClass('cur').addClass('normal');
			}
		});
		$('.vcon').slideUp().eq(tabs_i).slideDown();
	});
	/*
	 * $('.vtitle').click(function(){ $(this).find('a').toggleClass("cur");
	 * $(this).next('.vcon').slideToggle(); });
	 */

	$('#usrra_con').slidesjs({
		width : 890,
		height : 276
	});

})