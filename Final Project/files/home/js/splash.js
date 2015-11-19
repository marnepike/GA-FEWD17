$(document).ready(function(){

//showing memmberhsip info on button click
	$('.readMoreButton').click(function(){
		$('.membershipDetails').show();
	});
//hiding membership info on button click
	$('.showLessButton').click(function(){
		$('.membershipDetails').hide();
	});
//showing alert when someone submits membership info
	$('.emailSubscribe').click(function(){
		alert('Thanks for subscribing to our newsletter! Look for your first update soon!');
	});
//showing alert when someone submits email in footer
	$('.joinButton').click(function(){
		alert('Thanks for becoming a member of the North Country Co-Op! See you soon!');
	});

		

});