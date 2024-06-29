import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

export const landingCards = [
  {
    heading: "Learn With AI",
    description: `Learning with AI is important because it offers personalized,
                adaptive learning experiences, making education more efficient
                and effective. AI can provide instant feedback, identify
                knowledge gaps, and tailor content to individual needs. This
                enhances engagement, accessibility, and outcomes, ensuring that
                learners can progress at their own pace and receive support
                exactly when needed. AI-powered tools democratize education,
                making quality learning resources available to a broader
                audience.`,
  },
  {
    heading: "Classroom",
    description: `Learning with mentors is crucial because mentors provide
                personalized guidance, share valuable experience, and offer
                constructive feedback. They help learners navigate challenges,
                build confidence, and develop professional networks. Mentors
                inspire and motivate, fostering growth and skill development in
                ways that self-study or traditional education alone cannot
                achieve.`,
  },
  {
    heading: "Give A Test",
    description: `Giving tests is important because they reinforce learning,
                identify knowledge gaps, and measure progress. Tests encourage
                active recall, which strengthens memory and understanding. They
                also provide feedback, helping students and educators adjust study
                methods and focus areas. Regular testing builds confidence and
                prepares individuals for real-world challenges, ensuring they
                retain and apply what they've learned effectively.`,
  },
];

export default function SecuredPage() {
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

  const handleLogout = () => {
    // Perform any necessary cleanup or logout logic here
    navigate("/login");
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navigateToTextDisplay = () => {
    navigate("/learn-with-ai-main-page");
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
              onClick={index === 0 ? navigateToTextDisplay : null}
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
    </section>
  );
}

{
  /* <button className="btn btn-danger mt-3" onClick={handleLogout}>
  Logout
</button>; */
}
