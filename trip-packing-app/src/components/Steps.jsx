import { useState } from "react";

function Steps({messages}) {
const [step, setStep] = useState(1);
const [isOpen, setIsOpen] = useState(true);
    // Static for now; will become state later
    function handleNext() {
        setStep((s) => (s < 3 ? s + 1 : s));
      }
    
      function handlePrev() {
        setStep((s) => (s > 1 ? s - 1 : s));
      }
  return (
    <>
    <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        &times;
    </button>
    {isOpen ? (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950F2", color: "#fff" }}
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950F2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
    ) : (
      <div className="fallback-message">
        <p className="fallback-text">Steps are closed. Click the × button to reopen!</p>
      </div>
    )}
    </>
  );
}

export default Steps