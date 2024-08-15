import React, { useState, useRef } from 'react';

function findDivisors(number) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisors.push(i);
      if (i !== number / i) {
        divisors.push(number / i);
      }
    }
  }
  return divisors.sort((a, b) => a - b);
}

export default function Divisors() {
  const [numberInput, setNumberInput] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setNumberInput(e.target.value);
  };

  const handleClick = () => {
    const number = parseInt(numberInput, 10);
    if (!isNaN(number) && number > 0) {
      const divisors = findDivisors(number);
      setResult(`Делители числа ${number}: ${divisors.join(', ')}`);
      setNumberInput('');
      inputRef.current.focus();
    } else {
      setResult('Введите натуральное число');
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
        value={numberInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Введите число"
        style={inputStyle}
        ref={inputRef}
      />
      <button onClick={handleClick} style={buttonStyle}>
        Найти делители
      </button>
      <p style={resultStyle}>{result}</p>
    </div>
  );
}
