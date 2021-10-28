export const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

export const convertFahrenheitToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8;
};
