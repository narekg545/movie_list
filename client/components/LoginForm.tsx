'use client'
import React, { useState } from 'react';
import { useLoginMutation } from '@/movie-store/services/sessionApi';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [login] = useLoginMutation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login({ email, password })
      .unwrap()
      .then((res) => {
        toast.success('Login Successfully');
        router.push('/MovieList');
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg p-8">
        <h1 className="text-white text-4xl mb-8 text-center">Sign in</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-input-color text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-input-color text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-white">Remember me</label>
          </div>
          <button type="submit" className="w-full py-2 px-4 rounded-md bg-primary text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
