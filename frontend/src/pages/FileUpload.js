import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [userName, setUserName] = useState('');
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('');
  const [filePath, setFilePath] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile.type.startsWith('image/') || uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
      setFileType(uploadedFile.type.startsWith('image/') ? 'imageFile' : 'pdfFile');
      setError('');
    } else {
      setError('Please upload a valid image or PDF file');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !file) {
      setError('Please fill in all fields and upload a file');
      return;
    }

    const formData = new FormData();
    formData.append('userName', userName);
    formData.append(fileType, file);

    axios.post('http://127.0.0.1:5000/file-upload', formData)
      .then(response => {
        const { filePath, resultData, imageInformation, pdfInformation } = response.data;
        setFilePath(filePath);
        setResult({
          resultData,
          imageInformation,
          pdfInformation
        });
        setUserName('');
        setFile(null);
        setError('');
      })
      .catch(error => {
        setError('Error uploading file');
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Upload Your File</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="userName">
              User Input
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={handleNameChange}
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="file">
              Upload File (Image or PDF)
            </label>
            <input
              type="file"
              id="file"
              accept="image/*, application/pdf"
              onChange={handleFileUpload}
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        {result && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Result:</h2>
            <p>{result.resultData}</p>
            {result.imageInformation && (
              <p className="mt-4">
                <strong>Image Information:</strong> {result.imageInformation}
              </p>
            )}
            {result.pdfInformation && (
              <p className="mt-4">
                <strong>PDF Information:</strong> {result.pdfInformation}
              </p>
            )}
          </div>
        )}
        {filePath && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Uploaded File Path:</h2>
            <p>{filePath}</p>
            <a href={filePath} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">View File</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
