//want to store city name the user enters
//if city is ny, update bkgrnd to ny image, if san fran, update bkrnd to san fran, etc


$(document).ready(function(){
	var city;

	$('#submit-btn').click(changeBackground);

	function changeBackground(event){
		event.preventDefault();
		var city = $('#city-type').val();

		if(city === "New York" || city === "NYC" || city === "New York City"){
			$('body').attr('class', 'nyc');
		}

	}


});