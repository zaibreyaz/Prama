import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const landingCards = [
  {
    heading: "Ask Your Chatbot",
    description: `Learning with AI is important because it offers personalized, adaptive learning experiences, making education more efficient and effective. AI can provide instant feedback, identify knowledge gaps, and tailor content to individual needs. `,
  },
  {
    heading: "Upload Your Files",
    description: `Learning with AI is important because it offers personalized, adaptive learning experiences, making education more efficient and effective. AI can provide instant feedback, identify knowledge gaps, and tailor content to individual needs. `,
  },
  {
    heading: "Upload Video Link",
    description: `Learning with AI is important because it offers personalized, adaptive learning experiences, making education more efficient and effective. AI can provide instant feedback, identify knowledge gaps, and tailor content to individual needs. `,
  },
];

export default function LearnWithAiMainPAge() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navigateToChatBot = () => {
    navigate("/chatbot");
  };

  const navigateToFileUpload = () => {
    navigate("/file-upload");
  };

  const navigateToVideo = () => {
    navigate("/video");
  };

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
              className="bg-background relative rounded-lg shadow-lg p-4 w-full cursor-pointer transform transition-transform duration-700 hover:scale-105"
              onClick={
                index === 0
                  ? navigateToChatBot
                  : index === 1
                  ? navigateToFileUpload
                  : navigateToVideo
              }
            >
              <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
              <div className="relative p-5 flex flex-col items-center justify-center gap-y-2">
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
    </section>
  );
}

{
  /* <button className="btn btn-danger mt-3" onClick={handleLogout}>
    Logout
  </button>; */
}
