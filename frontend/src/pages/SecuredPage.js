import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SecuredPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      axios.get('http://127.0.0.1:5001/secure', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .catch(error => {
        console.log(error, 'error');
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      });
    }
  }, [navigate]);

  const handleLogout = () => {
    // Perform any necessary cleanup or logout logic here
    navigate('/login');
  };

  const navigateToTextDisplay = () => {
    navigate('/text-display');
  };

  return (
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-12">
          <h1 className="font-semibold">Learn With AI</h1>
          <button className="btn btn-primary mt-3" onClick={navigateToTextDisplay}>Learn With AI</button>
          <h1>Learn With Videos</h1>
          <h1>Learn With Mentor</h1>
          <h1>Revision</h1>
          <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
