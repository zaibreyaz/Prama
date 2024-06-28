import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const logInUser = () => {
    if (email.length === 0) {
      alert("Email has left Blank!");
    } else if (password.length === 0) {
      alert("Password has left Blank!");
    } else {
      axios.post('http://127.0.0.1:5001/login', {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response);
        navigate("/secure");
      })
      .catch(function (error) {
        console.log(error, 'error');
        if (error.response && error.response.status === 401) {
          alert("Invalid credentials");
        } else {
          alert("Login failed");
        }
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center gap-y-4 px-10">

      <div className=" flex flex-col items-center justify-center gap-y-2">
        <h2 className="text-4xl text-primaryText">Prama</h2>
        <p className="text-center text-secondaryText">“Education is the most powerful weapon which you can use <br/> to change the world.”  -- Dr. APJ Abdul Kalam</p>
      </div>

      <div className="relative  p-8 rounded-lg shadow-lg w-full max-w-md">
    <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
    <div className="relative">
        <h2 className="text-2xl font-bold mb-6 text-center text-primaryText">Log In</h2>
        <form>
            <div className="mb-4">
                <label htmlFor="email" className="block text-secondaryText mb-2">Email address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter a valid email address"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-secondaryText mb-2">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-background focus:ring-blue-500"
                    placeholder="Enter password"
                />
            </div>
            <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox"
                    />
                    <span className="ml-2 text-secondaryText">Remember me</span>
                </label>
                <a href="#!" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <div className="text-center">
                <button
                    type="button"
                    onClick={logInUser}
                    className="w-full bg-accent text-white py-2 rounded-lg hover:bg-highlight focus:outline-none focus:ring-2 focus:ring-highlight"
                >
                    Login
                </button>
            </div>
            <p className="mt-4 text-center text-secondaryText">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a></p>
        </form>
    </div>
</div>


      </div>
      
    </section>
  );
}
