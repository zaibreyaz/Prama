import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const registerUser = () => {
    axios
      .post("http://127.0.0.1:5000/signup", {
        email: email,
        password: password,
        phone_number: phoneNumber,
      })
      .then(function (response) {
        console.log(response);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error, "error");
        if (error.response && error.response.status === 409) {
          alert("Email already exists");
        } else {
          alert("Registration failed");
        }
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center gap-y-4 px-10">
        <div className=" flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-4xl text-primaryText font-montserrat">Pramā</h2>
          <p className="text-center text-secondaryText">
            “Education is the most powerful weapon which you can use <br /> to
            change the world.” -- <em> Dr. APJ Abdul Kalam</em>
          </p>
        </div>

        <div className="relative  p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
          <div className="relative">
            <h2 className="text-primaryText text-center  text-3xl font-montserrat">
              Sign Up
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-secondaryText mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-highlight text-primaryText"
                  placeholder="Enter a valid email address"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-secondaryText mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg text-primaryText focus:outline-none focus:ring-2 bg-background focus:ring-highlight"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-secondaryText mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg text-primaryText focus:outline-none focus:ring-2 bg-background focus:ring-highlight"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={registerUser}
                  className="w-full bg-accent text-white py-2 rounded-lg hover:bg-highlight focus:outline-none  focus:ring-highlight"
                >
                  Sign Up
                </button>
              </div>
              <p className="mt-4 text-center text-secondaryText">
                Already have an account?{" "}
                <a href="/" className="text-blue-500 hover:underline">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
