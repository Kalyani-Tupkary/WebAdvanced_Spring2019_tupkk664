//whatever is written in this gets loaded
window.addEventListener('DOMContentLoaded', function(e){
  e.preventDefault(); //erases the previous content the page may have

  console.log("JS Connected");

  scrollEvent();

  //create variable to store the position of different elements

  /*window.addEventListener('scroll', function(){
    var scrollPos = (window.pageYOffset!=undefined)?window.pageYOffset:
    (document.documentElement || document.body.parentNode || document.body).scrollPos;
    console.log(scrollPos);
  }); */

  var navOffset = $("body").offset().top;
  //distance from the top of the page to te top of the documentElement
  //("body") or (#first/ second) gives the position of the id shown
  console.log(navOffset);
//this is equal to window.addEventListener
$(window).scroll(function(){
  var scrollPos = $(window).scrollTop(); //triggers the function when we scroll
  //console.log(scrollPos); // measures the distance from the top

  //var stickNav = $("nav"); //getElementsbyTagName - looks for Nav- a tag
  //if you were looking for a class it would ("#classname")
  var stickNav = $("nav");
 scrollMenu(stickNav);

 var stickMenu = $(".menubar");
 scrollMenu(stickMenu);

  function scrollMenu(banana){
    if(scrollPos >= navOffset){

      banana.addClass("fixed");
    }
    else {
      banana.removeClass("fixed");
     }
    }
    //makes the text appear/ disappear
    var firstOff = $('#first').offset().top- 50;
    var secondOff = $('#second').offset().top- 50;
    var thirdOff = $('#third').offset().top- 50;
    var fourthOff = $('#fourth').offset().top- 50;
    var fifthOff = $('#fifth').offset().top- 50;

    if (scrollPos >= firstOff){
      $('.t1').addClass('appear');
    } else {
      $('.t1').removeClass('appear');
    }
    if (scrollPos >= secondOff){
      $('.t2').addClass('appear');
    } else {
      $('.t2').removeClass('appear');
    }

  });
});



function scrollEvent(){
  //it knows- looking for 'a' tag inside li insude nav
  $('nav li a').click(function(){

    var myTarget = $(this.hash);
    //myTarget = myTarget.length && myTarget;

    var targetOffset = myTarget.offset().top;
    $('html, body').animate({scrollTop : targetOffset}, 1000);
    //used an temp value its not an argument - this means any reference
    //whatever is after the 'hashtag'replace it with 'this'
    //1000 - milliseconds - current position to targetoffset


  });
}
