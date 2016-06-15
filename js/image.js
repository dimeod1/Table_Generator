//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
//var $image = $('<div ></div>');

var $image = $("<img>");
//var $caption = $('<p id="imagediv"></p>');

//An image to overlay
$overlay.append($image);

//A caption to overlay
//$overlay.append($caption);

//Add overlay
$("body").append($overlay);

/*
$("#imageGallery a").click(function(event){
event.preventDefault();
 var captionText = $(this).children("overlay").attr("alt");
 $caption.text(captionText);
 // var imageLocation = $(this).attr("href");

});
*/


//Capture the click event on a link to an image
$("#popone a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
  //var captionText = $(this).children("img").attr("alt");
  //$caption.text(captionText);
});
$("#poptwo a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
 // var captionText = $(this).children("img").attr("alt");
  //$caption.text(captionText);
});
$("#popthree a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
  //var captionText = $(this).children("img").attr("alt");
  //$caption.text(captionText);
});
$("#popfour a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
 // var captionText = $(this).children("img").attr("alt");
  //$caption.text(captionText);
});
$("#popfive a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
 // var captionText = $(this).children("img").attr("alt");
  //$caption.text(captionText);
});
$("#popsix a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
 // var captionText = $(this).children("img").attr("alt");
  //$caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});










