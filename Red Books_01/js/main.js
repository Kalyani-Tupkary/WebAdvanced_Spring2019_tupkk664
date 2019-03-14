
var app = app || {};

app.main = (function() {

	var students = [];

	function attachEvents() {

		$('.filters button.abt').click(function(e){
			e.preventDefault();

			window.location.hash = '#about';

		});

	}



	function loadData(){

		$.getJSON("books.json", function(data){

			students = data;

			generateAllbooksHTML(students);

			$(window).trigger('hashchange');


		});
	}


	function generateAllbooksHTML(data){

		var list = $('.all-books .books-list');

		var source = $("#books-template").html();

		var template = Handlebars.compile(source);

		list.append(template(data));

	}

function render(url) {

		var temp = url.split('/')[0];

		$('.main-content .page').removeClass('visible');

		var map = {
			//this is the landing page

			'': function(){

				$('.main-content .all-books').addClass('visible');
				console.log('load books');
			},

			'#about': function(){
				renderAboutPage();
			}
     };


			map[temp]();

		// if(map[temp]){
		// 	map[temp]();
		//


	}



	// These are my pages!!!

	function renderAboutPage(){
		var page = $('.about');
		page.addClass('visible');
	}




	var init = function(){
		console.log('Initializing app.');


		attachEvents();

		loadData();
      $(window).on('hashchange', function(){
			render(decodeURI(window.location.hash));
		}).trigger('hashchange');

	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);


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

//


var app = app || {};

app.main = (function() {

	var students = [];

	function attachEvents() {

		$('.filters button.abt').click(function(e){
			e.preventDefault();

			window.location.hash = '#about';

		});

	}



	function loadData(){

		$.getJSON("books.json", function(data){

			students = data;

			generateAllstudentsHTML(students);

			$(window).trigger('hashchange');


		});
	}


	function generateAllstudentsHTML(data){

		var list = $('.all-books .books-list');

		var source = $("#books-template").html();

		var template = Handlebars.compile(source);

		list.append(template(data));

	}





	function render(url) {

		var temp = url.split('/')[0];

		$('.main-content .page').removeClass('visible');

		var map = {
			//this is the landing page

			'': function(){

				$('.main-content .all-books').addClass('visible');
				console.log('load students');
			},

			'#about': function(){
				renderAboutPage();
			}


		};


			map[temp]();

		// if(map[temp]){
		// 	map[temp]();
		//


	}



	// These are my pages!!!

	function renderAboutPage(){
		var page = $('.about');
		page.addClass('visible');
	}




	var init = function(){
		console.log('Initializing app.');


		attachEvents();

		loadData();



		$(window).on('hashchange', function(){
			render(decodeURI(window.location.hash));
		}).trigger('hashchange');

	};




	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);
