//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready(function() {

	// code goes here!
	
	function clearLights () {
		$('.bulb').css('background', 'black')
	}

	function illuminateStoplightRed() {
		clearLights();
		$('#stopLight').css ('background', 'red');
	}

	$('#stopButton').click(illuminateStoplightRed);

	function illuminateSlowlightYellow() {
		clearLights();
		$('#slowLight').css ('background', 'orange');
	}

	$('#slowButton').click(illuminateSlowlightYellow);

	function illuminateGolightGreen() {
		clearLights();
		$('#goLight').css ('background', 'green');
	}

	$('#goButton').click(illuminateGolightGreen);

	
});