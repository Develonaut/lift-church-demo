$(document).ready(function() {

$('.hotspot').hover( function() { 
		$(this).next().children("img").removeClass('grayscale'); 
	},
       function(){ 
       	$(this).next().children("img").addClass('grayscale'); 
       }
);

});
