import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import "./ChatbotResults.css";

export const chatBotAnswer = [
  {
    description: `**1. Introduction to database:**
* What is a database?
* Types of databases
* why use a database?
* benefits using DBMS`,
  },
  {
    description: `**2. Data models and structures:**
* ER diagram
* Data types
* Keys
* Relationships`,
  },
  {
    description: `**3. Introduction to learning model:**
* What is a learning model?
* Types of learning models
* why use a learning model?
* benefits using DBMS`,
  },
  {
    description: `**4. Data models and structures:**
* ER diagram
* Data types
* Keys
* Relationships`,
  },
  {
    description: `**5. Introduction to learning model:**
* What is a learning model?
* Types of learning models
* why use a learning model?
* benefits using DBMS`,
  },
  {
    description: `**6. Data models and structures:**
* ER diagram
* Data types
* Keys
* Relationships`,
  },
  {
    description: `**7. Introduction to database:**
* What is a database?
* Types of databases
* why use a database?
* benefits using DBMS

* Data types
* Keys
* Relationships`,
  },
  {
    description: `**8. Data models and structures:**
* ER diagram
* Data types
* Keys
* Relationships`,
  },
  {
    description: `**9. Data models and structures:**
* ER diagram
* Data types
* Keys
* Relationships`,
  },
  {
    description: `**10. Introduction to database:**
* What is a database?
* Types of databases
* why use a database?
* benefits using DBMS`,
  },
  {
    description: `**11. Data models and structures:**
* ER diagram
* Data types
* Keys
* Relationships

* Data types
* Keys
* Relationships`,
  },
];

const ChatbotResults = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(chatBotAnswer.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageItems = chatBotAnswer.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const navigate = useNavigate();
  const navigateToChatBotIndividualResults = () => {
    navigate("/chatbot/results/text-display");
  };

  return (
    <section className="p-5 min-h-screen bg-background flex flex-col items-center ">
      <div className=" flex flex-col items-center justify-center w-full px-28">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-4xl text-primaryText font-montserrat">
            'Input field data' for 'level'
          </h2>
        </div>
        <div
          className="grid grid-cols-4 gap-4 py-5 flex-grow"
          style={{
            overflowY: "auto",
            gridAutoFlow: "row dense",
          }}
          onClick={navigateToChatBotIndividualResults}
        >
          {currentPageItems.map((item, index) => (
            <div className="relative  p-8  rounded-lg shadow-lg w-full max-w-md cursor-pointer">
              <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>

              <div className="relative ">
                <div key={index} className="text-white formatted-text">
                  <ReactMarkdown>{item.description}</ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 gap-x-3">
            {[...Array(totalPages)].map((_, page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg ${
                  page + 1 === currentPage
                    ? "bg-accent text-white"
                    : "bg-white text-accent"
                }`}
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ChatbotResults;
