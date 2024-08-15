import React, { useState, useRef } from 'react';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}

export default function IsPrime() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleClick = () => {
    if (number.trim() !== '' && !isNaN(number)) {
      let primeResult;
      const parsedNumber = Number(number);
      if (parsedNumber <= 0 || !Number.isInteger(parsedNumber)) {
        primeResult = 'Число должно быть натуральным';
      } else if (parsedNumber === 1) {
        primeResult = '1 - не является ни простым, ни составным числом';
      } else {
        primeResult = isPrime(parsedNumber)
          ? `${number} - простое число`
          : `${number} - составное число`;
      }
      setResult(primeResult);
      setNumber('');
      inputRef.current.focus();
    } else {
      setResult('Введите корректное число');
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
    maxWidth: '300px',
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
        value={number}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Введите число"
        style={inputStyle}
        ref={inputRef}
      />
      <button onClick={handleClick} style={buttonStyle}>
        Результат
      </button>
      <p style={resultStyle}>{result}</p>
    </div>
  );
}
