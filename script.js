console.log("hello script js");

/*Part 1
alert("Input temperature in fahrenheit");

var inputHappened = function(currentInput){
  var temp = Number(currentInput);
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
*/

//Part 2
alert("Input temperature<space>unit(F, C, or K)");

var inputHappened = function(currentInput) {
  var input = currentInput;
  var result = input.split(" ");
  console.log(result);
  if (result[1].toUpperCase().includes("F")) {
    var celsius = (result[0] - 32) * 5/9;
    var kelvin = celsius + 273.15;
    var output = celsius.toFixed(2) + " celsius " + kelvin.toFixed(2) + " kelvin" ;
    return output;
  } else if (result[1].toUpperCase().includes("C")) {
    var fahrenheit = (result[0] * 9/5) + 32;
    var kelvin = Number(result[0] + 273.15);
    var output = fahrenheit.toFixed(2) + " fahrenheit " + kelvin.toFixed(2) + " kelvin" ;
    return output;
  } else {
    var celsius = result[0] - 273.15;
    var fahrenheit = celsius * 9/5 + 32;
    var output = celsius.toFixed(2) + " celsius " + fahrenheit.toFixed(2) + " fahrenheit" ;
    return output;
  }
}