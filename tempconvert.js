const convertToCelsius = function (f) {
  f2 = f - 32;
  let celcius = (f2 * 5) / 9;
  let roundedCelcius = Math.round(celcius * 10) / 10;
  return roundedCelcius;
};

const convertToFahrenheit = function (c) {
  let fahrenheit = (c / 5) * 9 + 32;
  let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

function runConvertCelcius() {
  let enteredCelcius = document.getElementById("celciusInput").value;
  console.log(enteredCelcius);
  let convertedCelcius = convertToFahrenheit(enteredCelcius);
  console.log(convertedCelcius);
  let resultContainer = document.getElementById("fahrenheitResult");
  resultContainer.innerHTML = convertedCelcius;
}
