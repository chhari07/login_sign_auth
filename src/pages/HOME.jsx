import React, { useState } from 'react';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';
import '../pages/SignUp.css';

import { getAuth } from 'firebase/auth';


const auth = getAuth(app);

const HOME = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert('Signup successful'))
      .catch((err) => console.error(err));

    setEmail('');
    setPassword('');
  };

  const signinUser = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert('Login successful'))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden">
          <div>
          
            <button
              type="button"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              {/* SVG Icon */}
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="pl-2 outline-none border-none"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              {/* SVG Icon */}
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="pl-2 outline-none border-none"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              onClick={signinUser}
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <button
              onClick={createUser}
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HOME;
