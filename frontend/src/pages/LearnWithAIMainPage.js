import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IoMdSettings } from "react-icons/io";

export const landingCards = [
    {
      heading: "Chatbot",
      description: `Click here`,
    },
    {
      heading: "File",
      description: `Click here`,
    },
    {
      heading: "Video",
      description: `Click here`,
    },
  ];

  export default function LearnWithAiMainPAge() {
    const navigate = useNavigate();
  
    // useEffect(() => {
    //   const token = localStorage.getItem('token');
    //   if (!token) {
    //     navigate('/login');
    //   } else {
    //     axios.get('http://127.0.0.1:5001/secure', {
    //       headers: {
    //         Authorization: 'Bearer ' + token
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error, 'error');
    //       if (error.response && error.response.status === 401) {
    //         navigate('/login');
    //       }
    //     });
    //   }
    // }, [navigate]);
  
    // const handleLogout = () => {
    //   // Perform any necessary cleanup or logout logic here
    //   navigate("/login");
    // };
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    const navigateToChatBot = () => {
      navigate("/chatbot");
    };

    const navigateToFileUpload=()=>{
      navigate("/file-upload");
    }

    const navigateToVideo=()=>{
      navigate("/video");
    }
  
    return (
      <section className="container h-screen bg-background flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center justify-center w-full gap-y-10 px-28">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h2 className="text-6xl text-primaryText font-montserrat">Pramā</h2>
            <p className="text-center text-secondaryText">
              “We want that education, by which character is formed, strength of
              mind is increased, intellect is expanded and by which one can stand
              on one's on feet.” -- <em>Swami Vivekananda</em>
            </p>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {landingCards.map((card, index) => (
              <div
                key={index}
                className="bg-background relative rounded-lg shadow-lg p-4 w-full cursor-pointer"
                onClick={index === 0 ? navigateToChatBot: (index==1?navigateToFileUpload: navigateToVideo)}
              >
                <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
                <div className="relative">
                  <h2 className="text-4xl text-primaryText text-montserrat text-center font-bold mb-4">
                    {card.heading}
                  </h2>
                  <p className="text-lg text-secondaryText text-lato">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* settings */}
  
        <div className="absolute bottom-12 lg:bottom-7 right-7 z-40 flex justify-end items-center">
          <div
            className={`text-3xl text-white bg-accent shadow-lg rounded-full flex justify-center items-center cursor-pointer w-9 h-9 lg:w-12 lg:h-12 `}
            onClick={toggleSidebar}
          >
            <IoMdSettings />
          </div>
        </div>
      </section>
    );
  }
  
  {
    /* <button className="btn btn-danger mt-3" onClick={handleLogout}>
    Logout
  </button>; */
  }