export default function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${isOpen ? "open" : "closed"}`}>
      <div className="accordion-header" onClick={onToggle}>
        <span className="accordion-number">
          {String(item.id).padStart(2, "0")}
        </span>
        <span className="accordion-question">{item.question}</span>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{item.content}</p>
        </div>
      )}
    </div>
  );
}
