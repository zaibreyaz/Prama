import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./TextDisplay.css";

export default function TextDisplay() {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5001/get-text")
      .then((response) => {
        setTextContent(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching the text content:", error);
      });
  }, []);

  return (
    <section className="px-24 py-5 min-h-screen bg-background w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <div className="col-12">
          <ReactMarkdown className="formatted-text text-lg ">
            {textContent}
          </ReactMarkdown>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="w-full bg-accent text-white p-2 rounded-lg hover:bg-highlight focus:outline-none  focus:ring-highlight font-semibold font-ubuntu"
          >
            Quiz Time
          </button>
        </div>
      </div>
    </section>
  );
}
