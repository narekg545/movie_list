import React from 'react';

interface FormInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 bg-dark rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
};

export default FormInput;
