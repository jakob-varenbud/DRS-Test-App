import React, { useState } from 'react';

function MultiStepForm() {
  const [step, setStep] = useState(1); // Tracks the current step
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]); // Manages selected checkboxes-Selection
  const [formData, setFormData] = useState({
    preName: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Checkbox data and labels
  const checkboxData = [
    { id: 1, label: 'Delle' },
    { id: 2, label: 'Kratzer' },
    { id: 3, label: 'Innenraum' },
    { id: 4, label: 'Felge' },
    { id: 5, label: 'Hagelschaden'}
  ];

  // Function to handle checkbox changes
  const handleCheckboxChange = (checkboxId) => {
    setSelectedCheckboxes((prevSelection) => {
      // Check if the checkbox is already in the selection
      if (prevSelection.includes(checkboxId)) {
        // If it is, remove it from the selection
        return prevSelection.filter((id) => id !== checkboxId);
      } else {
        // If it's not selected, add it to the selection
        return [...prevSelection, checkboxId];
      }
    });
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const stepOne = (
    <div>
      {checkboxData.map((checkbox) => (
        <div key={checkbox.id}>
          <input
            type="checkbox"
            id={checkbox.id}
            name={checkbox.id}
            value={checkbox.id}
            checked={selectedCheckboxes.includes(checkbox.id)}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          <label htmlFor={checkbox.id}>{checkbox.label}</label>
        </div>
      ))}
      <button onClick={() => setStep(step + 1)}>Next</button>
    </div>
  );

  const stepTwo = (
    <div>
      <input
        type="text"
        name="preName"
        value={formData.preName}
        onChange={handleInputChange}
        placeholder="Pre Name"
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
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
        placeholder="Phone"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Your message"
      />
      <button onClick={() => setStep(step - 1)}>Back</button>
      <button onClick={() => setStep(step + 1)}>Next</button>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return stepOne;
      case 2:
        return stepTwo;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
}

export default MultiStepForm;

