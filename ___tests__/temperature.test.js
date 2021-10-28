import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} from "../utils/temperature";

describe("convertCelsiusToFahrenheit", () => {
  it("converts 100°C correctly", () => {
    expect(convertCelsiusToFahrenheit(100)).toEqual(212);
  });

  // TODO: create a second test that checks if
  // convertCelsiusToFahrenheit converts 0°C correctly to 32
  it("convert 0°C correctly", () => {
    expect(convertCelsiusToFahrenheit(0)).toEqual(32);
  });
});

// TODO: create a second describe block with two tests
// for convertFahrenheitToCelsius
describe("convertFahrenheitToCelsius", () => {
  it("converts 100°F correctly", () => {
    expect(convertFahrenheitToCelsius(100)).toEqual(37.77777777777778);
  });
  it("converts 0°F correctly", () => {
    expect(convertFahrenheitToCelsius(0)).toEqual(-17.77777777777778);
  });
});
