//doc ready
$(document).ready(function(){
    //storing the city names as an array so we can use them in the dropdown
    var city = ["NYC", "SF", "LA", "ATX", "SYD"];

    var i;
      //creating an array for the classes so we can add it to the html?
    var cityClass = ['nyc', 'sf', 'la', 'austin', 'sydney'];

//displaying array in dropdown using for loop

    for (i = 0; i<city.length; i++) {
        $('#city-type').append('<option value=' + cityClass[i] +'>'+city[i]+'</option>');
        
    };

//what the page is listening for
    $('select').change(changeBackgroundPic);

//when user selects city, change the background image -- a function within this 1st changeBackgroundPic function
    function changeBackgroundPic(){  
        //finding the selected values, and assigning it to a variable so i can use it for chaning
        var selectedValue = $('select').val();
        //get rid of any class assigned from the below
        $('body').removeClass();
        //use selectedValueto change body class
        $('body').addClass(selectedValue);

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











