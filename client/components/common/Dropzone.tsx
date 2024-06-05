import React from 'react';

interface DropzoneProps {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  text: string;
}

const Dropzone: React.FC<DropzoneProps> = ({ onDrop, text }) => {
  return (
    <div
      className="w-1/2 flex flex-col items-center border-2 border-dashed border-gray-400 rounded-md p-4 h-64"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <svg className="h-16 w-16 text-gray-500 mb-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4h4a2 2 0 012 2v8a2 2 0 01-2 2H7z" />
      </svg>
      <p className="text-gray-400">{text}</p>
    </div>
  );
};

export default Dropzone;
