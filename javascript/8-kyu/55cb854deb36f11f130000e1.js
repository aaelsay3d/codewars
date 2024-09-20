function weatherInfo (temp) {
  let c = convertToCelsius(temp)
  if (c < 0) {
    return (c + " is freezing temperature");
  } return (c + " is above freezing temperature");
}

function convertToCelsius (temperature) {
  let celsius = (temperature - 32)  * (5/9);
  return celsius;
}
