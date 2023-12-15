//Step one
import React from "react";

const StepOne = ({
  checkboxData,
  selectedCheckboxes,
  handleCheckboxChange,
  setStep,
}) => {
  return (
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
      <button onClick={() => setStep(2)}>Next</button>
    </div>
  );
};

export default StepOne;
