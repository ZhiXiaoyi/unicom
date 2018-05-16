(function($) {
	$.fn.flashSlider = function(options) {
		var options = $.extend( {}, $.fn.flashSlider.defaults, options);
		this.each(function() {
			var obj = $(this);
			var curr = 1;
			var $img = obj.find("img");
			var s = $img.length;
			var w = $img.eq(0).width();
			var h = $img.eq(0).height();
			var $flashelement = $("ul", obj);
			options.height == 0 ? obj.height(h) : obj.height(options.height);
			options.width == 0 ? obj.width(w) : obj.width(options.width);
			obj.css("overflow", "hidden");
			obj.css("position", "relative");
			$flashelement.css('width', s * w);
			if (!options.horizontal) {
				$("li", obj).css('float', 'left')
			} else {
				$img.css('display', 'block')
			}
			;
			if (options.controlsShow && s > 1) {
				var navbtnhtml = '<div id="flashnvanum">';
				for ( var i = 0; i < s; i++) {
					navbtnhtml += '<span><a style="display:none">' + (i + 1) + '</a></span>'
				}
				navbtnhtml += '</div>';
				obj.append(navbtnhtml);
				obj.find("#flashnvanum span").hover(function() {
					var num = $(this).children("a").html();
					flash(num, true)
				}, function() {
					timeout = setTimeout(function() {
						flash((curr / 1 + 1), false)
					}, options.pause / 4)
				})
			}
			;
			function setcurrnum(index) {
				obj.find("#flashnvanum span").eq(index).addClass('on')
						.siblings().removeClass('on')
			}
			function flash(index, clicked) {
				$flashelement.stop();
				if (s == 1){
					return;
			  }
				var next = index == s ? 1 : index + 1;
				curr = index - 1;
				setcurrnum((index - 1));
				if (!options.horizontal) {
					p = ((index - 1) * w * -1);
					$flashelement.animate( {
						marginLeft : p
					}, options.speed, options.easing)
				} else {
					p = ((index - 1) * h * -1);
					$flashelement.animate( {
						marginTop : p
					}, options.speed, options.easing)
				}
				;
				if (clicked) {
					clearTimeout(timeout)
				}
				;
				if (options.auto && !clicked) {
					timeout = setTimeout(function() {
						flash(next, false)
					}, options.speed + options.pause)
				}
			}
			var timeout;
			setcurrnum(0);
			if (options.auto && s > 1) {
				timeout = setTimeout(function() {
					flash(2, false)
				}, options.pause)
			}
		})
	};
	$.fn.flashSlider.defaults = {
		controlsShow : true,
		horizontal : false,
		//horizontal : true,
		speed : 800,
		auto : true,
		pause : 5000,
		easing : "swing",
		height : 0,
		width : 0
	}
})(jQuery);


(function($) {
	$.fn.flashSliderrd = function(options) {
		var options = $.extend( {}, $.fn.flashSliderrd.defaults, options);
		this.each(function() {
			var obj = $(this);
			var curr = 1;
			var $img = obj.find("img");
			var s = $img.length;
			var w = $img.eq(0).width();
			var h = $img.eq(0).height();
			var $flashelement = $("ul", obj);
			options.height == 0 ? obj.height(h) : obj.height(options.height);
			options.width == 0 ? obj.width(w) : obj.width(options.width);
			obj.css("overflow", "hidden");
			obj.css("position", "relative");
			$flashelement.css('width', s * w);
			if (!options.horizontal) {
				$("li", obj).css('float', 'left')
			} else {
				$img.css('display', 'block')
			}
			;
			if (options.controlsShow && s > 1) {
			
					var navbtnhtml = '<dl id="flashdl">';
				for ( var i = 0; i < s; i++) {
					var ss=$(".index_banner_rd ul").find("li").eq(i).find("img").attr("src-lazy");
					navbtnhtml += '<dd><img  src-lazy=\"' + ss + '\" style="width: 139px; height: 60px;" /><div class="showdiv" style="display:block;" ></div><a style="display:none">' + (i + 1) + '</a></dd>'
				}
				navbtnhtml += '</dl>';
				
				obj.append(navbtnhtml);
				
				obj.find("#flashdl dd").hover(function() {
					$(this).find("div").addClass('addblack').end().siblings().find("div").removeClass('addblack');
					var num = $(this).children("a").html();
					flash(num, true)
				}, function() {
					timeout = setTimeout(function() {
						flash((curr / 1 + 1), false)
					}, options.pause / 4)
				})
			}
			;
			function setcurrnum(index) {
				obj.find("#flashdl dd").eq(index).find("div").addClass('addblack').end().siblings().find("div").removeClass('addblack');
			}
			function flash(index, clicked) {
				$flashelement.stop();
				if (s == 1){
					return;
			  }
				var next = index == s ? 1 : index + 1;
				curr = index - 1;
				setcurrnum((index - 1));
				if (!options.horizontal) {
					p = ((index - 1) * w * -1);
					$flashelement.animate( {
						marginLeft : p
					}, options.speed, options.easing)
				} else {
					p = ((index - 1) * h * -1);
					$flashelement.animate( {
						marginTop : p
					}, options.speed, options.easing)
				}
				;
				if (clicked) {
					clearTimeout(timeout)
				}
				;
				if (options.auto && !clicked) {
					timeout = setTimeout(function() {
						flash(next, false)
					}, options.speed + options.pause)
				}
			}
			var timeout;
			setcurrnum(0);
			if (options.auto && s > 1) {
				timeout = setTimeout(function() {
					flash(2, false)
				}, options.pause)
			}
		})
	};
	$.fn.flashSliderrd.defaults = {
		controlsShow : true,
		horizontal : false,
		//horizontal : true,
		speed : 800,
		auto : true,
		pause : 5000,
		easing : "swing",
		height : 0,
		width : 0
	}
})(jQuery);