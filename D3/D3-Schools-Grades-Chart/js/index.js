var app = app || {};
// What we're doing is checking if some other JS file
// has already created an app object.
// If so, we'll work with it (var app = app) and add properties to it.
// If not, let's create an empty one (var app = {});

app.main = (function(){

	console.log('Loading app.');

	var horizontal = ["hLine0","hLine1","hLine2"];
	var vertical = ["vline0","vline1","vline2","vline3","vline4","vline5","vline6"];

function importData (){

	var svg = d3.select("svg"),
	width=svg.attr("width"),
	height = svg.attr("height");

	var link = svg.selectAll(".link"),
	    node = svg.selectAll(".node");

			//load JSON

			d3.json("datatest.json", function(data){

				console.log("JSON is loaded");
				console.log(data.nodes);

				//2 DRAW LINES

				svg.selectAll("line")
				.data(horizontal)
				.enter().append("rect")
				.attr("width", "70vw")
				.attr("height", 0.25)
				.attr("y", function(d, i){return 8.75+i*8.75 + "vw" });


				svg.selectAll("line")
				.data(vertical)
				.enter().append("rect")
				.attr("height", 35+"vw")
				.attr("width", 0.25)
				.attr("x", function(d, i){return 8.75+i*8.75 + "vw" });

				var circleScale = d3.scale.linear()
				                    .domain(d3.extent(data.nodes, function(d){
															return d.n
														}))



			});
}







	var init = function(){
		console.log('Initializing app.');

	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);
