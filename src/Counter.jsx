import React, { useState } from 'react';
import Props from "./Props";





const Counter = () => {
  const [number, setNumber] = useState(0);
  const [showProps, setShowProps] = useState(false);
  

  const goToProps=()=>{

  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  };

  const headingStyle = {
    fontSize: '4rem',
    margin: '0',
    color: '#333',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  };

  const buttonStyle = {
    fontSize: '1.5rem',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    transition: 'background-color 0.3s',
  };

  const buttonStyleDecrement = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>{number}</h1>
      <div style={buttonContainerStyle}>
        <button
          style={buttonStyleDecrement}
          onClick={() => setNumber(number - 1)}
        >
          -
        </button>
        <button
          style={buttonStyle}
          onClick={() => setNumber(number + 1)}
        >
          +
        </button>
      </div>
     <Props no={number} />
     <button onClick={goToProps}>Props</button>
    </div>
  );
};

export default Counter;
