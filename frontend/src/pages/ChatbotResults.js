// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
// import "./ChatbotResults.css";

// const ChatbotResults = () => {
//   const location = useLocation();
//   const generatedContent = location.state?.generatedContent || [];
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;

//   const totalPages = Math.ceil(generatedContent.length / itemsPerPage);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const currentPageItems = generatedContent.slice(startIndex, endIndex);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const navigate = useNavigate();

//   return (
//     <section className="container min-h-screen bg-background flex flex-col items-center">
//       <div className="flex flex-col items-center justify-center w-full px-28">
//         <div className="flex flex-col items-center justify-center gap-y-2">
//           <h2 className="text-4xl text-primaryText font-montserrat">
//             Generated Content
//           </h2>
//         </div>
//         <div
//           className="grid grid-cols-4 gap-4 py-5 flex-grow"
//           style={{
//             overflowY: "auto",
//             gridAutoFlow: "row dense",
//           }}
//         >
//           {currentPageItems.map((item, index) => (
//             <div
//               key={index}
//               className="relative p-8 rounded-lg shadow-lg w-full max-w-md cursor-pointer"
//               onClick={() => navigate("/chatbot/results/text-display", { state: { content: item } })}
//             >
//               <div className="absolute inset-0 backdrop-blur-xl bg-white/10 shadow-lg shadow-accent rounded-lg"></div>
//               <div className="relative">
//                 <div className="text-white formatted-text">
//                   <ReactMarkdown>{item}</ReactMarkdown>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {totalPages > 1 && (
//           <div className="flex justify-center mt-4 gap-x-3">
//             {[...Array(totalPages)].map((_, page) => (
//               <button
//                 key={page}
//                 className={`px-4 py-2 rounded-lg ${
//                   page + 1 === currentPage ? "bg-accent text-white" : "bg-white text-accent"
//                 }`}
//                 onClick={() => handlePageChange(page + 1)}
//               >
//                 {page + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ChatbotResults;


