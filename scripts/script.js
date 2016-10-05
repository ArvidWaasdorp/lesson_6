
$( document ).ready(function() {
 
  //Just show the button
  $('#clickMe').fadeIn (3000);
  $('#boxes').slideDown (3000);


  //Action what happends when the button is loaded
  $('button').click(function(){

    var random; //A random number to initiate a animation
    random = Math.floor(Math.random() * 7);


    if (!$('#boxes').is(':visible')) {
      alert ("It is not possible to use this page when the boxes are hidden. Let me show them to continue....");
        
      $('#boxes').show (1500);
    } else {

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
          fadeText();
          break;
        case 4:
          slideImage();
          break;
        case 5:
          changeColor();
          break;
        case 6:
          hideBoxes();
          break;
        default:
          break;   

      }

    }
  });

  //case 2
  $('#dFont').click(function(){
    increaseFont();
  });

  //case 3
  $('#dFade').click(function(){
    fadeText();
  });

  // case 5
  $('#dBird').click(function(){
    slideImage();
  });

  //case 6
  $('#dChangeColor').click(function(){
    changeColor();
  });


  //Change the text of the box when mouseOver and change it back when mouseOut
  $('#dChangeText').mouseover(function() {
   
    $('#pChangeText').html ('<a href=\"http://www.urbandictionary.com/define.php?term=resistance%20is%20futile\" target=\"_blank\">Resistance is futile</a>. <br>(Link is not working because the script thinks I leave the box :-( )');

  });
 
  $('#dChangeText').mouseout(function() {

     $('#pChangeText').html ('Hello world!');

  });
  //Change the text of the box when mouseOver and change it back when mouseOut

  //case 7
  $('#dCleanUp').click(function(){
    hideBoxes();
  });

  //Box 7-9
  $('#dAddText').click(function(){

    var txtPrep   = $('<span class="prepended"></span>').text('Prepended text');     // Create with jQuery
    var txtAppend = $('<span class="append"></span>').text('Append text');           // Create with jQuery

     $('#dText').prepend(txtPrep);
     $('#dText').append(txtAppend);

  });

  $('#dDelText').click(function(){
    $(".prepended").remove();
    $(".append").remove();
  });
  //Box 7-9
  
});


function fadeJenny () {

  //reset the CSS styles
  $('#imgJ').finish().css('width', '319px').css('height', '167px');

  //Fade in
  $('#imgJ').fadeIn('300', 0.00, function(){    

    //increase the page
    $(this).animate({
        opacity: '0.0',
        height: '95%',
        width: '95%'
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
  $('#slideToggle').slideToggle('slow');
}

function changeColor() {
  var colors;   //Array of colors
  var random;   //A random number to initiate a animation


  colors = ['#373854', '#493267', '#9e379f', '#e86af0', '#7bb3ff'];
  random = Math.floor(Math.random() * colors.length) - 1;

  $('#dChangeColor').css ('background-color', colors[random]);
  $('#dChangeColor').stop(); 
}

function fadeText() {
  $('#pFade').fadeToggle('slow');
}

function slideImage() {
  $('#iBird').slideToggle('slow');
}

function hideBoxes() {
  $('#boxes').hide (1500);
}