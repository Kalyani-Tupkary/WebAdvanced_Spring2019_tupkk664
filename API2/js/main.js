/*------------------------------------------------*/
// Web App
// We'll work with Spotify API that returns album thumbnails based on the search keyword.
/*------------------------------------------------*/


//https://developer.spotify.com/console/get-search-item/?q=tania%20bowra&type=artist&market=&limit=&offset=
//https://developer.spotify.com/documentation/general/guides/authorization-guide/


var app = app || {};
// What we're doing is checking if some other JS file
// has already created an app object.
// If so, we'll work with it (var app = app) and add properties to it.
// If not, let's create an empty one (var app = {});


app.main = (function(){

//All the events go here
var attachEvent = function(){
	console.log('Attaching events');

	$('#search-button').off('click').on('click',function(){

		loadData($('#search-box').val());


	});

	$('#search-box').keypress(function(e){
		// e.preventDefault();

		//13 is the numeric value of enter

		if(e.keyCode == 13){

			loadData($('#search-box').val());

		}
	});
};

	var loadData = function(query){

		console.log('Searching for' + query + '...');


		$.ajax({
			url:'https://api.spotify.com/v1/search',

			data: {
				q:query,
				type:'artist,track,album',
				limit:50,
				offset:10,
				access_token:'BQCNu-su_IZQSrzhaJS2Duexh9JzNz-Lmq3WX8PSWKnfYSFREwKFQOrTf7By_-2bVwN6eixeZnRMfWWcxmwqmako3u8DaU-JcG4g4ZTa7BZ0jLU42_bR-FN7lYpnoqRtKIhHOZY38k_hKgPJL2jzHba6RJ80-uMOZg'
			},

			success: function(response){

				var results = response.albums.items;

				appendData(results);

			}

		});

	}

//This functions is going to allow me to display the data
	var appendData = function(data){

		console.log(data);
    $('#view').empty();
    for (var i=0; i<data.length; i++){
      $('#view').append('<img src="' + data[i].images[1].url + '"class= "gallery-item"/>');

    }

	}





//Explain better why init is the standard used
var myVar = function(){
	console.log('Initializing app');

	attachEvent();

};

return{
	init:myVar
};

})();

window.addEventListener('DOMContentLoaded', app.main.init);
