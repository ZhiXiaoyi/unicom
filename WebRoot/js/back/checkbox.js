$(function() {
			
				 $('input[type="checkbox"]').change(function(e) {
		
		      var checked = $(this).prop("checked"),
		          container = $(this).parent(),
		          siblings = container.siblings();
		
		      container.find('input[type="checkbox"]').prop({
		        indeterminate: false,
		        checked: checked
		      });
		
		      function checkSiblings(el) {
		
		        var parent = el.parent().parent(),
		            all = true;
		
		        el.siblings().each(function() {
		          return all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
		        });
		
		        if (all && checked) {
		
		          parent.children('input[type="checkbox"]').prop({
		            indeterminate: false,
		            checked: checked
		          });
		
		          checkSiblings(parent);
		
		        } else if (all && !checked) {
		
		          parent.children('input[type="checkbox"]').prop("checked", checked);
		          parent.children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
		          if(parent.find('input[type="checkbox"]:checked').length > 0){
		           parent.children('input[type="checkbox"]').prop("checked", false);
		           parent.children('input[type="checkbox"]').prop("indeterminate", false);
		          }
		          checkSiblings(parent);
		
		        } else {
		
		          el.parents("li").children('input[type="checkbox"]').prop({
		            indeterminate: false,
		            checked: true
		          });
		
		        }
		
		      }
		
		      checkSiblings(container);
		    });
		                		
				$('#backid').click(function() {
					window.location.href = "role/topage.action";
				});
			});