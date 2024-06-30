import React from "react";
export const landingCards = [
  {
    heading: "Physical Classroom",
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
    heading: "Virtual Classroom",
    description: `Learning with mentors is crucial because mentors provide
                personalized guidance, share valuable experience, and offer
                constructive feedback. They help learners navigate challenges,
                build confidence, and develop professional networks. Mentors
                inspire and motivate, fostering growth and skill development in
                ways that self-study or traditional education alone cannot
                achieve.`,
  },
];

const Classroom = () => {
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

        <div className="flex flex-col md:flex-row  w-full gap-10">
          <div className="bg-background relative rounded-lg shadow-lg px-10 w-full cursor-pointer transform transition-transform duration-700 hover:scale-105">
            <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
            <div className="relative gap-y-5">
              <div className="text-4xl text-primaryText text-montserrat text-center font-bold py-10">
                Virtual Classroom
              </div>
              <div className="text-lg text-secondaryText text-lato ">
                It provides live classes, premium courses, also one to one
                sessions, and many more...
              </div>

              <div className="text-center flex gap-x-8 py-10">
                <button
                  type="button"
                  className="w-full bg-accent text-white py-2 rounded-lg hover:bg-highlight focus:outline-none  focus:ring-highlight"
                >
                  Login as a Teacher
                </button>
                <button
                  type="button"
                  className="w-full bg-accent text-white py-2 rounded-lg hover:bg-highlight focus:outline-none  focus:ring-highlight"
                >
                  Login as a Student
                </button>
              </div>
            </div>
          </div>

          <div className="bg-background relative rounded-lg shadow-lg px-10 w-full cursor-pointer transform transition-transform duration-700 hover:scale-105">
            <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
            <div className="relative ">
              <div className="text-4xl text-primaryText text-montserrat text-center font-bold py-10">
                Physical Classroom
              </div>
              <div className="text-lg text-secondaryText text-lato ">
                It provides Smart class room, personal tuitions, interactive
                activities and many more...
              </div>

              <div className="text-center flex gap-x-8 py-10">
                <button
                  type="button"
                  className="w-full bg-accent text-white py-2 rounded-lg hover:bg-highlight focus:outline-none  focus:ring-highlight"
                >
                  Login as a Teacher
                </button>
                <button
                  type="button"
                  className="w-full bg-accent text-white py-2 rounded-lg hover:bg-highlight focus:outline-none  focus:ring-highlight"
                >
                  Login as a Student
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classroom;
