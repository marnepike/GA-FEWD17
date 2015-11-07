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
    $('option').click(changeBackgroundPic);

//when user selects city, change the background image -- a function within this 1st changeBackgroundPic function
    function changeBackgroundPic(){
        //creating an array for the classes so we can add it to the html?
        cityClass = ['nyc', 'sf', 'la', 'austin', 'sydney'];
        
        
        $('#city-type').change(cityChoice);

            function cityChoice (){
                for (i=0; i<cityClass.lenth; i++){

                     if (('option').val()===city[i]){
                     $('body').attr('class', cityClass[i]);

                    } else { 
                     $('body').css('background', 'url(../images/citipix_skyline.jpg) no-repeat center center fixed');
                     }

                }
            }
            
    



    }







});















