/**
 * jQuery-Country
 * Version: 1.0
 * Build Date: 2013-04-28
 * Copyright (c) 2013, Charles Ross (https://github.com/charleshross). All rights reserved.
 * License: Private Software
 * Website: https://github.com/charleshross/
 * Prerequisites : jQuery
 */

(function( $ ) {
	$.fn.country = function( options ) {
		
		var that = this;
		 
		// Import Site Settings
		$.ajax({
			url : 'http://api.wipmania.com/jsonp?callback=?',
			dataType: 'jsonp',
			success : function(data) {
				
				country = data.address.country;
				$(that).val(country);
				
			}
		});

	};
})( jQuery );