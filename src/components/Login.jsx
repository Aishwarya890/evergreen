import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-xl text-center"> {/* Wider container */}
        <h2 className="text-4xl font-bold text-green-900 mb-5">Login</h2> {/* Bigger heading */}
        <p className="text-lg text-gray-600 mb-8">Please enter your e-mail and password:</p>

        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-green-200 rounded-lg px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-green-200 rounded-lg px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <Link
              to="/forgot-password"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-green-800 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-semibold py-4 rounded-lg hover:bg-green-900 transition text-lg"
          >
            LOGIN
          </button>
        </form>

        <p className="mt-8 text-base text-gray-700">
          Don't have an account?{' '}
          <Link to="/register" className="text-green-800 hover:underline font-medium">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
