//listen for clikc
//when user clicks forward button move forward 1 image
//when user clicks backwards move backward 1 image
//need to know what the current picture is, and the order of the images

//listening for the document ready has the "Ready" event - so when the browswer has loaded everything. only happens once at the end of the page load
$(document).ready(function(){

//figuring out what I need to store & keep track of = variables
	var animals = ['animal1.jpg', 'animal2.jpg', 'animal3.jpg', 'animal4.jpg', 'animal5.jpg', 'animal6.jpg', 'animal7.jpg'];

	var i = 0;

	var lastIndexOfArray = animals.length - 1;
//figuring out the events that require action/I need to listen to = events

	$('#next').click(goToNextAnimal);
	$('#back').click(goToPreviousAnimal);

//figuring out how the page should react = define functions/recations
	//next
	function goToNextAnimal(){
		//i = i + 1;
		if (i === animals.length - 1){
			i = 0;
		} else {
			i++;
		}
		 
		var nextAnimal = animals[i];
		//change img src in html to change the image
		$('#image-to-vote-on').attr('src', 'images/' + nextAnimal);
	}
	//back
	function goToPreviousAnimal(){
		//i = i - 1;
		if (i === 0){
			i = lastIndexOfArray;
		} else {
			i--;
		}
		
		var previousAnimal = animals[i];
		//change img src in html to change the image
		$('#image-to-vote-on').attr('src', 'images/' + previousAnimal);

	}




});