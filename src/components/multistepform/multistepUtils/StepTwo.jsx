import React from "react";

const StepTwo = ({ formData, handleInputChange, setStep }) => {
  return (
    <div>
      <input
        type="text"
        name="preName"
        value={formData.preName}
        onChange={handleInputChange}
        placeholder="Vorname"
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Nachname"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Telefon"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Deine Nachricht"
      />
      <button onClick={() => setStep(step - 1)}>Back</button>
      <button onClick={() => setStep(step + 1)}>Next</button>
    </div>
  );
};

export default StepTwo;
