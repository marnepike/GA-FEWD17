$(document).ready(function() {
//1st attempt
/*function ShowParagraph() {
		$('.hide').slideDown();
		$('.readmore').hide();
		$('.readless hide').show();
	}

	$('.readmore').click(ShowParagraph);

*/
//2nd attempt
/*
$('.readmore').click(function(){ 
    $('#ShowThisOnClick').slideDown();
    $('p .readmore').show('hide');
    $('readless').show();

  });
*/

//3rd attempt
//READMORE BUTTON 1
$('.readmore').click(function(){ 
    $('#ShowThisOnClick').slideDown();
    $('.readmore').hide();
    $('.readless').show();
  });
//READLESS Button not working
$('.readless').click(function(){ 
    $('#ShowThisOnClick').slideUp();
    $('.readmore').show();
    $('.readless').hide();
  });
//READMORE 2
$('.readmore2').click(function(){ 
    $('#ShowThisOnClick2').slideDown();
    $('.readmore2').hide();
    $('.readless2').show();
  });
//READLESS 2
$('.readless2').click(function(){ 
    $('#ShowThisOnClick2').slideUp();
    $('.readmore2').show();
    $('.readless2').hide();
  });
//Sidebar
$('.learnmore').click(function(){ 
    $('#learnmoretext').slideDown();
    $('.learnmore').hide()
  });

});








