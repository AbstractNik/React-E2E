export default function AccordionItemV2({ id, title, isOpen, onToggle, children }) {
  return (
    <div className={`accordion-item ${isOpen ? "open" : "closed"}`}>
      <div
        className="accordion-header"
        onClick={() => onToggle(id)}
      >
        <span className="accordion-number">
          {String(id).padStart(2, "0")}
        </span>
        <span className="accordion-question">{title}</span>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}
