import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
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