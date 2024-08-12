import React, { useState } from 'react';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import '../pages/SignUp.css';

import { getAuth } from 'firebase/auth';
const GoogleProvider =new GoogleAuthProvider();

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
   const signupGoogle=()=>{
    signInWithPopup(auth,GoogleProvider);
  }

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
            <button class="button"  onClick={signupGoogle}   >
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
               <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
               <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                 <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                 <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
              </svg>
                  Continue with Google
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HOME;
