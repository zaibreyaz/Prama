import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

export const landingCards = [
  {
    heading: "Learn With AI",
    description: `Learning with AI is important because it offers personalized,
                adaptive learning experiences, making education more efficient
                and effective. AI can provide instant feedback, identify
                knowledge gaps, and tailor content to individual needs. `,
  },
  {
    heading: "Classroom",
    description: `Learning with mentors is crucial because mentors provide
                personalized guidance, share valuable experience, and offer
                constructive feedback. They help learners navigate challenges,
                build confidence, and develop professional networks. `,
  },
  {
    heading: "Give A Test",
    description: `Giving tests is important because they reinforce learning,
                identify knowledge gaps, and measure progress. Tests encourage
                active recall, which strengthens memory and understanding. `,
  },
];

export default function SecuredPage() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navigateToTextDisplay = () => {
    navigate("/learn-with-ai-main-page");
  };
  const navigateToClassroom = () => {
    navigate("/classroom");
  };
  const navigateToTest = () => {
    navigate("/test");
  };

  return (
    <section className="p-5 min-h-screen bg-background flex flex-col items-center justify-center">
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
                  ? navigateToTextDisplay
                  : index === 1
                  ? navigateToClassroom
                  : navigateToTest
              }
            >
              <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
              <div className="relative py-10 px-2">
                <h2 className="text-4xl text-primaryText text-montserrat text-left font-bold mb-7">
                  {card.heading}
                </h2>
                <p className="text-lg text-secondaryText  text-left text-lato">
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
