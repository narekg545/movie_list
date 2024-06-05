// pages/CreateMovie.tsx
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Dropzone from '@/components/common/Dropzone';
import FormInput from '@/components/common/FormInput';
import Button from '@/components/common/Button';

const CreateMovie: React.FC = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = () => {
    // Handle submit logic
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    // Handle drop logic
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-full w-full">
        <h1 className="text-4xl font-semibold text-white mb-6">Create a new movie</h1>
        <div className="flex flex-row justify-center items-center w-full max-w-4xl space-x-8">
          <Dropzone onDrop={handleDrop} text="Drop an image here" />
          <div className="w-1/2 flex flex-col space-y-4">
            <FormInput placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <FormInput placeholder="Publishing year" value={year} onChange={(e) => setYear(e.target.value)} />
            <div className="flex justify-between space-x-4">
              <Button label="Cancel" onClick={() => {}} variant="secondary" />
              <Button label="Submit" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateMovie;
