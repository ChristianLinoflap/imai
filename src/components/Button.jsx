// Button.js
import React from 'react';
export const styles = {
    button: {
      backgroundColor: '#3b97ed',
      border: 'none',
      color: 'white',
      padding: '5px 25px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '14px',
      margin: '10px 5px',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    reports: {
      backgroundColor: '#aacff0',
      border: 'none',
      color: 'white',
      padding: '25px 25px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '18px',
      margin: '10px 5px',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    edit: {
      backgroundColor: '#3b97ed',
      border: 'none',
      color: 'white',
      padding: '5px 25px',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '14px',
      position: 'absolute',
      right: '50px',
      margin: '20px',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    button2: {
        backgroundColor: '#ffffff',
        border: '1px solid grey',
        color: 'black',
        padding: '5px 15px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        margin: '10px 5px',
        cursor: 'pointer',
        borderRadius: '5px',
      },
    normal: {
      border: 'none',
      backgroundColor: '#ffffff',
      color: '#66aff0',
      padding: '5px 15px',
      textAlign: 'center',
      alignItems: 'center',
      fontSize: '14px',
      margin: '10px 5px',
      cursor: 'pointer',
    },
  };
  
const Button = ({ onClick, title,buttonStyle,icon  }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
    {icon && <span style={{ marginRight: '5px',}}>{icon}</span>}{title}
    </button>
  );
};



export default Button;
