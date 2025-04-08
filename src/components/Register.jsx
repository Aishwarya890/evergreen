import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-md text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-3">Register</h2>
        <p className="text-gray-600 text-lg mb-8">Please enter your details</p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="First Name*"
            className="w-full border border-green-900 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-semibold py-3 rounded-2xl hover:bg-green-900 transition"
          >
            CREATE AN ACCOUNT
          </button>
        </form>

        <p className="mt-6 text-gray-700 text-base">
          Have an account?{' '}
          <Link to="/login" className="text-green-800 hover:underline font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
