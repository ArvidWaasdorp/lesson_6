
$( document ).ready(function() {
 
  var random;     //A random number to initiate a animation

  //Just show the button
  $("#clickMe").fadeIn (3000);



  $("button").click(function(){

//   fadeJenny();
      
  $('#imgN').finish().css('width', '319px').css('left', '0');
    $("#imgN").fadeIn("300", 0.00, function(){

      $(this).animate({
        marginLeft : "100%", //moves right
        width: '0'
      });


    });

  });
});


function fadeJenny () {
  $('#imgJ').finish().css('width', '319px').css('height', '167px');
  $("#imgJ").fadeIn("300", 0.00, function(){ //fade

      $(this).animate({
          opacity: '0.0',
          height: '90%',
          width: '90%'
      });

    $(this).fadeToggle("slow");
    $(this).stop();
  });
}