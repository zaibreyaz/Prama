import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-12 text-center">
          <h1>Welcome to Learn With AI</h1>
          <p>Enhance your learning experience with AI-powered tools.</p>
          <Link to="/" className="btn btn-primary m-2">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary m-2">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
