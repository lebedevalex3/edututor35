import React, { useState, useRef } from 'react';

function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}

function findGCD(numbers) {
  return numbers.reduce(gcd);
}

export default function GCD() {
  const [numbersInput, setNumbersInput] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setNumbersInput(e.target.value);
  };

  const handleClick = () => {
    const numbers = numbersInput
      .split(/[\s,]+/)
      .filter(
        (num) =>
          num.trim() !== '' &&
          !isNaN(num) &&
          Number.isInteger(Number(num)) &&
          num > 0
      )
      .map(Number);

    if (numbers.length > 1) {
      const gcdResult = findGCD(numbers);
      setResult(`НОД(${numbers.join(', ')}) = ${gcdResult}`);
      setNumbersInput('');
      inputRef.current.focus();
    } else {
      setResult(
        'Введите два или более натуральных чисел, разделенных запятыми или пробелами'
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    outline: 'none',
  };

  const buttonStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '8px',
    backgroundColor: '#0078d7',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s',
  };

  const resultStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={numbersInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Введите числа через запятую или пробел"
        style={inputStyle}
        ref={inputRef}
      />
      <button onClick={handleClick} style={buttonStyle}>
        Вычислить НОД
      </button>
      <p style={resultStyle}>{result}</p>
    </div>
  );
}
