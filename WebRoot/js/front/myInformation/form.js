//select
(function($) {
	function hideOptions(speed) {
		if (speed.data) {
			speed = speed.data
		}
		if ($(document).data("nowselectoptions")) {
			$($(document).data("nowselectoptions")).slideUp(speed);
			$($(document).data("nowselectoptions")).prev("div").removeClass("tag_select_open");
			$(document).data("nowselectoptions", null);
			$(document).unbind("click", hideOptions);
			$(document).unbind("keyup", hideOptionsOnEscKey);
		}
	}
	function hideOptionsOnEscKey(e) {
		var myEvent = e || window.event;
		var keyCode = myEvent.keyCode;
		if (keyCode == 27) hideOptions(e.data);
	}
	function showOptions(speed) {
		$(document).bind("click", speed, hideOptions);
		$(document).bind("keyup", speed, hideOptionsOnEscKey);
		$($(document).data("nowselectoptions")).slideDown(speed);
		$($(document).data("nowselectoptions")).prev("div").addClass("tag_select_open");
	}

	$.fn.selectCss = function(_speed) {
		$(this).each(function() {
			var speed = _speed || "fast";
			if ($(this).data("cssobj")) {
				$($(this).data("cssobj")).remove();
			}
			$(this).hide();
			var divselect = $("<div></div>").insertAfter(this).addClass("tag_select");
			$(this).data("cssobj", divselect);
			var divoptions = $("<ul></ul>").insertAfter(divselect).addClass("tag_options").hide("fast");
			divselect.click(function(e) {
				if ($($(document).data("nowselectoptions")).get(0) != $(this).next("ul").get(0)) {
					hideOptions(speed);
				}
				if (!$(this).next("ul").is(":visible")) {
					e.stopPropagation();
					$(document).data("nowselectoptions", $(this).next("ul"));
					showOptions(speed);
				}
			});
			divselect.hover(function() {
				$(this).addClass("tag_select_hover");
			},
			function() {
				$(this).removeClass("tag_select_hover");
			});
			$(this).change(function() {
				$(this).nextAll("ul").children("li:eq(" + $(this)[0].selectedIndex + ")").addClass("open_selected").siblings().removeClass("open_selected");
				$(this).next("div").html($(this).children("option:eq(" + $(this)[0].selectedIndex + ")").text());
			});
			$(this).children("option").each(function(i) {
				var lioption = $("<li></li>").html($(this).text()).attr("title", $(this).attr("title")).appendTo(divoptions);
				if ($(this).attr("selected")) {
					lioption.addClass("open_selected");
					divselect.html($(this).text());
				}
				lioption.data("option", this);
				lioption.click(function() {
					lioption.data("option").selected = true;
					$(lioption.data("option")).trigger("change", true)
				});
				lioption.hover(function() {
					$(this).addClass("open_hover");
				},
				function() {
					$(this).removeClass("open_hover");
				});
			});
		});
	}
})(jQuery);

;(function($){
	$.fn.hcheckbox=function(options){
		$(':checkbox+label',this).each(function(){
			$(this).addClass('checkbox');
            if($(this).prev().is(':disabled')==false){
                if($(this).prev().is(':checked'))
				    $(this).addClass("checked");
            }else{
                $(this).addClass('disabled');
            }
		}).click(function(event){
				if(!$(this).prev().is(':checked')){
				    $(this).addClass("checked");
                    $(this).prev()[0].checked = true;
                }
                else{
                    $(this).removeClass('checked');			
                    $(this).prev()[0].checked = false;
                }
                event.stopPropagation();
			}
		).prev().hide();
	}

    $.fn.hradio = function(options){
        var self = this;
        return $(':radio+label',this).each(function(){
            $(this).addClass('hRadio');
            if($(this).prev().is("checked"))
                $(this).addClass('hRadio_Checked');
        }).click(function(event){
            $(this).siblings().removeClass("hRadio_Checked");
            if(!$(this).prev().is(':checked')){
				$(this).addClass("hRadio_Checked");
                $(this).prev()[0].checked = true;
            }
               
            event.stopPropagation();
        })
        .prev().hide();
    }

})(jQuery)
