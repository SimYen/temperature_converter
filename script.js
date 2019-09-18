console.log("hello script js");

alert("Input temperature in fahrenheit");

var inputHappened = function(currentInput){
  var temp = parseInt( currentInput );
  var celsius = (temp - 32) * 5/9;
  var kelvin = celsius + 273.15;
  var output = Math.floor( celsius ) + " celsius " + Math.floor( kelvin ) + " kelvin" ;
  return output;
};