//doc ready
$(document).ready(function(){
    //storing the city names as an array so we can use them in the dropdown
    var city = ["NYC", "SF", "LA", "ATX", "SYD"];

    var i;

    var cityClass;

//displaying array in dropdown using for loop

    for (i = 0; i<city.length; i++) {
        $('#city-type').append('<option>'+city[i]+'</option>');
        
    };

//what the page is listening for
    $('select').change(changeBackgroundPic);

//when user selects city, change the background image -- a function within this 1st changeBackgroundPic function
    function changeBackgroundPic(){
        //creating an array for the classes so we can add it to the html?
        cityClass = ['nyc', 'sf', 'la', 'austin', 'sydney'];
        
        
        $('#city-type').change(cityChoice);

            function cityChoice (){

                //$('option').val(cityclass[i]); 
                //$('option').attr('class', cityClass[i]);
                //$('option').addClass(cityClass[i]);
                $('option').append('<option ' + 'class=' + cityClass + '>' + cityChoice + '</option>');
            }

            //how do i add the class?


    }




});



/* 
//Function To List out Cities in Second Select tags
function city(arr){
$("#city").empty();//To reset cities
$("#city").append("<option>--Select--</option>");
$(arr).each(function(i){//to list cities
$("#city").append("<option value=""+arr[i].value+"">"+arr[i].display+"</option>")
});
}
*/











