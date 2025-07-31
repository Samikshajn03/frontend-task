import React, { useState } from 'react';
import "../src/app/globals.css";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email, // ✅ send email here, not username
      password,
    });

    if (res?.ok) {
      // ✅ fetch session to access dummy token
      const sessionRes = await fetch('/api/auth/session');
      const session = await sessionRes.json();

      // ✅ store dummy token in sessionStorage
      sessionStorage.setItem('token', session.token);

      // ✅ redirect to dashboard
      router.push('/Dashboard');
    } else {
      
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Login Form */}
    <div className="w-1/2 flex flex-col justify-between bg-white p-16">
  {/* Centered Form Container */}
  <div className="flex flex-col items-start justify-center flex-grow">
    <h1 className="text-2xl font-bold mb-10 text-gray-900 text-left">Welcome back</h1>

    <form onSubmit={handleSubmit} className="w-full max-w" noValidate>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600 text-black"
          required
        />
      </div>

      <div className="mb-8">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder=".........."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700 text-black"
          required
        />
      </div>

      <div className="mb-4 flex items-center">
        <input
          id="remember"
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Sign in
      </button>
    </form>
  </div>

  {/* Footer */}
  <p className="text-center text-sm text-gray-500 mt-8 w-full">© 2024 YourCompany</p>
</div>
 


      {/* Right Side - Blue Background with Text */}
      <div className="w-1/2 bg-blue-700 flex items-center justify-center p-16">
        <div className="text-white max-w-2xl ">
          <h2 className="text-4xl font-bold mb-4">ticktock</h2>
          <p className="text-lg">
           Introducing ticktock, our cutting-edge timesheet web application designed to revolutionize how you manage employee work hours. With ticktock, you can effortlessly track and monitor employee attendance and productivity from anywhere, anytime, using any internet-connected device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;