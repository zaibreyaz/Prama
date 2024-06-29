import React from "react";
import { useNavigate } from "react-router-dom";

export default function Chatbot() {
  const navigate = useNavigate();
  const navigateToChatBotResults = () => {
    navigate("/chatbot/results");
  };

  return (
    <section className="container h-screen bg-background flex flex-col items-center justify-center">
      <div className="relative  py-10  rounded-lg shadow-lg w-full max-w-5xl cursor-pointer">
        <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
        <div className="relative flex flex-col items-center justify-center w-full gap-y-10 px-28">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <h2 className="text-6xl text-primaryText font-montserrat">
              Ask Your Chatbot
            </h2>
            <p className="text-center text-secondaryText">
              "Education is the most powerful weapon which you can use to change
              the world." -- <em> Nelson Mandela </em>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <form className="flex items-end justify-between gap-x-10">
                <div className="">
                  <label
                    htmlFor="text"
                    className="block text-xl text-secondaryText mb-2"
                  >
                    Enter the subject name where you got stuck!
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="sub"
                    className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-highlight text-primaryText"
                    placeholder="Enter subject name ....."
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="text"
                    className="block text-xl text-secondaryText mb-2"
                  >
                    Enter your preparation level!
                  </label>
                  <select
                    name="subject"
                    id="sub"
                    className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-highlight text-primaryText"
                  >
                    <option value="">Select level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    className="w-full px-5 bg-accent text-white py-2 rounded-lg hover:bg-highlight focus:outline-none  focus:ring-highlight"
                    onClick={navigateToChatBotResults}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
