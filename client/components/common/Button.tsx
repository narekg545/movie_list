import React from 'react';

const Button = ({ label, onClick, variant = 'primary' } : any) => {
  const classNames = variant === 'primary'
    ? 'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
    : 'bg-transparent hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border border-white';
  return (
    <button onClick={onClick} className={classNames}>
      {label}
    </button>
  );
};

export default Button;