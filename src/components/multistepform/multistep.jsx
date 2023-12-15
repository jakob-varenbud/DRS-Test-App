import { useState } from "react";
import StepOne from "./multistepUtils/StepOne";
import StepTwo from "./multistepUtils/StepTwo";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [formData, setFormData] = useState({
    preName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const checkboxData = [
    { id: 1, label: "Delle" },
    { id: 2, label: "Kratzer" },
    { id: 3, label: "Innenraum" },
    { id: 4, label: "Felge" },
    { id: 5, label: "Hagelschaden" },
  ];

  const handleCheckboxChange = (checkboxId) => {
    setSelectedCheckboxes((prevSelection) => {
      if (prevSelection.includes(checkboxId)) {
        return prevSelection.filter((id) => id !== checkboxId);
      } else {
        return [...prevSelection, checkboxId];
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {step === 1 && (
        <StepOne
          checkboxData={checkboxData}
          selectedCheckboxes={selectedCheckboxes}
          handleCheckboxChange={handleCheckboxChange}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          formData={formData}
          handleInputChange={handleInputChange}
          setStep={setStep}
        />
      )}
      {/* Other steps/components go here */}
    </div>
  );
}

export default MultiStepForm;
