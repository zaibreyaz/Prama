import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const registerUser = () => {
    axios.post('http://127.0.0.1:5001/signup', {
      email: email,
      password: password,
      phone_number: phoneNumber
    })
    .then(function (response) {
      console.log(response);
      navigate("/login");
    })
    .catch(function (error) {
      console.log(error, 'error');
      if (error.response && error.response.status === 409) {
        alert("Email already exists");
      } else {
        alert("Registration failed");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a valid email address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="phone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={registerUser}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-4 text-center text-gray-700">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
        </form>
      </div>
    </div>
  );
}
