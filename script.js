console.log("hello script js");

alert("Input temperature in fahrenheit");

//Part 1
var inputHappened = function(currentInput){
  var temp = Number(currentInput);
  console.log(temp);
  if ( Number.isNaN(temp) ) {
    var output = "Please enter a number";
    return output;
    } else {
    var celsius = (temp - 32) * 5/9;
    var kelvin = celsius + 273.15;
    var output = celsius.toFixed(2) + " celsius " + kelvin.toFixed(2) + " kelvin" ;
    return output;
    }
};

/*
var inputHappened = function(currentInput) {
  var temp = parseInt( currentInput );
  alert("Is temperature fahrenheit, celsius, or kelvin?");
  var inputHappened = function(currentInput)
}
*/