import React, { useState, useRef } from 'react';
import Latex from 'react-latex';

function primeFactors(num) {
  const factors = [];
  let divisor = 2;

  while (num >= 2) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

export default function PrimeFactors() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleClick = () => {
    if (
      number.trim() !== '' &&
      !isNaN(number) &&
      Number.isInteger(Number(number)) &&
      number > 0
    ) {
      const factors = primeFactors(Number(number));
      setResult(`$${number} = ${factors.join('\\cdot ')}$`);
      setNumber('');
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
        Разложить на множители
      </button>
      <p style={resultStyle}>
        {result.startsWith('$') ? <Latex>{result}</Latex> : result}
      </p>
    </div>
  );
}
