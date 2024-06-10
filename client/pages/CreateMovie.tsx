// pages/CreateMovie.tsx
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Dropzone from '@/components/common/Dropzone';
import FormInput from '@/components/common/FormInput';
import Button from '@/components/common/Button';
import toast from 'react-hot-toast';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { BASE_API_URL } from '@/config/apiConfig';
import { useRouter } from 'next/router';

const CreateMovie: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] : any = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  } as any);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Image: :' , image)
    try {
      const response = await axios.post(`${BASE_API_URL}/movie`, { title, publishYear: year, poster: image, userId: 'e56b75fa-6ae3-47ba-b9b2-575704b16886' }, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Movie Added Successfully');
    } catch (error : any) {
      toast.error(error);
    }
  };

  const handleCancel = () => {
    router.push('/MovieList');
  };
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-full w-full pt-[100px]">
        <h1 className="text-4xl font-semibold text-white mb-6">Create a new movie</h1>
        <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center w-full max-w-4xl space-x-8">
          <div
            {...getRootProps({ className: 'dropzone' })}
            className="border-dashed border-2 border-gray-300 flex justify-center items-center w-1/2 h-64 cursor-pointer"
          >
            <input {...getInputProps()} />
            {image ? (
              <img src={URL.createObjectURL(image)} alt="Preview" className="h-full w-full object-cover" />
            ) : (
              <p>Drop an image here or click to upload</p>
            )}
          </div>
          <div className="w-1/2 flex flex-col space-y-4">
            <FormInput placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <FormInput placeholder="Publishing year" value={year} onChange={(e) => setYear(e.target.value)} />
            <div className="flex justify-between space-x-4">
              <Button type="button" label="Cancel" onClick={handleCancel} variant="secondary" />
              <Button type="submit" label="Submit" />
            </div>
          </div>
        </form>
      </div>
    </Layout>

  );
};

export default CreateMovie;
