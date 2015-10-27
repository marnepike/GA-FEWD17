$(document).ready(function(){
	
	$('#submit').click(compareNumbers);
	
	function compareNumbers(){

		var number1 = $('#a').val();
		var number2 = $('#b').val();

		if (number1 === number2){
			$('#comparison').text('=');
		} else if (number1 > number2){
			$('#comparison').text('>');
		} else if (number1 < number2){
			$('#comparison').text('<');
		} else{
			$('#comparison').text('ERROR!')
		}
	}

});