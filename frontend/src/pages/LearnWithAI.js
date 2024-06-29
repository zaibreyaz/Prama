import React from "react";

const LearnWithAI = () => {
  return (
    <section className="p-5 min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center w-full gap-y-10 px-28">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-6xl text-primaryText font-montserrat">
            Learn with AI
          </h2>
          <p className="text-center text-secondaryText">
            “We want that education, by which character is formed, strength of
            mind is increased, intellect is expanded and by which one can stand
            on one's on feet.” -- <em>Swami Vivekananda</em>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="bg-background relative rounded-lg shadow-lg p-4 w-full cursor-pointer">
            <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
            <div className="relative">
              <h2 className="text-4xl text-primaryText text-montserrat text-center font-bold mb-4">
                HI
              </h2>
              <p className="text-lg text-secondaryText text-lato">
                sdgnsdnsndkns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* settings */}
    </section>
  );
};

export default LearnWithAI;
