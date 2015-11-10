$(document).ready(function(){

	$('.gray, .white, .blue, .yellow').click(function() {
		var buttonClassName = $(this).attr('class');
		$('body').attr('class', buttonClassName);
	});

});


	