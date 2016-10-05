
$( document ).ready(function() {
 
  //Just show the button
  $('#clickMe').fadeIn (3000);

  //Action what happends when the button is loaded
  $('button').click(function(){

    var random; //A random number to initiate a animation
    random = Math.floor(Math.random() * 4);

    switch (random) {
      case 0:
        scrollNick();
        break;
      case 1:
        fadeJenny();
        break;
      case 2:
        increaseFont();
        break;
      case 3:
        slideDiv();
        break;
      default:
        break;   

    }

/*
    $('#box1').click(function(){
      background-color: #e5eecc
    });
*/


    //Debug
    console.log ('Random number: ' + random);

  });
});


function fadeJenny () {

  //reset the CSS styles
  $('#imgJ').finish().css('width', '319px').css('height', '167px');

  //Fade in
  $('#imgJ').fadeIn('300', 0.00, function(){    

    //increase the page
    $(this).animate({
        opacity: '0.0',
        height: '90%',
        width: '90%'
    });
    
    $(this).fadeOut('slow');      //Fade out
    $(this).stop();               //Stop the animation

  });
}

function scrollNick () {
  var newTop;   //
  newTop = Math.floor(Math.random() * 60) + '%';

  //reset the CSS styles and set the new height of the image
  $('#imgN').finish().css('width', '478px').css('marginLeft', '0px').css('top', newTop).css('float', 'left').css('left', '0px');

  //Fade in
  $('#imgN').fadeIn('300', 0.00, function(){

    //moves right
    $(this).animate({
      marginLeft : '100%', 
      width: '0'
    }, 'slow');
    
    $(this).stop();               //Stop the animation
  });
}

function increaseFont () {
  if ($('#pFont').css('fontSize') === '14px')
  {
    $('#pFont').animate({fontSize: '20px'}, 'slow');
  } else {
    $('#pFont').animate({fontSize: '14px'}, 'slow');
  }
}

function slideDiv () {
  $("#slideToggle").slideToggle("slow");
}