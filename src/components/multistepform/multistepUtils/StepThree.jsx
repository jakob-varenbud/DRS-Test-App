import React from "react";

const StepThree = ({ uploadedFiles, handleFileUpload, setStep }) => {
  return (
    <div>
      <h2>Step Three: Upload Files</h2>
      <input type="file" onChange={handleFileUpload} multiple />
      <div>
        <h3>Uploaded Files:</h3>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={() => setStep(2)}>Back</button>
      <button onClick={() => setStep(4)}>Next</button>
    </div>
  );
};

export default StepThree;
