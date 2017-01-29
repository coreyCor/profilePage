
// facebook
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],
      p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){
      js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}
      (document, 'script', 'twitter-wjs');

// twitter

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
 
var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 33.6585256, lng: -117.9426458}
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 33.6585256, lng: -117.9426458}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}



$(document).ready (function(){
  //works
for(var i = 0; i < works.length; ++i){
$("#work").append("<div class='col-md-4 col-xs-12'>\
  <a href='#work2-section' class='work-img'>\
   <img class='img-responsive' src= '" + works[i].pic + "'>\
   <span class='info'><p class='proj-title'>Title:</p>'" + works[i].title + "'\
   <p class='url'>'"+ works[i].url +"'</p></span>\
  </a>\
</div>\
");                                     





  $(".work-img").mouseenter( function() {
   $(".info", this).show();
   $(".work-img").mouseleave( function(){
   $(".info", this).hide();
   })
  });


var images = $("#work img");
 if(i%2===0){
  $(images[i]).css("border", "2px solid orange");
 }else{
  $(images[i]).css("border", "2px solid #000000");
  }
 }

  //smooothScroll
  var $root = $('html, body');
$('.navbar-nav a').click(function() {
  var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 800, function () {
      window.location.hash = href;
      });
      return false;
 });

  //steller
 $.stellar();

  // tooltips


$(function () {
    $('#tooltip1').tooltip();
       });
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
       });
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
       });
$(function () {
      $("#hugotooltip").tooltip();
       });
});

/*
// end of tool tips 
// form stuff
$("textarea").on("keyup", function(){
//console.log("Itt just happend");
  var charCount = $("textarea").val().length;
  console.log(charCount);
$("#charCount").html("You pressed " + charCount + " buttons" ) 
if(charCount == " "){
  $("textarea").css("border", "4px solid red");
}else{ 
  $("textarea").css("border", "1px solid #eea236");
}if(charCount > 50){
  $("#charCount").css("color", "red");
}else{
  $("#charCount").css("color", "black");
  }
}); 
$("textarea").css("background-color", "lightgrey");
// button click n console.log
$("#bottom-submit-button").on("click", function() {
  var comment = $("textarea").val().toUpperCase();
    $("#visable-comment").html(comment);
   //  console.log(comment);
    $("textarea").hide();
  var emailName = $("#emailform").val();
    $("#visable-comment1").html(emailName);
    $("#emailform").hide();
  var name =$("#nameform").val().toUpperCase();
    $("#visable-comment2").html(name);
    $("#nameform").hide();
    $("#bottom-submit-button").hide();
  return false;
   });
});
    
  
*/


    


