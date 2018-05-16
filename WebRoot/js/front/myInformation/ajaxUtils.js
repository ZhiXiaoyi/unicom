AjaxUtils = function() {

	var AjaxUtils = {
		
		/**
		 * send ajax request with the feedback json data type
		 */
		sendAjax: function(postUrl, postData, callback, callbackError) {
			$.ajax({
				type: "POST",
				url: postUrl, 
			   	cache: false,
			   	dataType: "json",
			   	data: postData, 
			   	success: callback,
			   	error: callbackError
			});
		},
		
		sendAjaxJson: function(postUrl, postData, callback, callbackError) {
			$.ajax({
				type: "POST",
				url: postUrl, 
			   	cache: false,
			   	data: postData, 
			   	dataType: "json",
			   	success: callback,
			   	error: callbackError
			});
		}
	};
	return AjaxUtils;
}();