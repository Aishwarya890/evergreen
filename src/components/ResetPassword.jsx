import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-3">Reset your password</h2>
        <p className="text-gray-600 text-base mb-8">
          We will send you an email to reset your password.
        </p>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-semibold py-3 rounded-2xl hover:bg-green-900 transition"
          >
            SUBMIT
          </button>
        </form>

        <p className="mt-6 text-gray-700 text-base">
          Remember your password?{' '}
          <Link to="/login" className="text-green-800 hover:underline font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
