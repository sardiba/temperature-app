import { useState } from 'react';
import {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} from '../utils/temperature';

const units = {
  celsius: { name: 'Celsius', unit: '°C' },
  fahrenheit: { name: 'Fahrenheit', unit: '°F' },
};

export const Convert = ({ from }) => {
  const to = from === 'celsius' ? 'fahrenheit' : 'celsius';

  const [result, setResult] = useState();
  const [input, setInput] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;
    setInput(inputValue);
    if (from === 'fahrenheit') {
      setResult(convertFahrenheitToCelsius(inputValue));
    } else {
      setResult(convertCelsiusToFahrenheit(inputValue));
    }
  };

  return (
    <>
      <form
        style={{ display: 'flex', alignItems: 'center', gap: 16 }}
        onSubmit={handleSubmit}
      >
        <label>
          <span>{units[from].name}: </span>
          <input type="number" name="input" />
          <span>{units[from].unit}</span>
        </label>
        <input type="submit" value="Calculate ✨" />
      </form>
      {result != null ? (
        <div style={{ marginTop: 16 }} data-test="output">
          {input} {units[from].unit} equal{' '}
          <strong>
            {result} {units[to].unit}
          </strong>
        </div>
      ) : null}
    </>
  );
};
