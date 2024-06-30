import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default function TextDisplay() {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/get-text")
      .then((response) => {
        setTextContent(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching the text content:", error);
      });
  }, []);

  return (
    <div className="container bg-background">
      <div className="row">
        <div className="col-12">
          <ReactMarkdown className="formatted-text ">
            {textContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
