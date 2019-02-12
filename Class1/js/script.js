console.log("My JS");

var GreetingContainer="ITS WORKING!!!!";

console.log(GreetingContainer);

// alert('Greetings:' + GreetingContainer);

document.write('<p>'+ GreetingContainer + '</p>');

var attributes = ["red", "Green", "Blue"]

var arrange = document.getElementsByClassName('msg');

for (var i=0; i<arrange.length; i++){
  for (var i = 0; i<attributes.length; i++){
  arrange[i].innerHTML = attributes[i];
  }

}
