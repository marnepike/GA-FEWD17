$(document).ready(function(){
//storing the total value
	var total = 0;
//setting up listeners to check for button clicks/do math
	$('#zero').click(setTotalToZero);
	$('#add5').click(addFive);
	$('#add10').click(addTen);
	$('#sub1').click(subOne);
//functions
	function printTotalResult(){
		$('#result').text(total);
	}
	function setTotalToZero(){
		total = 0;
		//$('#result').text(total);
		printTotalResult();
	}
	function addFive(){
		total = total + 5;
		//$('#result').text(total);
		printTotalResult();
	}
	function addTen(){
		total = total + 10;
		//$('#result').text(total);
		printTotalResult();
	}
	function subOne(){
		total = total - 1;
		//$('#result').text(total);
		printTotalResult();
	}
	

});

